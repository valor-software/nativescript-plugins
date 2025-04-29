/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import { NativeBridge } from './bridge';
import { WebSocketEvent } from './common';
import { WebSocketPolyfill } from './websocket.definition';

type ArrayBufferView = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | DataView;

type BinaryType = 'blob' | 'arraybuffer';

const CONNECTING = 0;
const OPEN = 1;
const CLOSING = 2;
const CLOSED = 3;

const CLOSE_NORMAL = 1000;

const openWebsockets = new Set<WebSocketPolyfill>();

// const WEBSOCKET_EVENTS = ['close', 'error', 'message', 'open'];

// type WebSocketEventDefinitions = {
//   websocketOpen: [{ id: number; protocol: string }];
//   websocketClosed: [{ id: number; code: number; reason: string }];
//   websocketMessage: [
//     { type: 'binary'; id: number; data: string } | { type: 'text'; id: number; data: string }
//     //  | {type: 'blob', id: number, data: BlobData},
//   ];
//   websocketFailed: [{ id: number; message: string }];
// };

/**
 * Browser-compatible WebSockets implementation.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * See https://github.com/websockets/ws
 */
export class WebSocket implements WebSocketPolyfill {
  private nativeBridge: NativeBridge;
  static CONNECTING: number = CONNECTING;
  static OPEN: number = OPEN;
  static CLOSING: number = CLOSING;
  static CLOSED: number = CLOSED;
  static HANDLE_THREADING = true;

  CONNECTING: number = CONNECTING;
  OPEN: number = OPEN;
  CLOSING: number = CLOSING;
  CLOSED: number = CLOSED;

  // _socketId: number;
  //    _eventEmitter: NativeEventEmitter<WebSocketEventDefinitions>;
  //    _subscriptions: Array<EventSubscription>;
  _binaryType: BinaryType;

  /* eslint-disable @typescript-eslint/no-unsafe-function-type */
  onclose?: Function;
  onerror?: Function;
  onmessage?: Function;
  onopen?: Function;
  /* eslint-enable @typescript-eslint/no-unsafe-function-type */

  bufferedAmount?: number;
  extension?: string;
  protocol?: string;
  readyState: number = CONNECTING;
  url: string;

  private listeners: Record<string, Map<EventListenerOrEventListenerObject, boolean | AddEventListenerOptions> | undefined> = {
    open: new Map(),
    close: new Map(),
    error: new Map(),
    message: new Map(),
  };

  constructor(url: string, protocols?: string | Array<string>, options?: { headers: { origin?: string; [key: string]: unknown }; nativescript: { handleThreading: boolean }; [key: string]: unknown }) {
    this.nativeBridge = new NativeBridge(this);
    this.url = url;
    if (typeof protocols === 'string') {
      protocols = [protocols];
    }
    if (!Array.isArray(protocols)) {
      protocols = [];
    }

    const { headers = {}, nativescript = { handleThreading: true }, ...unrecognized } = options || ({} as { headers: { origin?: string; [key: string]: unknown }; nativescript: { handleThreading: boolean }; [key: string]: unknown });
    this.nativeBridge.handleThreading = nativescript?.handleThreading ?? WebSocket.HANDLE_THREADING;
    this._binaryType = 'arraybuffer';

    // Preserve deprecated backwards compatibility for the 'origin' option
    if (unrecognized && typeof unrecognized.origin === 'string') {
      console.warn('Specifying `origin` as a WebSocket connection option is deprecated. Include it under `headers` instead.');
      /* $FlowFixMe[prop-missing] (>=0.54.0 site=react_native_fb,react_native_
       * oss) This comment suppresses an error found when Flow v0.54 was
       * deployed. To see the error delete this comment and run Flow. */
      headers.origin = unrecognized.origin;
      /* $FlowFixMe[prop-missing] (>=0.54.0 site=react_native_fb,react_native_
       * oss) This comment suppresses an error found when Flow v0.54 was
       * deployed. To see the error delete this comment and run Flow. */
      delete unrecognized.origin;
    }

    // Warn about and discard anything else
    if (Object.keys(unrecognized).length > 0) {
      console.warn('Unrecognized WebSocket connection option(s) `' + Object.keys(unrecognized).join('`, `') + '`. ' + 'Did you mean to put these under `headers`?');
    }

    //  this._eventEmitter = new NativeEventEmitter(
    //    // T88715063: NativeEventEmitter only used this parameter on iOS. Now it uses it on all platforms, so this code was modified automatically to preserve its behavior
    //    // If you want to use the native module on other platforms, please remove this condition and test its behavior
    //    Platform.OS !== 'ios' ? null : NativeWebSocketModule,
    //  );
    this._registerEvents();
    this.nativeBridge.connect(url, protocols, { headers });
    openWebsockets.add(this);
    //  NativeWebSocketModule.connect(url, protocols, {headers}, this._socketId);
  }
  addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void {
    if (!callback) {
      return;
    }
    this.listeners[type]?.set(callback, options ?? false);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions): void {
    if (!callback) {
      return;
    }
    if (this.listeners[type]?.has(callback)) {
      this.listeners[type]?.delete(callback);
    }
  }

  get binaryType(): BinaryType {
    return this._binaryType;
  }

  set binaryType(binaryType: BinaryType) {
    if (binaryType !== 'blob' && binaryType !== 'arraybuffer') {
      throw new Error("binaryType must be either 'blob' or 'arraybuffer'");
    }
    //  if (this._binaryType === 'blob' || binaryType === 'blob') {
    //    invariant(
    //      BlobManager.isAvailable,
    //      'Native module BlobModule is required for blob support',
    //    );
    //    if (binaryType === 'blob') {
    //      BlobManager.addWebSocketHandler(this._socketId);
    //    } else {
    //      BlobManager.removeWebSocketHandler(this._socketId);
    //    }
    //  }
    this._binaryType = binaryType;
  }

