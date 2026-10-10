import { Application, ContentView, GridLayout, ImageSource, Screen, Utils, View } from '@nativescript/core';
import { BackgroundViews, LogicalViewContainer, RenderOptions, RenderViewOptions } from './common';
import { PlatformRenderer, renderViewToImageWith, withRenderedImageWith } from './render-helpers';
export * from './common';

@NativeClass
class DummyViewGroup extends android.view.ViewGroup {
  constructor(context: android.content.Context) {
    super(context);
    return global.__native(this);
  }
  public onMeasure(): void {
    this.setMeasuredDimension(0, 0);
  }
  public onLayout(): void {
    //
  }
}
class ContentViewDummy extends ContentView {
  createNativeView() {
    return new DummyViewGroup(this._context);
  }
}

export function renderToImageSource(hostView: View, options: RenderOptions = {}): ImageSource | null {
  const nativeView: android.view.View = hostView.android;
  if (!nativeView) {
    return null;
  }
  // native view size is in device pixels, i.e. already at `density` scale
  const ratio = (options.scale ?? Screen.mainScreen.scale) / Screen.mainScreen.scale;
  const width = Math.round(nativeView.getWidth() * ratio);
  const height = Math.round(nativeView.getHeight() * ratio);
  if (width <= 0 || height <= 0) {
    return null;
  }
  const config = options.bitmapConfig === 'RGB_565' ? android.graphics.Bitmap.Config.RGB_565 : android.graphics.Bitmap.Config.ARGB_8888;
  const bitmap = android.graphics.Bitmap.createBitmap(width, height, config);
  if (options.opaque) {
    bitmap.setHasAlpha(false);
  }
  const canvas = new android.graphics.Canvas(bitmap);
  // ensure we start with a blank transparent canvas
  canvas.drawARGB(0, 0, 0, 0);
  if (ratio !== 1) {
    canvas.scale(ratio, ratio);
  }
  nativeView.draw(canvas);
  return new ImageSource(bitmap);
}

export function loadViewInBackground(view: View, host?: View): BackgroundViews {
  const activity = Application.android.foregroundActivity ?? Application.android.startActivity;
  if (!activity) {
    throw new Error('loadViewInBackground requires a running activity');
  }
  const logicalContainer = host ? new LogicalViewContainer() : null;
  const hiddenHost = new ContentViewDummy();
  const hostView = new GridLayout(); // use a host view to ensure margins are respected
  hiddenHost.content = hostView;
  hiddenHost.visibility = 'collapse';
  hostView.addChild(view);

  if (host) {
    logicalContainer.addChild(hiddenHost);
    host._addView(logicalContainer);
  } else {
    hiddenHost._setupAsRootView(Utils.android.getApplicationContext());
  }
  hiddenHost.callLoaded();

  activity.addContentView(hiddenHost.android, new android.view.ViewGroup.LayoutParams(0, 0));

  return {
    hiddenHost,
    hostView,
    logicalContainer,
  };
}

export function disposeBackgroundView({ hiddenHost, logicalContainer }: BackgroundViews) {
  const parent = hiddenHost.android?.getParent() as android.view.ViewGroup | null;
  parent?.removeView(hiddenHost.android);
  hiddenHost.parent?._removeView(hiddenHost);
  logicalContainer?.parent?._removeView(logicalContainer);
  hiddenHost.callUnloaded();
  hiddenHost._tearDownUI(true);
}

export function disposeImage(image: ImageSource | null | undefined) {
  if (!image?.android) {
    return;
  }
  Utils.releaseNativeObject(image.android);
  image.android = null;
}

const platform: PlatformRenderer = { renderToImageSource, loadViewInBackground, disposeBackgroundView, disposeImage };

export function renderViewToImage(view: View, options?: RenderViewOptions): ImageSource | null {
  return renderViewToImageWith(platform, view, options);
}

export function withRenderedImage<T>(view: View, callback: (image: ImageSource | null) => T, options?: RenderOptions): T {
  return withRenderedImageWith(platform, view, callback, options);
}
