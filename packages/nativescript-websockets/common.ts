import { Observable } from '@nativescript/core';

export class NativescriptWebsocketsCommon extends Observable {}
export type CloseEvent =
  | {
      code: number;
      reason: string;
      wasClean: boolean;
    }
  | ErrorEvent;

export type ErrorEvent = { message: string };

export type MessageEvent = { data: any };

export type WebSocketEventType = 'open' | 'close' | 'error' | 'message' | 'ping' | 'pong';

export class WebSocketEvent {
  constructor(type: 'open');
  constructor(type: 'message', eventInitDict: MessageEvent);
  constructor(type: 'close', eventInitDict: CloseEvent);
  constructor(type: 'error', eventInitDict: ErrorEvent);
  constructor(public type: WebSocketEventType, eventInitDict?: CloseEvent | ErrorEvent | MessageEvent) {
    Object.assign(this, eventInitDict);
  }
}
