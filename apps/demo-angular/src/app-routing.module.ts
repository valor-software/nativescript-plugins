import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nativescript-barcodescanner', loadChildren: () => import('./plugin-demos/nativescript-barcodescanner.module').then((m) => m.NativescriptBarcodescannerModule) },
  { path: 'nativescript-ngrx-devtools', loadChildren: () => import('./plugin-demos/nativescript-ngrx-devtools.module').then((m) => m.NativeScriptNgRxDevtoolsDemoModule) },
  { path: 'nativescript-websockets', loadChildren: () => import('./plugin-demos/nativescript-websockets.module').then((m) => m.NativescriptWebsocketsModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
