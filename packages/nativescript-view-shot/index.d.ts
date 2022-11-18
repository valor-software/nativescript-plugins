export * from './common';

import { ImageSource, View } from '@nativescript/core';
import { BackgroundViews } from './common';

export function renderToImageSource(hostView: View): ImageSource;

export function loadViewInBackground(view: View, host?: View): BackgroundViews;

export function disposeBackgroundView(backgroundViews: BackgroundViews): void;
