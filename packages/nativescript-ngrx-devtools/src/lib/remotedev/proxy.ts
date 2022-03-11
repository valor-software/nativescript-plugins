import { ChangeListener, RemoteDev } from './remotedev';
import { RemoteDevToolsProxyOptions } from './model';
import { Injectable, InjectionToken, Optional, Inject, NgZone } from '@angular/core';
import type { ReduxDevtoolsExtensionConnection, ReduxDevtoolsExtension, ReduxDevtoolsExtensionConfig } from '@ngrx/store-devtools/src/extension';

export const REMOTE_DEVTOOLS_PROXY_OPTIONS = new InjectionToken<RemoteDevToolsProxyOptions>('RemoteDevToolsProxyOptions');

export class RemoteDevToolsConnectionProxy implements ReduxDevtoolsExtensionConnection {
  private unsubscribeFn?: () => void;

  constructor(private remoteDev: RemoteDev, private instanceId: string, private ngZone: NgZone) {}

  public subscribe(listener: ChangeListener): void {
    const listener2 = (change: unknown) => {
      this.ngZone.run(() => listener(change));
    };
    this.unsubscribeFn = this.remoteDev.subscribe(listener2);
  }

  public unsubscribe(): void {
    this.unsubscribeFn?.();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(action: any, state: any): void {
    this.remoteDev.send(action, state);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public init(state?: any): void {
    this.remoteDev.init(state);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(any: any): void {
    this.remoteDev.error(any);
  }
}

@Injectable()
export class RemoteDevToolsProxy implements ReduxDevtoolsExtension {
  private remoteDev: RemoteDev | null = null;
  private options: RemoteDevToolsProxyOptions = {};

  constructor(@Optional() @Inject(REMOTE_DEVTOOLS_PROXY_OPTIONS) customOptions: RemoteDevToolsProxyOptions = {}, private ngZone: NgZone) {
    this.options = {
      hostname: 'localhost',
      port: 8000,
      autoReconnect: true,
      connectTimeout: 300000,
      ackTimeout: 120000,
      secure: false,
      ...customOptions,
    };
  }

  public connect(options: ReduxDevtoolsExtensionConfig): RemoteDevToolsConnectionProxy {
    const connectOptions = { ...this.options, options };

    this.remoteDev = RemoteDev.getInstance(connectOptions);
    return new RemoteDevToolsConnectionProxy(this.remoteDev, connectOptions.options.name || '', this.ngZone);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public send(action: any, state: any): void {
    this.remoteDev?.send(action, state);
  }
}
