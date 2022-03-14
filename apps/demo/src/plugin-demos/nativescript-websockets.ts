import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptWebsockets } from '@demo/shared';
import {} from '@valor/nativescript-websockets';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptWebsockets {}
