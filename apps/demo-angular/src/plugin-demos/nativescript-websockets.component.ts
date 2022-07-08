import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptWebsockets } from '@demo/shared';

@Component({
  selector: 'demo-nativescript-websockets',
  templateUrl: 'nativescript-websockets.component.html',
})
export class NativescriptWebsocketsComponent {
  demoShared: DemoSharedNativescriptWebsockets;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptWebsockets();
  }
}
