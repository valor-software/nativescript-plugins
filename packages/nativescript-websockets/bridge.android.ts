import { ResolvedSslOptions } from './common';
import { NativeBridgeDefinition, WebSocketBridgeConnectOptions } from './websocket.definition';

interface ExtendedArrayBuffer extends ArrayBuffer {
  from?(nativeBuffer: java.nio.ByteBuffer): ArrayBuffer;
}

const fastConversionAvailable = !!(ArrayBuffer as unknown as ExtendedArrayBuffer).from;

@NativeClass()
class WebSocketListenerImpl extends okhttp3.WebSocketListener {
  private owner: WeakRef<NativeBridge>;
  constructor(owner: NativeBridge) {
    super();
    this.owner = new WeakRef(owner);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (global as any).__native(this);
  }
  public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void {
    this.owner.get()?.onClosed(param0, param1, param2);
  }
  public onMessage(param0: okhttp3.WebSocket, param1: string | okio.ByteString): void {
    this.owner.get()?.onMessage(param0, param1);
  }
  public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void {
    this.owner.get()?.onFailure(param0, param1, param2);
  }
  public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void {
    this.owner.get()?.onOpen(param0, param1);
  }
  public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void {
    this.owner.get()?.onClosing(param0, param1, param2);
  }
}

function getDefaultOrigin(uri: string) {
  try {
    let defaultOrigin;
    let scheme = '';

    const requestURI = new java.net.URI(uri);
    switch (requestURI.getScheme()) {
      case 'wss':
        scheme += 'https';
        break;
      case 'ws':
        scheme += 'http';
        break;
      case 'http':
      case 'https':
        scheme += requestURI.getScheme();
        break;
      default:
        break;
    }

    if (requestURI.getPort() != -1) {
      defaultOrigin = `${scheme}://${requestURI.getHost()}:${requestURI.getPort()}`;
    } else {
      defaultOrigin = `${scheme}://${requestURI.getHost()}`;
    }

    return defaultOrigin;
  } catch (e) {
    throw new java.lang.IllegalArgumentException('Unable to set ' + uri + ' as default origin header');
  }
}

function certificateFromBase64(der: string): java.security.cert.X509Certificate {
  try {
    const bytes = android.util.Base64.decode(der, android.util.Base64.DEFAULT);
    return java.security.cert.CertificateFactory.getInstance('X.509').generateCertificate(new java.io.ByteArrayInputStream(bytes)) as java.security.cert.X509Certificate;
  } catch {
    throw new TypeError('Invalid certificate');
  }
}

function sslSocketFactory(trustManager: javax.net.ssl.X509TrustManager): javax.net.ssl.SSLSocketFactory {
  const trustManagers = Array.create(javax.net.ssl.TrustManager, 1);
  trustManagers[0] = trustManager;
  const context = javax.net.ssl.SSLContext.getInstance('TLS');
  context.init(null as never, trustManagers, null as never);
  return context.getSocketFactory();
}

function trustManagerForRoots(roots: java.security.cert.X509Certificate[]): javax.net.ssl.X509TrustManager {
  const keyStore = java.security.KeyStore.getInstance(java.security.KeyStore.getDefaultType());
  keyStore.load(null as never, null as never);
  roots.forEach((root, i) => keyStore.setCertificateEntry(`ca${i}`, root));
  const factory = javax.net.ssl.TrustManagerFactory.getInstance(javax.net.ssl.TrustManagerFactory.getDefaultAlgorithm());
  factory.init(keyStore);
  return factory.getTrustManagers()[0] as javax.net.ssl.X509TrustManager;
}

// NativeScript runs these callbacks on the main thread, where a thrown exception crashes the app instead of
// failing the handshake. So nothing here throws: the trust manager accepts every chain and the decision is made
// by the hostname verifier, which OkHttp calls right after the handshake and before any request is written.
const acceptAnyChain = new javax.net.ssl.X509TrustManager({
  checkClientTrusted() {
    // server-side only
  },
  checkServerTrusted() {
    // see the comment above
  },
  getAcceptedIssuers() {
    // OkHttp needs a non-null array
    return Array.create(java.security.cert.X509Certificate, 0);
  },
});

function hostnameVerifier(accept: (leaf: java.security.cert.Certificate) => boolean): javax.net.ssl.HostnameVerifier {
  return new javax.net.ssl.HostnameVerifier({
    verify(hostname: string, session: javax.net.ssl.SSLSession) {
      try {
        const chain = session.getPeerCertificates();
        return chain.length > 0 && accept(chain[0]);
      } catch {
        return false;
      }
    },
  });
}

function configureSsl(builder: okhttp3.OkHttpClient.Builder, host: string, ssl: ResolvedSslOptions) {
  // CertificatePinner's 'sha256/<base64 SPKI hash>' format
  const pins = new Set([...ssl.pinHashes.map((hash) => `sha256/${hash}`), ...ssl.pinCertificates.map((der) => okhttp3.CertificatePinner.pin(certificateFromBase64(der)))]);
  const roots = ssl.ca.map(certificateFromBase64);

  switch (ssl.validation) {
    case 'system': {
      if (roots.length) {
        const trustManager = trustManagerForRoots(roots);
        builder.sslSocketFactory(sslSocketFactory(trustManager), trustManager);
      }
      if (pins.size) {
        const pinArray = Array.create(java.lang.String, pins.size);
        Array.from(pins).forEach((pin, i) => (pinArray[i] = pin));
        builder.certificatePinner(new okhttp3.CertificatePinner.Builder().add(host, pinArray).build());
      }
      break;
    }
    case 'pins-only':
      builder.sslSocketFactory(sslSocketFactory(acceptAnyChain), acceptAnyChain);
      // Only the leaf is bound to the handshake; any other certificate in the presented chain is attacker-controlled.
      builder.hostnameVerifier(hostnameVerifier((leaf) => pins.has(okhttp3.CertificatePinner.pin(leaf))));
      break;
    case 'none':
      builder.sslSocketFactory(sslSocketFactory(acceptAnyChain), acceptAnyChain);
      builder.hostnameVerifier(hostnameVerifier(() => true));
      break;
  }
}

