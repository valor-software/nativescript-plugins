import { DemoSharedBase } from '../utils';
import { InAppReview } from '@valor/nativescript-in-app-review';

export class DemoSharedNativescriptInAppReview extends DemoSharedBase {
  testIt() {
    InAppReview.requestReviewPopup();
  }
}
