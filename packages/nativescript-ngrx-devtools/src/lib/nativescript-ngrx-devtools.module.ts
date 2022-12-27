import { ModuleWithProviders, NgModule } from '@angular/core';
import { REDUX_DEVTOOLS_EXTENSION } from '@ngrx/store-devtools';
import { RemoteDevToolsProxyOptions } from './remotedev/model';
import { RemoteDevToolsProxy, REMOTE_DEVTOOLS_PROXY_OPTIONS } from './remotedev/proxy';

@NgModule({})
export class NativeScriptNgRxDevtoolsModule {
  public static forRoot(options: RemoteDevToolsProxyOptions = {}): ModuleWithProviders<NativeScriptNgRxDevtoolsModule> {
    return {
      ngModule: NativeScriptNgRxDevtoolsModule,
      providers: [
        {
          provide: REMOTE_DEVTOOLS_PROXY_OPTIONS,
          useValue: options,
        },
        RemoteDevToolsProxy,
        {
          provide: REDUX_DEVTOOLS_EXTENSION,
          useExisting: RemoteDevToolsProxy,
        },
      ],
    };
  }
}
