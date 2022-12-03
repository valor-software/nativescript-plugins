import { InAppReviewCommon } from './common';

export declare class InAppReview extends InAppReviewCommon {
  /**
   * Request the system to show a popup asking the user to leave an app review.
   * Wether the popup will be shown or not depends on the system's heuristics.
   */
  static requestReviewPopup();
}
