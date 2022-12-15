import { Observable, EventData, Page, Frame, View, GridLayout, ImageSource, Screen } from '@nativescript/core';
import { DemoSharedNativescriptViewShot } from '@demo/shared';
import { measureAndLayout, renderToImageSource } from '@valor/nativescript-view-shot';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel(page);
}

export class DemoModel extends DemoSharedNativescriptViewShot {
  declare imgSrc: ImageSource;
  constructor(private page: Page) {
    super();
  }
  render() {
    const hostView: GridLayout = this.page.getViewById('hostView');
    // this view is detached, so we need to measure and layout it according to the sizes we want
    measureAndLayout(hostView, Screen.mainScreen.widthDIPs);
    this.set('imgSrc', renderToImageSource(hostView));
  }
  renderVisible() {
    const hostView: GridLayout = this.page.getViewById('visibleView');
    this.set('imgSrc', renderToImageSource(hostView));
  }
}
