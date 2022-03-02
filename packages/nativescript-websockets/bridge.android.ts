import { HeaderType } from './common';
import { NativeBridgeDefinition } from './websocket.definition';

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

export class NativeBridge extends NativeBridgeDefinition {
  client!: okhttp3.OkHttpClient;
  listener!: WebSocketListenerImpl;
  nativeWs!: okhttp3.WebSocket;
  _connect(url: string, protocols: string[], headers: HeaderType): void {
    protocols = protocols || [];
    this.client = new okhttp3.OkHttpClient.Builder()
      .connectTimeout(10, java.util.concurrent.TimeUnit.SECONDS)
      .writeTimeout(10, java.util.concurrent.TimeUnit.SECONDS)
      .readTimeout(0, java.util.concurrent.TimeUnit.MINUTES) // Disable timeouts for read
      .build();
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

    this.listener = new WebSocketListenerImpl(this);
    this.nativeWs = this.client.newWebSocket(requestBuilder.build(), this.listener);
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
    //
  }

  public onClosed(ws: okhttp3.WebSocket, code: number, reason: string): void {
    this.ws._websocketClosed(code, reason, true);
  }
  public onMessage(ws: okhttp3.WebSocket, data: okio.ByteString | string): void {
    if (data instanceof okio.ByteString) {
      // const arrayBuffer = new ArrayBuffer(data.size());
      const bufferView = new Uint8Array(data.size());
      for (let i = 0; i < data.size(); i++) {
        bufferView[i] = data.getByte(i);
      }
      const arrayBuffer = bufferView.buffer;
      this.ws._websocketMessage(arrayBuffer);
      return;
    }
    this.ws._websocketMessage(data);
  }
  public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void {
    let message = param1.getLocalizedMessage();
    if (!message) {
      if (param1 instanceof java.io.EOFException) {
        message = 'The remote server closed the connection.';
      }
    }
    this.ws._websocketFailed(message);
  }
  public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void {
    this.ws._websocketOpen(param1.protocol().toString());
  }
  public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void {
    //
  }
}
