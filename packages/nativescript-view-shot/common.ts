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

export interface RenderOptions {
  /**
   * Pixels per DIP/point in the resulting image. Defaults to the main screen scale.
   * For a pixel-exact image, size the view in DIPs equal to the target pixels and pass `scale: 1`.
   */
  scale?: number;
  /**
   * The view paints every pixel, so the image can skip its alpha channel.
   */
  opaque?: boolean;
  /**
   * iOS only. Color range of the backing buffer. `'automatic'` picks an extended-range
   * (64 bpp) buffer on wide-color screens, doubling memory. Defaults to `'standard'`.
   */
  range?: 'standard' | 'extended' | 'automatic';
  /**
   * Android only. `'RGB_565'` halves memory but drops alpha and reduces color depth. Defaults to `'ARGB_8888'`.
   */
  bitmapConfig?: 'ARGB_8888' | 'RGB_565';
}

export interface RenderViewOptions extends RenderOptions {
  /**
   * target width of the view and image, in dip. If not specified, the measured width of the view will be used.
   */
  width?: number;
  /**
   * target height of the view and image, in dip. If not specified, the measured height of the view will be used.
   */
  height?: number;
  /**
   * logical parent of the view, used for CSS inheritance. See `loadViewInBackground`.
   */
  host?: View;
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