export class NativeBridge extends NativeBridgeDefinition {
  client!: okhttp3.OkHttpClient;
  listener!: WebSocketListenerImpl;
  nativeWs!: okhttp3.WebSocket;
  startLooper?: android.os.Looper;
  handler?: android.os.Handler;
  private _restrictedCodes = new Set([1004, 1005, 1006, 1015]);
  connect({ url, protocols, headers, ssl }: WebSocketBridgeConnectOptions): void {
    this.startLooper = android.os.Looper.myLooper();
    this.handler = new android.os.Handler(this.startLooper);
    protocols = protocols || [];
    const requestBuilder = new okhttp3.Request.Builder();
    requestBuilder.url(url);

    for (const header of Object.keys(headers.headers)) {
      requestBuilder.addHeader(header, `${headers.headers[header]}`);
    }

    if (protocols.length > 0) {
      requestBuilder.addHeader('Sec-WebSocket-Protocol', protocols.join(','));
    }
    if (!headers.headers['origin']) {
      requestBuilder.addHeader('origin', getDefaultOrigin(url));
    }
    // TODO: cookies? There isn't a default cookie jar in android/nativescript

    const request = requestBuilder.build();
    // readTimeout 0 disables read timeouts
    const clientBuilder = new okhttp3.OkHttpClient.Builder().connectTimeout(10, java.util.concurrent.TimeUnit.SECONDS).writeTimeout(10, java.util.concurrent.TimeUnit.SECONDS).readTimeout(0, java.util.concurrent.TimeUnit.MINUTES);
    if (ssl) {
      configureSsl(clientBuilder, request.url().host(), ssl);
    }
    this.client = clientBuilder.build();

    this.listener = new WebSocketListenerImpl(this);
    this.nativeWs = this.client.newWebSocket(request, this.listener);
  }
  send(data: string | ArrayBuffer | ArrayBufferView | Blob): void {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      const byteBuffer = Array.create('byte', data.byteLength);
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      for (let i = 0; i < view.length; i++) {
        byteBuffer[i] = view[i];
      }
      this.nativeWs.send(okio.ByteString.of(byteBuffer));
      return;
    }
    if (typeof data === 'string') {
      this.nativeWs.send(data);
      return;
    }
    throw new Error('Unsupported data type');
  }
  closeWithCodeReason(statusCode: number, closeReason: string) {
    this.nativeWs.close(statusCode, closeReason);
  }
  sendPing() {
    this.nativeWs.send(okio.ByteString.EMPTY);
  }

  public onClosed(ws: okhttp3.WebSocket, code: number, reason: string): void {
    this.ws._websocketClosed(code, reason, true);
  }
  public onMessage(ws: okhttp3.WebSocket, data: okio.ByteString | string): void {
    if (!this.isCorrectThread()) {
      this.scheduleToThread(() => this.onMessage(ws, data));
      return;
    }
    if (data instanceof okio.ByteString) {
      let arrayBuffer: ArrayBuffer;
      if (fastConversionAvailable) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        arrayBuffer = (ArrayBuffer as unknown as ExtendedArrayBuffer).from!(data.asByteBuffer());
      } else {
        const bufferView = new Uint8Array(data.size());
        for (let i = 0; i < data.size(); i++) {
          bufferView[i] = data.getByte(i);
        }
        arrayBuffer = bufferView.buffer;
      }

      this.ws._websocketMessage(arrayBuffer);
      return;
    }
    this.ws._websocketMessage(data);
  }
  public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void {
    if (!this.isCorrectThread()) {
      this.scheduleToThread(() => this.onFailure(param0, param1, param2));
      return;
    }
    let message = param1.getLocalizedMessage();
    if (!message) {
      if (param1 instanceof java.io.EOFException) {
        message = 'The remote server closed the connection.';
      }
    }
    this.ws._websocketFailed(message);
  }
  public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void {
    if (!this.isCorrectThread()) {
      this.scheduleToThread(() => this.onOpen(param0, param1));
      return;
    }
    this.ws._websocketOpen(param1.protocol().toString());
  }
  public onClosing(websocket: okhttp3.WebSocket, code: number, reason: string): void {
    // prevent invalid codes
    if (this._restrictedCodes.has(code)) {
      websocket.close(1000, reason);
      return;
    }
    websocket.close(code, reason);
  }

  private isCorrectThread() {
    return !this.handleThreading || !this.startLooper || android.os.Looper.myLooper() === this.startLooper;
  }
  private scheduleToThread(action: () => void) {
    if (this.handleThreading && this.handler) {
      this.handler.post(
        new java.lang.Runnable({
          run: action,
        }),
      );
    } else {
      action();
    }
  }
}
