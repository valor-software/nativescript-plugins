import { ComponentRef, inject, Injectable, Injector, TemplateRef, Type, ViewContainerRef } from '@angular/core';

import { generateNativeScriptView, isDetachedElement, isInvisibleNode, NgView, NgViewRef } from '@nativescript/angular';
import { ContentView, ImageSource, View, ViewBase } from '@nativescript/core';
import { disposeBackgroundView, loadViewInBackground, measureAndLayout, RenderOptions, renderToImageSource } from '@valor/nativescript-view-shot';

export interface DrawableOptions<T = unknown> extends RenderOptions {
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

@Injectable({
  providedIn: 'root',
})
export class ViewShotService {
  private myInjector = inject(Injector);
  async captureInBackground<T>(type: Type<T> | TemplateRef<T>, { width, height, injector, delay, logicalHost, ...renderOptions }: DrawableOptions<T> = {}): Promise<ImageSource | null> {
    let host: NgView = logicalHost instanceof ViewContainerRef ? logicalHost.element.nativeElement : logicalHost;
    while ((isInvisibleNode(host) || isDetachedElement(host)) && (host = host.parentNode)); // iterate over parent nodes until we find a visible one
    const ngView = generateNativeScriptView(type, {
      injector: injector || (logicalHost instanceof ViewContainerRef ? logicalHost.injector : this.myInjector),
      keepNativeViewAttached: true,
    });
    try {
      if (ngView.ref instanceof ComponentRef) {
        ngView.ref.changeDetectorRef.detectChanges();
      } else {
        ngView.ref.detectChanges();
      }
      if (ngView.view.parent) {
        if (ngView.view.parent instanceof ContentView) {
          ngView.view.parent.content = null as unknown as View;
        } else {
          ngView.view.parent._removeView(ngView.view);
        }
      }
      const drawableViews = loadViewInBackground(ngView.view, host);
      try {
        const { hostView } = drawableViews;

        measureAndLayout(hostView, width, height);

        if (typeof delay === 'function' || (typeof delay === 'number' && delay >= 0)) {
          if (typeof delay === 'number') {
            await new Promise<void>((resolve) =>
              setTimeout(() => {
                resolve();
              }, delay),
            );
          } else {
            await delay(ngView);
            if (ngView.ref instanceof ComponentRef) {
              ngView.ref.changeDetectorRef.detectChanges();
            } else {
              ngView.ref.detectChanges();
            }
          }
          measureAndLayout(hostView, width, height);
        }

        return renderToImageSource(hostView, renderOptions);
      } finally {
        disposeBackgroundView(drawableViews);
      }
    } finally {
      ngView.ref.destroy();
    }
  }

  captureRenderedView(view: View, options?: RenderOptions) {
    return renderToImageSource(view, options);
  }
}
