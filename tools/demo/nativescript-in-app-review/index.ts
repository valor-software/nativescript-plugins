import { DemoSharedBase } from '../utils';
import { InAppReview } from '@valor/nativescript-in-app-review';

export class DemoSharedNativescriptInAppReview extends DemoSharedBase {
  testIt() {
    InAppReview.requestReviewPopup()
      .then(() => console.log('In App Review success'))
      .catch((err) => console.error('In App Review failed', err));
  }
}
