import { HeaderType } from './common';

export interface WebSocketPolyfill {
  _websocketOpen(protocol: string): void;
  _websocketClosed(code: number, reason: string, wasClean: boolean): void;
  _websocketMessage(message: string | ArrayBuffer): void;
  _websocketFailed(message: string): void;
}

export interface WebSocketBridgeConnectOptions {
  url: string;
  protocols: string[];
  headers: HeaderType;
  pinnedCertificates?: string[];
}

export abstract class NativeBridgeDefinition {
  public handleThreading = true;
  constructor(protected ws: WebSocketPolyfill) {}
  abstract connect(options: WebSocketBridgeConnectOptions): void;
  abstract send(data: string | ArrayBuffer | ArrayBufferView | Blob): void;
  abstract closeWithCodeReason(statusCode: number, closeReason: string): void;
  abstract sendPing(): void;
}
