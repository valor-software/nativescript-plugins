import { NativeBridgeDefinition, WebSocketPolyfill } from './websocket.definition';

@NativeClass()
class WebSocketListenerImpl extends okhttp3.WebSocketListener {
  private owner: WeakRef<NativeBridge>;
  constructor(owner: NativeBridge) {
    super();
    this.owner = new WeakRef(owner);
    return global.__native(this);
  }
  public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void {
    this.owner.get()?.onClosed(param0, param1, param2);
  }
  public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
  public onMessage(param0: okhttp3.WebSocket, param1: string): void;
  public onMessage(param0: any, param1: any): void {
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

export class NativeBridge extends NativeBridgeDefinition {
  client: okhttp3.OkHttpClient;
  listener: WebSocketListenerImpl;
  nativeWs: okhttp3.WebSocket;
  _connect(url: string, protocols: string, headers: any, socketId: number): void {
    this.client = new okhttp3.OkHttpClient.Builder()
      .connectTimeout(10, java.util.concurrent.TimeUnit.SECONDS)
      .writeTimeout(10, java.util.concurrent.TimeUnit.SECONDS)
      .readTimeout(0, java.util.concurrent.TimeUnit.MINUTES) // Disable timeouts for read
      .build();
    const requestBuilder = new okhttp3.Request.Builder();
    requestBuilder.url(url);

    this.listener = new WebSocketListenerImpl(this);
    this.nativeWs = this.client.newWebSocket(requestBuilder.build(), this.listener);
  }
  send(data: string | ArrayBuffer | ArrayBufferView | Blob): void {
    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      const byteBuffer = Array.create('byte', data.byteLength);;
      const view = new Uint8Array(data instanceof ArrayBuffer ? data : data.buffer);
      for(let i = 0; i < view.length; i++) {
        byteBuffer[i] = view[i];
      }
      this.nativeWs.send(okio.ByteString.of(byteBuffer));
      return;
    }
    if (typeof data === 'string') {
      this.nativeWs.send(data);
      return;
    }
    throw new Error('Method not implemented.');
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
  public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
  public onMessage(param0: okhttp3.WebSocket, param1: string): void;
  public onMessage(ws: okhttp3.WebSocket, data: okio.ByteString | string): void {
    if(data instanceof okio.ByteString) {
      // const arrayBuffer = new ArrayBuffer(data.size());
      const bufferView = new Uint8Array(data.size());
      for(let i= 0; i < data.size(); i++) {
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
    if(!message) {
      if(param1 instanceof java.io.EOFException) {
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
