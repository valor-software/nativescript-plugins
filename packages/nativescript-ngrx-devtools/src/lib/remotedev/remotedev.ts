import type { ReduxDevtoolsExtensionConfig } from '@ngrx/store-devtools/src/extension';
import { stringify, Options as JsanOptions } from 'jsan';
import { EMPTY, from, Observable, of, ReplaySubject, Subject, Subscriber, Subscription, throwError, timer } from 'rxjs';
import { catchError, concatMap, first, map, mapTo, mergeAll, retryWhen, switchMap, tap } from 'rxjs/operators';
import * as socketCluster from 'socketcluster-client';
import { RemoteDevToolsProxyOptions } from './model';
declare const __NS_DEV_HOST_IPS__: string[];
declare const __ANDROID__: boolean;

export type ChangeListener = (change: unknown) => void;

function noop() {
  // noop
}

type PartialMessage = {
  partial: true;
  action: unknown;
  state: unknown;
  type: unknown;
};

type Message = {
  type: string;
  action: string;
  payload: string;
  instanceId: string;
};

function isPartialMessage(message: Message | PartialMessage): message is PartialMessage {
  if ((message as PartialMessage).partial) {
    return true;
  }
  return false;
}

type SocketMessage = Message & { id: string };

let _defaultIps: string[] | null = null;

function getDefaultIps() {
  if (!_defaultIps) {
    const ipSet = new Set(typeof __NS_DEV_HOST_IPS__ !== 'undefined' ? __NS_DEV_HOST_IPS__ : []);
    if (ipSet.size > 0 && typeof __ANDROID__ !== 'undefined' && __ANDROID__) {
      ipSet.add('10.0.2.2');
    }
    _defaultIps = Array.from(ipSet);
  }
  return _defaultIps;
}

export class RemoteDev {
  private listeners: { [key: string]: Array<ChangeListener> } = {};

  private defaultOptions: Required<RemoteDevToolsProxyOptions> = {
    hostname: 'localhost',
    port: 8000,
    secure: false,
    autoReconnect: true,
    ackTimeout: 10000,
    connectTimeout: 10000,
    defaultHosts: getDefaultIps(),
    messageCacheSize: Infinity,
    delayMessageSerialization: false,
  };
  private options!: Required<RemoteDevToolsProxyOptions>;
  private id!: string;
  private disposed = false;
  private hostnames: string[] = [];

  destination!: Subject<Message | PartialMessage> | Subscriber<Message | PartialMessage>;
  socketSubscription: Subscription | null = null;
  private stringifyOptions: {
    replacer: Parameters<typeof stringify>[1];
    options: Parameters<typeof stringify>[3];
  };

  constructor(options: RemoteDevToolsProxyOptions = {}, private extensionConfig: ReduxDevtoolsExtensionConfig) {
    this.configure(options);
    this.id = extensionConfig.name || this.generateId();
    this.ensureResetSubject();
    let jsanOptions: JsanOptions | boolean | undefined;
    let replacer = undefined;
    if (extensionConfig.serialize === false) {
      jsanOptions = false;
    } else if (extensionConfig.serialize === true) {
      jsanOptions = true;
    } else if (extensionConfig.serialize) {
      jsanOptions = extensionConfig.serialize.options;
    }
    if (extensionConfig.serialize && typeof extensionConfig.serialize === 'object') {
      replacer = extensionConfig.serialize.replacer ?? undefined;
    }
    this.stringifyOptions = {
      replacer,
      options: jsanOptions,
    };
  }

  dispose() {
    this.disposed = true;
    this.socketSubscription?.unsubscribe();
    if (this.destination instanceof Subject) {
      this.destination.complete();
    }
  }

  private ensureResetSubject() {
    if (this.destination instanceof Subject) {
      return;
    }
    this.destination = this.options.messageCacheSize > 0 ? new ReplaySubject(this.options.messageCacheSize) : new Subject();
  }