  close(code?: number, reason?: string): void {
    if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) {
      return;
    }

    this.readyState = this.CLOSING;
    this._close(code, reason);
  }

  send(data: string | ArrayBuffer | ArrayBufferView | Blob): void {
    if (this.readyState === this.CONNECTING) {
      throw new Error('INVALID_STATE_ERR');
    }

    //  if (data instanceof Blob) {
    //    invariant(
    //      BlobManager.isAvailable,
    //      'Native module BlobModule is required for blob support',
    //    );
    //    BlobManager.sendOverSocket(data, this._socketId);
    //    return;
    //  }

    if (typeof data === 'string') {
      this.nativeBridge.send(data);
      //    NativeWebSocketModule.send(data, this._socketId);
      return;
    }

    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      this.nativeBridge.send(data);
      //    NativeWebSocketModule.sendBinary(binaryToBase64(data), this._socketId);
      return;
    }

    throw new Error('Unsupported data type');
  }

  ping(): void {
    if (this.readyState === this.CONNECTING) {
      throw new Error('INVALID_STATE_ERR');
    }

    //  NativeWebSocketModule.ping(this._socketId);
    this.nativeBridge.sendPing();
  }

  dispatchEvent(event: WebSocketEvent) {
    switch (event.type) {
      case 'open':
        this.onopen?.(event);
        break;
      case 'close':
        this.onclose?.(event);
        break;
      case 'error':
        this.onerror?.(event);
        break;
      case 'message':
        this.onmessage?.(event);
        break;
    }
    this.listeners[event.type]?.forEach((options, listener) => {
      try {
        if (typeof listener === 'function') {
          listener(event as Event);
        } else {
          listener.handleEvent(event as Event);
        }
        if (typeof options !== 'boolean' && options.once) {
          if (this.listeners[event.type]?.has(listener)) {
            this.listeners[event.type]?.delete(listener);
          }
        }
      } catch (e) {
        // don't break events if listener throws
        setTimeout(() => {
          throw e;
        });
      }
    });
  }

  _close(code?: number, reason?: string): void {
    // See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent
    const statusCode = typeof code === 'number' ? code : CLOSE_NORMAL;
    const closeReason = typeof reason === 'string' ? reason : '';
    this.nativeBridge.closeWithCodeReason(statusCode, closeReason);
    //  NativeWebSocketModule.close(statusCode, closeReason, this._socketId);

    //  if (BlobManager.isAvailable && this._binaryType === 'blob') {
    //    BlobManager.removeWebSocketHandler(this._socketId);
    //  }
  }

  _unregisterEvents(): void {
    //  this._subscriptions.forEach(e => e.remove());
    //  this._subscriptions = [];
  }

  _websocketOpen(protocol: string) {
    this.readyState = this.OPEN;
    this.protocol = protocol;
    this.dispatchEvent(new WebSocketEvent('open'));
  }
  _websocketClosed(code: number, reason: string, wasClean: boolean) {
    this.readyState = this.CLOSED;
    openWebsockets.delete(this);
    this.dispatchEvent(
      new WebSocketEvent('close', {
        code: code,
        reason: reason,
        wasClean,
      }),
    );
  }
  _websocketMessage(message: string | ArrayBuffer | ArrayBufferView | Blob) {
    this.dispatchEvent(new WebSocketEvent('message', { data: message }));
  }
  // _websocketPong(pongPayload: NSData) {}
  _websocketFailed(error: string) {
    this.readyState = this.CLOSED;
    openWebsockets.delete(this);
    this.dispatchEvent(
      new WebSocketEvent('error', {
        message: error,
      }),
    );
    this.dispatchEvent(
      new WebSocketEvent('close', {
        message: error,
      }),
    );
    this.close();
    //      this._unregisterEvents();
    //      this.close();
    //    }),
  }

  _registerEvents(): void {
    //  this._subscriptions = [
    //    this._eventEmitter.addListener('websocketMessage', ev => {
    //      if (ev.id !== this._socketId) {
    //        return;
    //      }
    //      let data = ev.data;
    //      switch (ev.type) {
    //        case 'binary':
    //          data = base64.toByteArray(ev.data).buffer;
    //          break;
    //        case 'blob':
    //          data = BlobManager.createFromOptions(ev.data);
    //          break;
    //      }
    //      this.dispatchEvent(new WebSocketEvent('message', {data}));
    //    }),
    //    this._eventEmitter.addListener('websocketOpen', ev => {
    //      if (ev.id !== this._socketId) {
    //        return;
    //      }
    //      this.readyState = this.OPEN;
    //      this.protocol = ev.protocol;
    //      this.dispatchEvent(new WebSocketEvent('open'));
    //    }),
    //    this._eventEmitter.addListener('websocketClosed', ev => {
    //      if (ev.id !== this._socketId) {
    //        return;
    //      }
    //      this.readyState = this.CLOSED;
    //      this.dispatchEvent(
    //        new WebSocketEvent('close', {
    //          code: ev.code,
    //          reason: ev.reason,
    //        }),
    //      );
    //      this._unregisterEvents();
    //      this.close();
    //    }),
    //    this._eventEmitter.addListener('websocketFailed', ev => {
    //      if (ev.id !== this._socketId) {
    //        return;
    //      }
    //      this.readyState = this.CLOSED;
    //      this.dispatchEvent(
    //        new WebSocketEvent('error', {
    //          message: ev.message,
    //        }),
    //      );
    //      this.dispatchEvent(
    //        new WebSocketEvent('close', {
    //          message: ev.message,
    //        }),
    //      );
    //      this._unregisterEvents();
    //      this.close();
    //    }),
    //  ];
  }
}
