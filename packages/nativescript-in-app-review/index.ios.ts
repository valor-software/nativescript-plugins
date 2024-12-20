import { Application, Device, Utils } from '@nativescript/core';
import { InAppReviewCommon } from './common';

let nscAppStore: NSCAppStore;

export class InAppReview extends InAppReviewCommon {
  static requestReviewPopup() {
    if (Utils.SDK_VERSION >= 17 || __VISIONOS__) {
      if (!nscAppStore) {
        nscAppStore = NSCAppStore.new();
      }
      nscAppStore.requestReview();
    } else if (Utils.SDK_VERSION < 14) {
      SKStoreReviewController.requestReview();
    } else {
      SKStoreReviewController.requestReviewInScene((Application.ios.window as UIWindow).windowScene);
    }

    return Promise.resolve();
  }
}
