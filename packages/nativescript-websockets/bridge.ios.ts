/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import { HeaderType } from './common';
import { NativeBridgeDefinition } from './websocket.definition';

@NativeClass
class RCTSRWebSocketDelegateImpl extends NSObject implements RCTSRWebSocketDelegate {
  public static ObjCProtocols = [RCTSRWebSocketDelegate];
  public static initWithOwner(owner: NativeBridge) {
    const instance = <RCTSRWebSocketDelegateImpl>RCTSRWebSocketDelegateImpl.new();
    instance.owner = new WeakRef(owner);
    return instance;
  }
  public owner!: WeakRef<NativeBridge>;
  webSocketDidCloseWithCodeReasonWasClean?(webSocket: RCTSRWebSocket, code: number, reason: string, wasClean: boolean): void {
    this.owner.get()?._websocketClosed(code, reason, wasClean);
  }
  webSocketDidFailWithError?(webSocket: RCTSRWebSocket, error: NSError): void {
    this.owner.get()?._websocketFailed(error);
  }
  webSocketDidOpen(webSocket: RCTSRWebSocket): void {
    this.owner.get()?._websocketOpen();
  }
  webSocketDidReceiveMessage(webSocket: RCTSRWebSocket, message: unknown): void {
    this.owner.get()?._websocketMessage(message);
  }
  webSocketDidReceivePong?(webSocket: RCTSRWebSocket, pongPayload: NSData): void {
    this.owner.get()?._websocketPong(pongPayload);
  }
}
export class NativeBridge extends NativeBridgeDefinition {
  nativeSocket!: RCTSRWebSocket;
  // store the delegate so it isn't garbage collected
  // TODO: fix the iOS runtime so we don't need this
  delegate!: RCTSRWebSocketDelegateImpl;
  connect(url: string, protocols: string[], headers: HeaderType) {
    const nativeUrl = NSURL.URLWithString(url);
    const request = NSMutableURLRequest.requestWithURL(nativeUrl);
    // NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:URL];

    // We load cookies from sharedHTTPCookieStorage (shared with XHR and
    // fetch). To get secure cookies for wss URLs, replace wss with https
    // in the URL.
    const components = NSURLComponents.componentsWithURLResolvingAgainstBaseURL(nativeUrl, true);
    // NSURLComponents *components = [NSURLComponents componentsWithURL:URL resolvingAgainstBaseURL:true];
    if (components.scheme.toLocaleLowerCase() === 'wss') {
      components.scheme = 'https';
    }

    // Load and set the cookie header.
    const cookies = NSHTTPCookieStorage.sharedHTTPCookieStorage.cookiesForURL(components.URL);
    request.allHTTPHeaderFields = NSHTTPCookie.requestHeaderFieldsWithCookies(cookies);

    // Load supplied headers
    for (const k of Object.keys(headers.headers)) {
      request.addValueForHTTPHeaderField(`${headers.headers[k]}`, k);
    }

    const webSocket = RCTSRWebSocket.alloc().initWithURLRequestProtocols(request, protocols);
    this.nativeSocket = webSocket;
    this.delegate = RCTSRWebSocketDelegateImpl.initWithOwner(this);
    webSocket.setDelegateDispatchQueue(dispatch_get_current_queue());
    webSocket.delegate = this.delegate;
    webSocket.open();
  }

  send(data: string | ArrayBuffer | ArrayBufferView | Blob): void {
    //  if (data instanceof Blob) {
    //    invariant(
    //      BlobManager.isAvailable,
    //      'Native module BlobModule is required for blob support',
    //    );
    //    BlobManager.sendOverSocket(data, this._socketId);
    //    return;
    //  }

    if (typeof data === 'string') {
      this.nativeSocket.send(data);
      //    NativeWebSocketModule.send(data, this._socketId);
      return;
    }

    if (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) {
      this.nativeSocket.send(data);
      //    NativeWebSocketModule.sendBinary(binaryToBase64(data), this._socketId);
      return;
    }

    throw new Error('Unsupported data type');
  }

  closeWithCodeReason(statusCode: number, closeReason: string) {
    this.nativeSocket.closeWithCodeReason(statusCode, closeReason);
  }
  sendPing() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.nativeSocket.sendPing(null!);
  }

  _websocketOpen() {
    this.ws._websocketOpen(this.nativeSocket.protocol);
  }
  _websocketClosed(code: number, reason: string, wasClean: boolean) {
    this.ws._websocketClosed(code, reason, wasClean);
  }
  _websocketMessage(message: unknown) {
    if (message instanceof NSData) {
      message = interop.bufferFromData(message);
    }
    this.ws._websocketMessage(message as string | ArrayBuffer);
  }
  _websocketPong(pongPayload: NSData) {
    //
  }
  _websocketFailed(error: NSError) {
    this.ws._websocketFailed(error.localizedDescription);
  }
}
