import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptFeedback } from '@demo/shared';
import {} from '@valor/nativescript-feedback';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptFeedback {}
