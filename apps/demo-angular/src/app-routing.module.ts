import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nativescript-websockets', loadChildren: () => import('./plugin-demos/nativescript-websockets.module').then((m) => m.NativescriptWebsocketsModule) },
  { path: 'nativescript-ngrx-devtools', loadChildren: () => import('./plugin-demos/nativescript-ngrx-devtools.module').then((m) => m.NativeScriptNgRxDevtoolsDemoModule) },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
