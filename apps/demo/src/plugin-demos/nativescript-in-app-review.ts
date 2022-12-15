import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptInAppReview } from '@demo/shared';
import {} from '@valor/nativescript-in-app-review';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptInAppReview {}
