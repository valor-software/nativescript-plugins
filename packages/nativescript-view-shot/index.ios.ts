import { Application, ContentView, GridLayout, ImageSource, isAndroid, Screen, Utils, View } from '@nativescript/core';
import { BackgroundViews, LogicalViewContainer } from './common';
export * from './common';

export function renderToImageSource(hostView: View): ImageSource {
  UIGraphicsBeginImageContextWithOptions(CGSizeMake(hostView.ios.frame.size.width, hostView.ios.frame.size.height), false, Screen.mainScreen.scale);
  (hostView.ios as UIView).layer.renderInContext(UIGraphicsGetCurrentContext());
  const image = UIGraphicsGetImageFromCurrentImageContext();
  UIGraphicsEndImageContext();
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
    hiddenHost.callLoaded();
  } else {
    hiddenHost._setupAsRootView(isAndroid ? Utils.android.getApplicationContext() : {});
    hiddenHost.callLoaded();
  }
  if (isAndroid) {
    Application.android.startActivity.addContentView(hiddenHost.android, new android.view.ViewGroup.LayoutParams(0, 0));
  }
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
