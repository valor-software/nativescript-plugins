import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptInAppReview } from '@demo/shared';
import {} from '@valor/nativescript-in-app-review';

@Component({
  selector: 'demo-nativescript-in-app-review',
  templateUrl: 'nativescript-in-app-review.component.html',
})
export class NativescriptInAppReviewComponent {
  demoShared: DemoSharedNativescriptInAppReview;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptInAppReview();
  }
}
