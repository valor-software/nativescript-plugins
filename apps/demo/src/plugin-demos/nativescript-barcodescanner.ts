import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptBarcodescanner } from '@demo/shared';
import {} from '@valor/nativescript-barcodescanner';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptBarcodescanner {}