  private ensureConnection() {
    if (this.socketSubscription || this.disposed || this.hostnames.length === 0) {
      return;
    }
    const createSocket = (hostname: string) => {
      return new Observable<socketCluster.SCClientSocket>((subscriber) => {
        const socket = socketCluster.create({
          hostname,
          port: this.options.port,
          secure: !!this.options.secure,
        });
        let completed = false;
        const connectListener = () => {
          completed = true;
          subscriber.next(socket);
          subscriber.complete();
        };
        const errorListener = (e: Error) => {
          subscriber.error(e);
        };
        socket.once('connect', connectListener);
        socket.once('error', errorListener);
        return () => {
          socket.off('connect', connectListener);
          socket.off('error', errorListener);
          if (completed) {
            // socket no longer under our control
            return;
          }
          socket.disconnect();
        };
      });
    };
    this.socketSubscription = from(this.hostnames)
      .pipe(
        // try a new connection every 200ms
        concatMap((hostname, i) => (i == 0 ? of(hostname) : timer(200).pipe(mapTo(hostname)))),
        map((host) => createSocket(host).pipe(catchError(() => EMPTY))),
        mergeAll(),
        first(),
        switchMap((socket) => {
          return new Observable<socketCluster.SCClientSocket>((subscriber) => {
            const disconnectHandler = () => {
              // we don't stop here because when devtools reopen then we lose history
              // this.propagateMessage({ type: 'STOP' });
              subscriber.error();
            };
            socket.on('disconnect', disconnectHandler);
            socket.on('error', disconnectHandler);
            let channel: ReturnType<typeof socket.subscribe> | null = null;
            let channelName: string | null;
            let hasStarted = false;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const channelMessageHandler = (message: any) => {
              this.propagateMessage(message);
              if (message?.type === 'START' && !hasStarted) {
                hasStarted = true;
                subscriber.next(socket);
              }
            };
            socket.emit('login', 'master', (error: Error, channelNameFromEmit: string) => {
              channelName = channelNameFromEmit;
              if (subscriber.closed) {
                return;
              }
              if (error) {
                subscriber.error(error);
                console.error(error.message);
                return;
              }

              channel = socket.subscribe(channelName);
              channel.watch(channelMessageHandler);
              socket.on(channelName, channelMessageHandler);
              // send START/STOP
              setTimeout(() => {
                if (subscriber.closed || socket.state !== socket.OPEN || hasStarted) {
                  return;
                }
                // this is required because sometimes start is not sent (when devtools is open before the app)
                // but when devtools opens after app start it sends it
                channelMessageHandler({ type: 'START' });
              }, 1000);
            });
            return () => {
              channel?.unwatch(channelMessageHandler);
              if (channelName) {
                socket.off(channelName, channelMessageHandler);
              }
              socket.off('disconnect', disconnectHandler);
              socket.off('error', disconnectHandler);
              socket.on('error', noop); // keep this empty so that errors from closed sockets are completely ignored
              socket.disconnect();
            };
          });
        }),
        tap(
          (socket) => {
            const queue = this.destination instanceof Subject ? this.destination : null;
            const subscriber = Subscriber.create((message?: Message | PartialMessage) => {
              if (!message) {
                return;
              }
              if (isPartialMessage(message)) {
                message = this.transformPartialMessage(message);
              }
              const socketMessage: SocketMessage = { ...message, id: socket.id };
              // console.log('sending', socketMessage);
              socket.emit(socket.id ? 'log' : 'log-noid', socketMessage);
            });
            this.destination = subscriber;
            queue?.subscribe(subscriber.next.bind(subscriber));
            queue?.complete();
          },
          () => this.ensureResetSubject(),
          () => this.ensureResetSubject()
        ),
        retryWhen((errors) =>
          errors.pipe(
            switchMap((e) => {
              if (this.options.autoReconnect) {
                return timer(1000);
              }
              return throwError(() => e);
            })
          )
        )
      )
      .subscribe();
  }

  public subscribe(listener: ChangeListener) {
    if (!listener) {
      return;
    }

    const listeners = this.listeners;
    if (!listeners[this.id]) {
      listeners[this.id] = [];
    }

    listeners[this.id].push(listener);

    return () => {
      const index = listeners[this.id].indexOf(listener);
      listeners[this.id].slice(index, 1);
    };
  }

  public unsubscribe() {
    delete this.listeners[this.id];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public init(state: any, action = {}) {
    this.sendToSocket(action, state, 'INIT');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(action: any, payload: any) {
    if (!action) {
      return this.sendToSocket(undefined, payload, 'STATE');
    }
    return this.sendToSocket(action, payload, 'ACTION');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(payload: any) {
    this.sendToSocket(undefined, payload, 'ERROR');
  }

  private configure(options: Partial<RemoteDevToolsProxyOptions>) {
    this.options = {
      ...this.defaultOptions,
      ...options,
    };
    this.hostnames = Array.from(new Set([this.options.hostname, ...this.options.defaultHosts]));
  }
  private generateId() {
    return Math.random().toString(36).substr(2);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private sendToSocket(action: any, state: any, type: any) {
    this.ensureConnection();
    setTimeout(() => {
      const message: PartialMessage = {
        partial: true,
        action,
        state,
        type,
      };
      if (this.options.delayMessageSerialization) {
        this.destination.next(message);
      } else {
        this.destination.next(this.transformPartialMessage(message));
      }
    });
  }
  private transformPartialMessage(message: PartialMessage): Message {
    const { action, state, type } = message;
    return {
      type: (type as string) || 'ACTION',
      action: type === 'ACTION' ? stringify(this.transformAction(action), this.stringifyOptions.replacer, undefined, this.stringifyOptions.options) : (action as string),
      payload: state ? stringify(state, this.stringifyOptions.replacer, undefined, this.stringifyOptions.options) : '',
      instanceId: this.id,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private transformAction(action: any) {
    if (action.action) {
      return action;
    }

    const liftedAction = { timestamp: Date.now(), action };

    if (!action || typeof action === 'string') {
      liftedAction.action = { type: action };
    }

    if (!action.type) {
      liftedAction.action = { type: 'update' };
    }

    liftedAction.action.payload = liftedAction.action.payload || '';

    return liftedAction;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private propagateMessage(message: any) {
    if (!message.payload) {
      message.payload = message.action;
    }

    const listeners = this.listeners;

    Object.keys(listeners).map((id) => {
      if (message.instanceId && message.instanceId !== id) {
        return;
      }

      listeners[id].map((fn) => fn(message));
    });
  }
}
