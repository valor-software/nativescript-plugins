import { Application, ContentView, GridLayout, ImageSource, Utils, View } from '@nativescript/core';
import { BackgroundViews, LogicalViewContainer } from './common';
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

export function renderToImageSource(hostView: View): ImageSource {
  const bitmap = android.graphics.Bitmap.createBitmap(hostView.android.getWidth(), hostView.android.getHeight(), android.graphics.Bitmap.Config.ARGB_8888);
  const canvas = new android.graphics.Canvas(bitmap);
  hostView.android.draw(canvas);
  return new ImageSource(bitmap);
}

export function loadViewInBackground(view: View, host?: View): BackgroundViews {
  const logicalContainer = host ? new LogicalViewContainer() : null;
  const hiddenHost = new ContentViewDummy();
  const hostView = new GridLayout(); // use a host view to ensure margins are respected
  hiddenHost.content = hostView;
  hiddenHost.visibility = 'collapse';
  hostView.addChild(view);

  if (host) {
    logicalContainer.addChild(hiddenHost);
    host._addView(logicalContainer);
    hiddenHost.callLoaded();
  } else {
    hiddenHost._setupAsRootView(Utils.android.getApplicationContext());
    hiddenHost.callLoaded();
  }

  Application.android.startActivity.addContentView(hiddenHost.android, new android.view.ViewGroup.LayoutParams(0, 0));

  return {
    hiddenHost,
    hostView,
    logicalContainer,
  };
}

export function disposeBackgroundView({ hiddenHost, logicalContainer }: BackgroundViews) {
  (hiddenHost.android.getParent() as android.view.ViewGroup).removeView(hiddenHost.android);
  hiddenHost.parent?._removeView(hiddenHost);
  logicalContainer?.parent?._removeView(logicalContainer);
  hiddenHost.callUnloaded();
  hiddenHost._tearDownUI(true);
}
