
declare var NativeScriptWebSocketsVersionNumber: number;

declare var NativeScriptWebSocketsVersionString: interop.Reference<number>;

declare var RCTSRHTTPResponseErrorKey: string;

declare const enum RCTSRReadyState {

	R_CONNECTING = 0,

	R_OPEN = 1,

	R_CLOSING = 2,

	R_CLOSED = 3
}

declare const enum RCTSRStatusCode {

	CodeNormal = 1000,

	CodeGoingAway = 1001,

	CodeProtocolError = 1002,

	CodeUnhandledType = 1003,

	NoStatusReceived = 1005,

	CodeInvalidUTF8 = 1007,

	CodePolicyViolated = 1008,

	CodeMessageTooBig = 1009
}

declare class RCTSRWebSocket extends NSObject implements NSStreamDelegate {

	static alloc(): RCTSRWebSocket; // inherited from NSObject

	static new(): RCTSRWebSocket; // inherited from NSObject

	delegate: RCTSRWebSocketDelegate;

	readonly protocol: string;

	readonly readyState: RCTSRReadyState;

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	constructor(o: { URL: NSURL; protocols: NSArray<string> | string[]; });

	constructor(o: { URLRequest: NSURLRequest; });

	constructor(o: { URLRequest: NSURLRequest; protocols: NSArray<string> | string[]; });

	class(): typeof NSObject;

	close(): void;

	closeWithCodeReason(code: number, reason: string): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(url: NSURL): this;

	initWithURLProtocols(url: NSURL, protocols: NSArray<string> | string[]): this;

	initWithURLRequest(request: NSURLRequest): this;

	initWithURLRequestProtocols(request: NSURLRequest, protocols: NSArray<string> | string[]): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	open(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleInRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;

	self(): this;

	send(data: any): void;

	sendPing(data: NSData): void;

	setDelegateDispatchQueue(queue: NSObject): void;

	setDelegateOperationQueue(queue: NSOperationQueue): void;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;

	unscheduleFromRunLoopForMode(aRunLoop: NSRunLoop, mode: string): void;
}

interface RCTSRWebSocketDelegate extends NSObjectProtocol {

	webSocketDidCloseWithCodeReasonWasClean?(webSocket: RCTSRWebSocket, code: number, reason: string, wasClean: boolean): void;

	webSocketDidFailWithError?(webSocket: RCTSRWebSocket, error: NSError): void;

	webSocketDidOpen?(webSocket: RCTSRWebSocket): void;

	webSocketDidReceiveMessage(webSocket: RCTSRWebSocket, message: any): void;

	webSocketDidReceivePong?(webSocket: RCTSRWebSocket, pongPayload: NSData): void;
}
declare var RCTSRWebSocketDelegate: {

	prototype: RCTSRWebSocketDelegate;
};

declare var RCTSRWebSocketErrorDomain: string;
