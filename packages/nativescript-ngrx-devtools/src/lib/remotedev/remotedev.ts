import * as socketCluster from 'socketcluster-client';
import { stringify } from 'jsan';
import { EMPTY, firstValueFrom, from, map, mergeAll, Observable, of, timer } from 'rxjs';
import { first, catchError, concatMap, mapTo } from 'rxjs/operators';
import type { SCChannel } from 'sc-channel';
import { RemoteDevToolsProxyOptions } from './model';
declare const __NS_DEV_HOST_IPS__: string[];

export type ChangeListener = (change: unknown) => void;

export class RemoteDev {
  private static instance: RemoteDev | null;
  private static listeners: { [key: string]: Array<ChangeListener> } = {};

  private defaultOptions: Required<RemoteDevToolsProxyOptions> = {
    hostname: 'localhost',
    port: 8000,
    secure: false,
    autoReconnect: true,
    realtime: true,
    ackTimeout: 10000,
    connectTimeout: 10000,
    defaultHosts: typeof __NS_DEV_HOST_IPS__ !== 'undefined' ? __NS_DEV_HOST_IPS__ : [],
  };
  private options!: Required<RemoteDevToolsProxyOptions>;
  private id!: string;
  private socket: socketCluster.SCClientSocket | null = null;
  private channel: SCChannel | null = null;
  private connectionPromise: Promise<unknown> | null = null;

  private constructor(options: RemoteDevToolsProxyOptions = {}) {
    this.configure(options);
  }

  public static getInstance(options = {}): RemoteDev {
    if (!RemoteDev.instance) {
      const instance = new RemoteDev(options);
      instance.id = instance.generateId();

      RemoteDev.instance = instance;
    }

    return RemoteDev.instance;
  }

  public async connect() {
    if (this.isSocketConnected()) {
      return;
    }
    if (!this.isSocketConnecting()) {
      this.connectionPromise = this._connect();
    }
    await this.connectionPromise;
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
      const socket = await firstValueFrom(
        from(hostnameArray).pipe(
          // try a new connection every 200ms
          concatMap((hostname, i) => (i == 0 ? of(hostname) : timer(200).pipe(mapTo(hostname)))),
          map((host) => createSocket(host).pipe(catchError(() => EMPTY))),
          mergeAll(),
          first()
        )
      );
      this.socket = socket;
      this.watchSocket();
    } catch (e) {
      console.log('Unable to open socket');
      throw e;
    } finally {
      this.connectionPromise = null;
    }
    // from(__NS_DEV_HOST_IPS__).pipe(
    //   map((host) => createSocket(host)),
    //   mergeAll(),
    //   first()
    // ).subscribe((socket) => {
    //     this.socket = socket;
    //     this.watchSocket();
    // });

    // this.socket = socketCluster.create({
    //   hostname: '127.0.0.1',
    //   port: this.options.port,
    //   secure: !!this.options.secure,
    // });
    // this.socket.on('connect', () => {
    //   console.log('connect');
    // });

    // this.socket.on('error', (error) => {
    //   console.error('NGRX-DEVTOOLS: ', error.message);
    // });

    // this.watchSocket();
  }

  public subscribe(listener: ChangeListener) {
    if (!listener) {
      return;
    }

    const listeners = RemoteDev.listeners;
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
    delete RemoteDev.listeners[this.id];
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

    if (!action) {
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.socket.emit('login', 'master', (error: Error, channelName: any) => {
      if (!this.socket) {
        return;
      }
      if (error) {
        console.error(error.message);
        return;
      }

      this.channel = this.socket.subscribe(channelName);
      this.channel.watch(this.propagateMessage);
      this.socket.on(channelName, this.propagateMessage);
      // send START/STOP
      this.propagateMessage({ type: this.options.realtime ? 'START' : 'STOP' });
      // setTimeout(() => this.propagateMessage({ type: `START` }), 1000);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private propagateMessage(message: any) {
    console.log('propagate', message);
    if (!message.payload) {
      message.payload = message.action;
    }

    const listeners = RemoteDev.listeners;

    Object.keys(listeners).map((id) => {
      if (message.instanceId && message.instanceId !== id) {
        return;
      }

      listeners[id].map((fn) => fn(message));
    });
  }
}
