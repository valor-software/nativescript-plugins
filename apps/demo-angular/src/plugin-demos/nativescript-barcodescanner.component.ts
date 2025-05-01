import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptBarcodescanner } from '@demo/shared';
import {} from '@valor/nativescript-barcodescanner';

@Component({
  selector: 'demo-nativescript-barcodescanner',
  templateUrl: 'nativescript-barcodescanner.component.html',
  standalone: false,
})
export class NativescriptBarcodescannerComponent {
  demoShared: DemoSharedNativescriptBarcodescanner;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptBarcodescanner();
  }
}
