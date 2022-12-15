import { Application, Utils } from '@nativescript/core';
import { InAppReviewCommon } from './common';

export class InAppReview extends InAppReviewCommon {
  static requestReviewPopup() {
    const context = Utils.android.getApplicationContext() as android.content.Context;
    const manager = com.google.android.play.core.review.ReviewManagerFactory.create(context);
    const request = manager.requestReviewFlow();

    return new Promise<void>((resolve, reject) =>
      request.addOnCompleteListener(
        new com.google.android.play.core.tasks.OnCompleteListener({
          onComplete: (task) => {
            if (!task.isSuccessful()) {
              reject(new Error(task.getException()?.getMessage()));
              return;
            }

            const reviewInfo = task.getResult();
            const flow = manager.launchReviewFlow(Application.android.foregroundActivity, reviewInfo);

            flow.addOnCompleteListener(
              new com.google.android.play.core.tasks.OnCompleteListener({
                onComplete: (task) => {
                  // The flow has finished. The API does not indicate whether the
                  // user reviewed or not, or even whether the review dialog was
                  // shown. Thus, no matter the result, we continue our app flow.
                  if (!task.isSuccessful()) {
                    reject(new Error(task.getException()?.getMessage()));
                  } else {
                    resolve();
                  }
                },
              })
            );
          },
        })
      )
    );
  }
}
