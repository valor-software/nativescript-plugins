import { Application, Device } from '@nativescript/core';
import { InAppReviewCommon } from './common';

export class InAppReview extends InAppReviewCommon {
  static requestReviewPopup() {
    if (+Device.sdkVersion < 14.0) {
      SKStoreReviewController.requestReview();
    } else {
      SKStoreReviewController.requestReviewInScene((Application.ios.window as UIWindow).windowScene);
    }

    return Promise.resolve();
  }
}
