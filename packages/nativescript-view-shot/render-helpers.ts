import { ImageSource, Utils, View } from '@nativescript/core';
import { BackgroundViews, measureAndLayout, RenderOptions, RenderViewOptions } from './common';

export interface PlatformRenderer {
  renderToImageSource(hostView: View, options?: RenderOptions): ImageSource | null;
  loadViewInBackground(view: View, host?: View): BackgroundViews;
  disposeBackgroundView(backgroundViews: BackgroundViews): void;
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
      return result.finally(() => releaseImage(image)) as T;
    }
    return result;
  } finally {
    if (!disposeLater) {
      releaseImage(image);
    }
  }
}

function releaseImage(image: ImageSource | null) {
  const nativeImage = image?.ios ?? image?.android;
  if (nativeImage) {
    Utils.releaseNativeObject(nativeImage);
  }
}
