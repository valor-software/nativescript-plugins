import { HeaderType } from './common';

export interface WebSocketPolyfill {
  _websocketOpen(protocol: string): void;
  _websocketClosed(code: number, reason: string, wasClean: boolean): void;
  _websocketMessage(message: string | ArrayBuffer): void;
  _websocketFailed(message: string): void;
}

export abstract class NativeBridgeDefinition {
  constructor(protected ws: WebSocketPolyfill) {}
  abstract connect(url: string, protocols: string | string[], headers: HeaderType): void;
  abstract send(data: string | ArrayBuffer | ArrayBufferView | Blob): void;
  abstract closeWithCodeReason(statusCode: number, closeReason: string): void;
  abstract sendPing(): void;
}
