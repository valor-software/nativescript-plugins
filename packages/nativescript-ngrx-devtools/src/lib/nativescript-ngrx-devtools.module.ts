import { FactoryProvider, InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { REMOTE_DEVTOOLS_PROXY_OPTIONS, RemoteDevToolsProxy } from './remotedev/proxy';
import { RemoteDevToolsProxyOptions } from './remotedev/model';

@NgModule({})
export class NativeScriptNgRxDevtoolsModule {
  public static forRoot(options: RemoteDevToolsProxyOptions = {}): ModuleWithProviders<NativeScriptNgRxDevtoolsModule> {
    const instrumentProviders = StoreDevtoolsModule.instrument().providers || [];
    let devtoolsExtensionToken: InjectionToken<unknown> | null = null;
    for (const provider of instrumentProviders) {
      if (Object.prototype.hasOwnProperty.call(provider, 'provide')) {
        const injectionToken: InjectionToken<unknown> | null = (provider as FactoryProvider).provide instanceof InjectionToken ? (provider as FactoryProvider).provide : null;
        if (injectionToken?.toString().includes('@ngrx/store-devtools Redux Devtools Extension')) {
          devtoolsExtensionToken = injectionToken;
          break;
        }
      }
    }
    if (!devtoolsExtensionToken) {
      throw new Error('Unable to find Redux Devtools Extension token');
    }
    return {
      ngModule: NativeScriptNgRxDevtoolsModule,
      providers: [
        {
          provide: REMOTE_DEVTOOLS_PROXY_OPTIONS,
          useValue: options,
        },
        RemoteDevToolsProxy,
        {
          provide: devtoolsExtensionToken,
          useExisting: RemoteDevToolsProxy,
        },
      ],
    };
  }
}
