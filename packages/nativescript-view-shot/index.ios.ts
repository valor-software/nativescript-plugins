import { ContentView, GridLayout, ImageSource, Screen, Utils, View } from '@nativescript/core';
import { BackgroundViews, LogicalViewContainer, RenderOptions, RenderViewOptions } from './common';
import { PlatformRenderer, renderViewToImageWith, withRenderedImageWith } from './render-helpers';
export * from './common';

const imageRanges: Record<NonNullable<RenderOptions['range']>, UIGraphicsImageRendererFormatRange> = {
  standard: UIGraphicsImageRendererFormatRange.Standard,
  extended: UIGraphicsImageRendererFormatRange.Extended,
  automatic: UIGraphicsImageRendererFormatRange.Automatic,
};

export function renderToImageSource(hostView: View, options: RenderOptions = {}): ImageSource | null {
  const nativeView: UIView = hostView.ios;
  if (!nativeView) {
    return null;
  }
  const { width, height } = nativeView.frame.size;
  // UIKit asserts on empty bitmap contexts
  if (!(width > 0 && height > 0)) {
    return null;
  }
  const format = UIGraphicsImageRendererFormat.preferredFormat();
  format.scale = options.scale ?? Screen.mainScreen.scale;
  format.opaque = !!options.opaque;
  format.preferredRange = imageRanges[options.range ?? 'standard'];
  const renderer = UIGraphicsImageRenderer.alloc().initWithSizeFormat(CGSizeMake(width, height), format);
  const image = renderer.imageWithActions((context) => nativeView.layer.renderInContext(context.CGContext));
  return new ImageSource(image);
}

export function loadViewInBackground(view: View, host?: View): BackgroundViews {
  const logicalContainer = host ? new LogicalViewContainer() : null;
  const hiddenHost = new ContentView();
  const hostView = new GridLayout(); // use a host view to ensure margins are respected
  hiddenHost.content = hostView;
  hiddenHost.visibility = 'collapse';
  hostView.addChild(view);

  if (host) {
    logicalContainer.addChild(hiddenHost);
    host._addView(logicalContainer);
  } else {
    hiddenHost._setupAsRootView({});
  }
  hiddenHost.callLoaded();
  return {
    hiddenHost,
    hostView,
    logicalContainer,
  };
}

export function disposeBackgroundView({ hiddenHost, logicalContainer }: BackgroundViews) {
  hiddenHost.parent?._removeView(hiddenHost);
  logicalContainer?.parent?._removeView(logicalContainer);
  hiddenHost.callUnloaded();
  hiddenHost._tearDownUI(true);
}

export function disposeImage(image: ImageSource | null | undefined) {
  if (!image?.ios) {
    return;
  }
  Utils.releaseNativeObject(image.ios);
  image.ios = null;
}

const platform: PlatformRenderer = { renderToImageSource, loadViewInBackground, disposeBackgroundView, disposeImage };

export function renderViewToImage(view: View, options?: RenderViewOptions): ImageSource | null {
  return renderViewToImageWith(platform, view, options);
}

export function withRenderedImage<T>(view: View, callback: (image: ImageSource | null) => T, options?: RenderOptions): T {
  return withRenderedImageWith(platform, view, callback, options);
}
