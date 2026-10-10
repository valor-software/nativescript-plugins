export * from './common';

import { ImageSource, View } from '@nativescript/core';
import { BackgroundViews, RenderOptions, RenderViewOptions } from './common';

/**
 * Renders an already measured and laid out view. Returns null if the view has no native view or is empty.
 */
export function renderToImageSource(hostView: View, options?: RenderOptions): ImageSource | null;

export function loadViewInBackground(view: View, host?: View): BackgroundViews;

export function disposeBackgroundView(backgroundViews: BackgroundViews): void;

/**
 * Loads `view` in the background, lays it out, renders it and disposes the background views.
 */
export function renderViewToImage(view: View, options?: RenderViewOptions): ImageSource | null;

/**
 * Releases the native image now instead of waiting for JS garbage collection.
 * The ImageSource must not be used afterwards.
 */
export function disposeImage(image: ImageSource | null | undefined): void;

/**
 * Renders `view`, passes the image to `callback` and disposes it when the callback returns
 * (or when its returned promise settles). Don't keep a reference to the image past that point.
 */
export function withRenderedImage<T>(view: View, callback: (image: ImageSource | null) => T, options?: RenderOptions): T;
