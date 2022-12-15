import { isAndroid, LayoutBase, Utils, View } from '@nativescript/core';

export interface BackgroundViews {
  // parent of the view that will be rendered to ensure margins are respected
  hostView: View;
  // a view that wraps the hostView and is collapsed
  hiddenHost: View;
  // a view container that will be inserted in the view tree to make it part of the view hierarchy
  // (enables CSS inheritance)
  logicalContainer?: View;
}

export function measureAndLayout(hostView: View, width?: number, height?: number) {
  const dpWidth = width ? Utils.layout.toDevicePixels(width) : 0;
  const dpHeight = height ? Utils.layout.toDevicePixels(height) : 0;
  const infinity = Utils.layout.makeMeasureSpec(0, Utils.layout.UNSPECIFIED);
  hostView.measure(width ? Utils.layout.makeMeasureSpec(dpWidth, Utils.layout.EXACTLY) : infinity, height ? Utils.layout.makeMeasureSpec(dpHeight, Utils.layout.EXACTLY) : infinity);

  hostView.layout(0, 0, hostView.getMeasuredWidth(), hostView.getMeasuredHeight());
}

export class LogicalViewContainer extends LayoutBase {
  constructor() {
    super();
    this.nativeViewProtected = undefined;
    this.visibility = 'collapsed';
  }

  // No native view for proxy container.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  get ios() {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  get android() {
    return null;
  }

  // get nativeView(): any {
  //     return null;
  // }

  get isLayoutRequested(): boolean {
    // Always return false so all layout requests from children bubble up.
    return false;
  }

  public createNativeView() {
    return undefined;
  }

  public _getNativeViewsCount(): number {
    let result = 0;
    this.eachChildView((cv) => {
      result += cv._getNativeViewsCount();

      return true;
    });

    return result;
  }
}

export interface DrawableViews {
  // parent of the view that will be rendered to ensure margins are respected
  hostView: View;
  // a view that wraps the hostView and is collapsed
  hiddenHost: View;
  // a view container that will be inserted in the view tree to make it part of the view hierarchy
  // (enables CSS inheritance)
  logicalContainer?: View;
}
