import { Component, inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DemoSharedNativescriptViewShot } from '@demo/shared';
import { ImageSource, isIOS, Screen, View } from '@nativescript/core';
import { renderToImageSource } from '@valor/nativescript-view-shot';
import { ViewShotService } from '@valor/nativescript-view-shot/angular';

@Component({
  selector: 'demo-nativescript-view-shot',
  templateUrl: 'nativescript-view-shot.component.html',
  standalone: false,
})
export class NativescriptViewShotComponent {
  demoShared: DemoSharedNativescriptViewShot;

  viewShotService = inject(ViewShotService);
  @ViewChild('viewHost', { read: ViewContainerRef }) vcRef: ViewContainerRef;
  srcUrl = `https://picsum.photos/${Screen.mainScreen.widthPixels}/200`;
  webImage$ = ImageSource.fromUrl(this.srcUrl);
  webImage2: ImageSource;
  imgSrc: ImageSource;
  loading = false;
  targetWidth = `${Screen.mainScreen.widthDIPs}`;

  async renderTemplate(template: TemplateRef<unknown>, attached: boolean) {
    let width = parseInt(this.targetWidth, 10);
    if (isNaN(width)) {
      width = Screen.mainScreen.widthDIPs;
    }
    this.loading = true;
    const image = await this.webImage$;
    // reusing imageSource on iOS sometimes doesn't work, so we create a new one each time
    this.webImage2 = isIOS ? new ImageSource((await this.webImage$).ios) : image;
    this.loading = false;
    this.imgSrc = await this.viewShotService.captureInBackground(template, {
      logicalHost: attached ? this.vcRef : undefined,
      width,
      delay: 0,
    });
  }

  screenshotView(view: View) {
    this.imgSrc = renderToImageSource(view);
  }
}
