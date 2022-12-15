# @valor/nativescript-view-shot

Take a screenshot of an existing view, or render a view in the background and take a screenshot of it.

```javascript
ns plugin add @valor/nativescript-view-shot
```

## Usage

### Core/flavor agnostic

Render a visible view:

```xml
<GridLayout id="visibleView">
    <Label backgroundColor="LightGreen" text="View to screenshot" class="h1" textWrap="true"/>
</GridLayout>
```
```ts
  renderVisible() {
    const hostView: GridLayout = this.page.getViewById('visibleView');
    const result = renderToImageSource(hostView);
    // work with result
  }
```

Render an invisible view:
```xml
<viewShot:LogicalViewContainer>
<!-- this view is completely detached! Handle measuring/layout yourself! -->
    <GridLayout id="hostView">
    <Label backgroundColor="LightBlue" text="Hello World" class="h1" textWrap="true"/>
    </GridLayout>
</viewShot:LogicalViewContainer>
```
```ts
  render() {
    const hostView: GridLayout = this.page.getViewById('hostView');
    // measure and layout the detached view with the desired width/height
    measureAndLayout(hostView, Screen.mainScreen.widthDIPs);
    const result = renderToImageSource(hostView);
    // work with result
  }
```

Create and render a view completely detached:
```ts
  renderDetached() {
    const myView = new GridLayout();
    const renderedViewData = loadViewInBackground(myView);
    // measure and layout the detached view with the desired width/height
    measureAndLayout(renderedViewData.hostView, Screen.mainScreen.widthDIPs);
    const result = renderToImageSource(renderedViewData.hostView);
    disposeBackgroundView(renderedViewData);
    // work with result
  }
```

#### API

```ts
import { ImageSource, View } from '@nativescript/core';

export interface BackgroundViews {
  // parent of the view that will be rendered to ensure margins are respected
  hostView: View;
  // a view that wraps the hostView and is collapsed
  hiddenHost: View;
  // a view container that will be inserted in the view tree to make it part of the view hierarchy
  // (enables CSS inheritance)
  logicalContainer?: View;
}
export function measureAndLayout(hostView: View, width?: number, height?: number): void;

export class LogicalViewContainer extends LayoutBase {}

export function renderToImageSource(hostView: View): ImageSource;

export function loadViewInBackground(view: View, host?: View): BackgroundViews;

export function disposeBackgroundView(backgroundViews: BackgroundViews): void;

```

### Angular

```html
<StackLayout>
  <Button text="Render detached view" (tap)="renderTemplate(myTemplate, true)" class="btn btn-primary"></Button>
  <Button text="Render detached in root (check css)" (tap)="renderTemplate(myTemplate, false)" class="btn btn-primary"></Button>
  <Button text="Take screenshot of view" (tap)="screenshotView(myView)" class="btn btn-primary"></Button>
  <!-- the view will be rendered in ViewHost for the purposes of CSS handling -->
  <ng-container #viewHost></ng-container>
  <GridLayout #myView>
    <Label class="h1" backgroundColor="lightblue">Screenshot view</Label>
  </GridLayout>
  <Label *ngIf="loading">Loading image...</Label>
  <Label>result:</Label>
  <ng-template #myTemplate>
    <GridLayout>
      <Image [src]="webImage2"></Image>
      <Label class="child-label h2">some text</Label>
    </GridLayout>
  </ng-template>
</StackLayout>
```

```ts
export class NativescriptViewShotComponent {
  viewShotService = inject(ViewShotService);
  @ViewChild('viewHost', { read: ViewContainerRef }) vcRef: ViewContainerRef;

  srcUrl = `https://picsum.photos/${Screen.mainScreen.widthPixels}/200`;
  webImage$ = ImageSource.fromUrl(this.srcUrl);
  webImage2: ImageSource;
  imgSrc: ImageSource;

  async renderTemplate(template: TemplateRef<unknown>, attached: boolean) {
    const width = Screen.mainScreen.widthDIPs;
    // reusing imageSource on iOS sometimes doesn't work, so we create a new one each time
    this.webImage2 = new ImageSource((await this.webImage$).ios);
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
```

#### API

```ts
import { Injector, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { NgViewRef } from '@nativescript/angular';
import { ImageSource, View, ViewBase } from '@nativescript/core';
export interface DrawableOptions<T = unknown> {
    /**
     * target width of the view and image, in dip. If not specified, the measured width of the view will be used.
     */
    width?: number;
    /**
     * target height of the view and image, in dip. If not specified, the measured height of the view will be used.
     */
    height?: number;
    /**
     * injector to use for the component. If not specified, the injector of the logical host will be used.
     * if there is not logical host, then this service's injector will be used. (most likely the root injector)
     */
    injector?: Injector;
    /**
     * how much should we delay the rendering of the view into the image.
     * This is useful if you want to wait for an image to load before rendering the view.
     * If using a function, it will be called with the NgViewRef as the first argument.
     * The NgViewRef can be used to get the EmbeddedViewRef/ComponentRef and the NativeScript views.
     * This is useful as you can fire an event in your views when the view is ready, and then complete
     * the promise to finish rendering to image.
     */
    delay?: number | ((viewRef: NgViewRef<T>) => Promise<void>);
    /**
     * The logical host of the view. This is used to specify where in the DOM this view should lie.
     * The practical use of this is if you want the view to inherit CSS styles from a parent.
     * If this is not specified, the view will be handled as a root view,
     * meaning no ancestor styles will be applied, similar to dropping the view in app.component.html
     */
    logicalHost?: ViewBase | ViewContainerRef;
}
export declare class ViewShotService {
    captureInBackground<T>(type: Type<T> | TemplateRef<T>, options?: DrawableOptions<T>): Promise<ImageSource>;
    captureRenderedView(view: View): ImageSource;
}

```

## Important details

Some views (like images) take a while to load. So you might need to add a delay between start rendering a view and generating the image. In angular, the `delay` option is available for this purpose, and it can be a number, for a simple wait, or a function that will receive the `NgViewRef` as a parameter and must return a promise. This can be used to listen to events on the view, or to wait for a specific amount of time.

## License

MIT License
