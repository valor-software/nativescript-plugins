import * as socketCluster from 'socketcluster-client';
import { stringify } from 'jsan';
import { EMPTY, firstValueFrom, from, map, mergeAll, Observable, of, Subject, throwError, timer } from 'rxjs';
import { first, catchError, concatMap, mapTo, retryWhen, switchMap, takeUntil } from 'rxjs/operators';
import type { SCChannel } from 'sc-channel';
import { RemoteDevToolsProxyOptions } from './model';
import type { ReduxDevtoolsExtensionConfig } from '@ngrx/store-devtools/src/extension';
declare const __NS_DEV_HOST_IPS__: string[];

export type ChangeListener = (change: unknown) => void;

export class RemoteDev {
  private listeners: { [key: string]: Array<ChangeListener> } = {};

  private defaultOptions: Required<RemoteDevToolsProxyOptions> = {
    hostname: 'localhost',
    port: 8000,
    secure: false,
    autoReconnect: true,
    ackTimeout: 10000,
    connectTimeout: 10000,
    defaultHosts: typeof __NS_DEV_HOST_IPS__ !== 'undefined' ? __NS_DEV_HOST_IPS__ : [],
  };
  private options!: Required<RemoteDevToolsProxyOptions>;
  private id!: string;
  private socket: socketCluster.SCClientSocket | null = null;
  private channel: SCChannel | null = null;
  private connectionPromise: Promise<unknown> | null = null;
  private disposed = false;
  private disposed$ = new Subject<void>();

  constructor(options: RemoteDevToolsProxyOptions = {}, private extensionConfig: ReduxDevtoolsExtensionConfig) {
    this.configure(options);
    this.id = extensionConfig.name || this.generateId();
  }

  async dispose() {
    this.disposed = true;
    this.disposed$.next();
    this.disposed$.complete();
    if (!this.socket) {
      try {
        await this.connectionPromise;
      } catch (e) {
        // ignore
      }
    }
    if (this.channel) {
      this.channel.unwatch();
      this.channel.unsubscribe();
      this.socket?.off(this.channel.name);
    }
    this.socket?.disconnect();
  }

  public async connect() {
    if (this.disposed) {
      return;
    }
    if (this.isSocketConnected()) {
      return;
    }
    if (!this.isSocketConnecting()) {
      this.connectionPromise = this._connect();
    }
    await this.connectionPromise;
    this.connectionPromise = null;
  }
  private async _connect() {
    const createSocket = (hostname: string) => {
      return new Observable<socketCluster.SCClientSocket>((subscriber) => {
        const socket = socketCluster.create({
          hostname,
          port: this.options.port,
          secure: !!this.options.secure,
        });
        let completed = false;
        socket.once('connect', () => {
          completed = true;
          subscriber.next(socket);
          subscriber.complete();
        });
        socket.once('error', (e) => {
          subscriber.error(e);
        });
        return () => {
          if (completed) {
            return;
          }
          socket.disconnect();
        };
      });
    };

    const hostnameArray = [this.options.hostname, ...this.options.defaultHosts];
    try {
      // TODO: maybe change this to a more elegant RxJS solution with ReplaySubject for actions so we can avoid this mess
      const socket = await firstValueFrom(
        from(hostnameArray).pipe(
          // try a new connection every 200ms
          concatMap((hostname, i) => (i == 0 ? of(hostname) : timer(200).pipe(mapTo(hostname)))),
          map((host) => createSocket(host).pipe(catchError(() => EMPTY))),
          mergeAll(),
          first(),
          retryWhen((errors) =>
            errors.pipe(
              switchMap((e) => {
                if (this.options.autoReconnect) {
                  return timer(1000);
                }
                return throwError(() => e);
              })
            )
          ),
          takeUntil(this.disposed$)
        )
      );
      this.socket = socket;
      await this.watchSocket();
    } finally {
      this.connectionPromise = null;
    }
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
  }

  private isSocketConnected(): boolean {
    return !!this.socket && this.socket.getState() !== this.socket.CLOSED;
  }

  private isSocketConnecting() {
    return !!this.connectionPromise;
  }

  private generateId() {
    return Math.random().toString(36).substr(2);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private async sendToSocket(action: any, state: any, type: any) {
    try {
      await this.connect();
    } catch (e) {
      // ignore, we failed to open the socket
      return;
    }

    setTimeout(() => {
      if (!this.socket) {
        return;
      }
      const message = {
        type: type || 'ACTION',
        action: type === 'ACTION' ? stringify(this.transformAction(action)) : action,
        payload: state ? stringify(state) : '',
        id: this.socket.id,
        instanceId: this.id,
      };

      if (!this.isSocketConnected()) {
        return;
      }

      this.socket.emit(this.socket.id ? 'log' : 'log-noid', message);
    }, 0);
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

  private watchSocket() {
    if (this.channel || !this.socket) {
      return;
    }

    return new Promise<void>((resolve, reject) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.socket.emit('login', 'master', (error: Error, channelName: any) => {
        if (!this.socket) {
          reject();
          return;
        }
        if (error) {
          reject(error);
          console.error(error.message);
          return;
        }
        let hasStarted = false;

        this.channel = this.socket.subscribe(channelName);
        const messageHandler = (message) => {
          this.propagateMessage(message);
          if (message?.type === 'START' && !hasStarted) {
            hasStarted = true;
            resolve();
          }
        };
        this.channel.watch(messageHandler);
        this.socket.on(channelName, messageHandler);
        // send START/STOP
        setTimeout(() => {
          if (!this.isSocketConnected() || hasStarted) {
            return;
          }
          // this is required because sometimes start is not sent (when devtools is open before the app)
          // but when devtools opens after app start it sends it
          messageHandler({ type: 'START' });
        }, 1000);
        // resolve();
      });
    });
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
