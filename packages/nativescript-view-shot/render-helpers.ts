import { ImageSource, View } from '@nativescript/core';
import { BackgroundViews, measureAndLayout, RenderOptions, RenderViewOptions } from './common';

export interface PlatformRenderer {
  renderToImageSource(hostView: View, options?: RenderOptions): ImageSource | null;
  loadViewInBackground(view: View, host?: View): BackgroundViews;
  disposeBackgroundView(backgroundViews: BackgroundViews): void;
  disposeImage(image: ImageSource | null | undefined): void;
}

export function renderViewToImageWith(platform: PlatformRenderer, view: View, { width, height, host, ...renderOptions }: RenderViewOptions = {}): ImageSource | null {
  const backgroundViews = platform.loadViewInBackground(view, host);
  try {
    measureAndLayout(backgroundViews.hostView, width, height);
    return platform.renderToImageSource(backgroundViews.hostView, renderOptions);
  } finally {
    platform.disposeBackgroundView(backgroundViews);
  }
}

export function withRenderedImageWith<T>(platform: PlatformRenderer, view: View, callback: (image: ImageSource | null) => T, options?: RenderOptions): T {
  const image = platform.renderToImageSource(view, options);
  let disposeLater = false;
  try {
    const result = callback(image);
    if (result instanceof Promise) {
      disposeLater = true;
      return result.finally(() => platform.disposeImage(image)) as T;
    }
    return result;
  } finally {
    if (!disposeLater) {
      platform.disposeImage(image);
    }
  }
}
