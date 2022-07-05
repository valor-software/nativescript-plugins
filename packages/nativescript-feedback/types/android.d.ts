
declare module com {
	export module tapadoo {
		export module alerter {
			export class Alert implements com.tapadoo.alerter.SwipeDismissTouchListener.DismissCallbacks {
				public static class: java.lang.Class<com.tapadoo.alerter.Alert>;
				public static Companion: com.tapadoo.alerter.Alert.Companion;
				public setAlertBackgroundResource(param0: number): void;
				public getButtonTypeFace(): globalAndroid.graphics.Typeface;
				public addButton(param0: string, param1: number, param2: globalAndroid.view.View.OnClickListener): void;
				public setTitleAppearance(param0: number): void;
				public setIcon(param0: number): void;
				public setExitAnimation$alerter_release(param0: globalAndroid.view.animation.Animation): void;
				public setTitle(param0: string): void;
				public onClick(param0: globalAndroid.view.View): void;
				public pulseIcon(param0: boolean): void;
				public getLayoutGravity(): number;
				public showRightIcon(param0: boolean): void;
				public setRightIconColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public setTitle(param0: number): void;
				public setSound(param0: globalAndroid.net.Uri): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.util.AttributeSet, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public onTouch(param0: globalAndroid.view.View, param1: boolean): void;
				public setAlertBackgroundColor(param0: number): void;
				public setRightIcon(param0: globalAndroid.graphics.Bitmap): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.util.AttributeSet);
				public isDismissible(): boolean;
				public getTitle(): globalAndroid.widget.TextView;
				public setDismissible(param0: boolean): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public setBackgroundElevation(param0: number): void;
				public setDuration$alerter_release(param0: number): void;
				public setRightIcon(param0: number): void;
				public setEnterAnimation$alerter_release(param0: globalAndroid.view.animation.Animation): void;
				public setVisibility(param0: number): void;
				public setRightIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setRightIconColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public setRightIconPixelSize(param0: number): void;
				public setRightIconPosition(param0: number): void;
				public setText(param0: number): void;
				public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
				public onDetachedFromWindow(): void;
				public onAnimationEnd(param0: globalAndroid.view.animation.Animation): void;
				public setIconSize(param0: number): void;
				public setTextAppearance(param0: number): void;
				public getExitAnimation$alerter_release(): globalAndroid.view.animation.Animation;
				public setText(param0: string): void;
				public _$_findCachedViewById(param0: number): globalAndroid.view.View;
				public setButtonTypeFace(param0: globalAndroid.graphics.Typeface): void;
				public setEnableProgress(param0: boolean): void;
				public setVibrationEnabled(param0: boolean): void;
				public disableOutsideTouch(): void;
				public onAnimationRepeat(param0: globalAndroid.view.animation.Animation): void;
				public _$_clearFindViewByIdCache(): void;
				public setIconColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
				public getOnHideListener$alerter_release(): com.tapadoo.alerter.OnHideAlertListener;
				public getLayoutContainer(): globalAndroid.view.View;
				public showIcon(param0: boolean): void;
				public setOnShowListener(param0: com.tapadoo.alerter.OnShowAlertListener): void;
				public getContentGravity(): number;
				public getDuration$alerter_release(): number;
				public onDismiss(param0: globalAndroid.view.View): void;
				public setRightIconSize(param0: number): void;
				public setLayoutGravity(param0: number): void;
				public canDismiss(): boolean;
				public setTextTypeface(param0: globalAndroid.graphics.Typeface): void;
				public setIconColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
				public setProgressColorInt(param0: number): void;
				public setAlertBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setIcon(param0: globalAndroid.graphics.Bitmap): void;
				public setProgressColorRes(param0: number): void;
				public setRightIconColorFilter(param0: number): void;
				public enableClickAnimation(param0: boolean): void;
				public pulseRightIcon(param0: boolean): void;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): void;
				public setOnHideListener$alerter_release(param0: com.tapadoo.alerter.OnHideAlertListener): void;
				public setIconColorFilter(param0: number): void;
				public onAnimationStart(param0: globalAndroid.view.animation.Animation): void;
				public onMeasure(param0: number, param1: number): void;
				public setContentGravity(param0: number): void;
				public removeFromParent$alerter_release(): void;
				public enableSwipeToDismiss(): void;
				public getEnterAnimation$alerter_release(): globalAndroid.view.animation.Animation;
				public setEnableInfiniteDuration(param0: boolean): void;
				public onAttachedToWindow(): void;
				public setIconPixelSize(param0: number): void;
				public getText(): globalAndroid.widget.TextView;
				public setTitleTypeface(param0: globalAndroid.graphics.Typeface): void;
			}
			export module Alert {
				export class Companion {
					public static class: java.lang.Class<com.tapadoo.alerter.Alert.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class Alerter {
				public static class: java.lang.Class<com.tapadoo.alerter.Alerter>;
				public static Companion: com.tapadoo.alerter.Alerter.Companion;
				public setRightIconColorFilter(param0: globalAndroid.graphics.ColorFilter): com.tapadoo.alerter.Alerter;
				public setRightIconSize(param0: number): com.tapadoo.alerter.Alerter;
				public setElevation(param0: number): com.tapadoo.alerter.Alerter;
				public setTitleTypeface(param0: globalAndroid.graphics.Typeface): com.tapadoo.alerter.Alerter;
				public setRightIconPixelSize(param0: number): com.tapadoo.alerter.Alerter;
				public setIconColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): com.tapadoo.alerter.Alerter;
				public setDismissable(param0: boolean): com.tapadoo.alerter.Alerter;
				public static clearCurrent(param0: globalAndroid.app.Activity, param1: globalAndroid.app.Dialog): void;
				public enableInfiniteDuration(param0: boolean): com.tapadoo.alerter.Alerter;
				public setProgressColorInt(param0: number): com.tapadoo.alerter.Alerter;
				public static isShowing(): boolean;
				public setText(param0: number): com.tapadoo.alerter.Alerter;
				public showIcon(param0: boolean): com.tapadoo.alerter.Alerter;
				public setExitAnimation(param0: number): com.tapadoo.alerter.Alerter;
				public enableVibration(param0: boolean): com.tapadoo.alerter.Alerter;
				public enableClickAnimation(param0: boolean): com.tapadoo.alerter.Alerter;
				public setOnHideListener(param0: com.tapadoo.alerter.OnHideAlertListener): com.tapadoo.alerter.Alerter;
				public setOnShowListener(param0: com.tapadoo.alerter.OnShowAlertListener): com.tapadoo.alerter.Alerter;
				public static hide(param0: com.tapadoo.alerter.OnHideAlertListener): void;
				public setText(param0: string): com.tapadoo.alerter.Alerter;
				public static create(param0: globalAndroid.app.Dialog): com.tapadoo.alerter.Alerter;
				public show(): com.tapadoo.alerter.Alert;
				public setContentGravity(param0: number): com.tapadoo.alerter.Alerter;
				public static create(param0: globalAndroid.app.Dialog, param1: number): com.tapadoo.alerter.Alerter;
				public disableOutsideTouch(): com.tapadoo.alerter.Alerter;
				public setTextTypeface(param0: globalAndroid.graphics.Typeface): com.tapadoo.alerter.Alerter;
				public setRightIconColorFilter(param0: number): com.tapadoo.alerter.Alerter;
				public showRightIcon(param0: boolean): com.tapadoo.alerter.Alerter;
				public enableRightIconPulse(param0: boolean): com.tapadoo.alerter.Alerter;
				public setBackgroundColorInt(param0: number): com.tapadoo.alerter.Alerter;
				public static hide(): void;
				public setTitle(param0: number): com.tapadoo.alerter.Alerter;
				public setRightIcon(param0: globalAndroid.graphics.Bitmap): com.tapadoo.alerter.Alerter;
				public setIcon(param0: globalAndroid.graphics.drawable.Drawable): com.tapadoo.alerter.Alerter;
				public static clearCurrent(param0: globalAndroid.app.Activity): void;
				public static create(param0: globalAndroid.app.Activity): com.tapadoo.alerter.Alerter;
				public setIconSize(param0: number): com.tapadoo.alerter.Alerter;
				public setRightIcon(param0: globalAndroid.graphics.drawable.Drawable): com.tapadoo.alerter.Alerter;
				public setIconColorFilter(param0: globalAndroid.graphics.ColorFilter): com.tapadoo.alerter.Alerter;
				public setDuration(param0: number): com.tapadoo.alerter.Alerter;
				public getLayoutContainer(): globalAndroid.view.View;
				public setBackgroundResource(param0: number): com.tapadoo.alerter.Alerter;
				public setIcon(param0: number): com.tapadoo.alerter.Alerter;
				public static clearCurrent(param0: globalAndroid.app.Activity, param1: com.tapadoo.alerter.OnHideAlertListener): void;
				public setEnterAnimation(param0: number): com.tapadoo.alerter.Alerter;
				public setBackgroundColorRes(param0: number): com.tapadoo.alerter.Alerter;
				public setRightIconColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): com.tapadoo.alerter.Alerter;
				public enableProgress(param0: boolean): com.tapadoo.alerter.Alerter;
				public setTitle(param0: string): com.tapadoo.alerter.Alerter;
				public setIcon(param0: globalAndroid.graphics.Bitmap): com.tapadoo.alerter.Alerter;
				public static clearCurrent(param0: globalAndroid.app.Activity, param1: globalAndroid.app.Dialog, param2: com.tapadoo.alerter.OnHideAlertListener): void;
				public enableSwipeToDismiss(): com.tapadoo.alerter.Alerter;
				public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.tapadoo.alerter.Alerter;
				public setIconColorFilter(param0: number): com.tapadoo.alerter.Alerter;
				public setButtonTypeface(param0: globalAndroid.graphics.Typeface): com.tapadoo.alerter.Alerter;
				public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): com.tapadoo.alerter.Alerter;
				public setSound(): com.tapadoo.alerter.Alerter;
				public setRightIcon(param0: number): com.tapadoo.alerter.Alerter;
				public static create(param0: globalAndroid.app.Activity, param1: number): com.tapadoo.alerter.Alerter;
				public setTitleAppearance(param0: number): com.tapadoo.alerter.Alerter;
				public hideIcon(): com.tapadoo.alerter.Alerter;
				public setIconPixelSize(param0: number): com.tapadoo.alerter.Alerter;
				public addButton(param0: string, param1: number, param2: globalAndroid.view.View.OnClickListener): com.tapadoo.alerter.Alerter;
				public setTextAppearance(param0: number): com.tapadoo.alerter.Alerter;
				public setLayoutGravity(param0: number): com.tapadoo.alerter.Alerter;
				public setProgressColorRes(param0: number): com.tapadoo.alerter.Alerter;
				public setSound(param0: globalAndroid.net.Uri): com.tapadoo.alerter.Alerter;
				public setRightIconPosition(param0: number): com.tapadoo.alerter.Alerter;
				public enableIconPulse(param0: boolean): com.tapadoo.alerter.Alerter;
			}
			export module Alerter {
				export class Companion {
					public static class: java.lang.Class<com.tapadoo.alerter.Alerter.Companion>;
					public hide(param0: com.tapadoo.alerter.OnHideAlertListener): void;
					public clearCurrent(param0: globalAndroid.app.Activity): void;
					public isShowing(): boolean;
					public create(param0: globalAndroid.app.Dialog, param1: number): com.tapadoo.alerter.Alerter;
					public clearCurrent(param0: globalAndroid.app.Activity, param1: globalAndroid.app.Dialog, param2: com.tapadoo.alerter.OnHideAlertListener): void;
					public create(param0: globalAndroid.app.Dialog): com.tapadoo.alerter.Alerter;
					public create(param0: globalAndroid.app.Activity, param1: number): com.tapadoo.alerter.Alerter;
					public hide(): void;
					public create(param0: globalAndroid.app.Activity): com.tapadoo.alerter.Alerter;
					public clearCurrent(param0: globalAndroid.app.Activity, param1: com.tapadoo.alerter.OnHideAlertListener): void;
					public clearCurrent(param0: globalAndroid.app.Activity, param1: globalAndroid.app.Dialog): void;
				}
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class BuildConfig {
				public static class: java.lang.Class<com.tapadoo.alerter.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class OnHideAlertListener {
				public static class: java.lang.Class<com.tapadoo.alerter.OnHideAlertListener>;
				/**
				 * Constructs a new instance of the com.tapadoo.alerter.OnHideAlertListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onHide(): void;
				});
				public constructor();
				public onHide(): void;
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class OnShowAlertListener {
				public static class: java.lang.Class<com.tapadoo.alerter.OnShowAlertListener>;
				/**
				 * Constructs a new instance of the com.tapadoo.alerter.OnShowAlertListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onShow(): void;
				});
				public constructor();
				public onShow(): void;
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export class SwipeDismissTouchListener {
				public static class: java.lang.Class<com.tapadoo.alerter.SwipeDismissTouchListener>;
				public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
				public constructor(param0: globalAndroid.view.View, param1: com.tapadoo.alerter.SwipeDismissTouchListener.DismissCallbacks);
			}
			export module SwipeDismissTouchListener {
				export class DismissCallbacks {
					public static class: java.lang.Class<com.tapadoo.alerter.SwipeDismissTouchListener.DismissCallbacks>;
					/**
					 * Constructs a new instance of the com.tapadoo.alerter.SwipeDismissTouchListener$DismissCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canDismiss(): boolean;
						onDismiss(param0: globalAndroid.view.View): void;
						onTouch(param0: globalAndroid.view.View, param1: boolean): void;
					});
					public constructor();
					public canDismiss(): boolean;
					public onTouch(param0: globalAndroid.view.View, param1: boolean): void;
					public onDismiss(param0: globalAndroid.view.View): void;
				}
			}
		}
	}
}

declare module com {
	export module tapadoo {
		export module alerter {
			export module utils {
				export class ExAlertKt {
					public static class: java.lang.Class<com.tapadoo.alerter.utils.ExAlertKt>;
					public static notchHeight(param0: com.tapadoo.alerter.Alert): number;
					public static getRippleDrawable(param0: globalAndroid.content.Context): globalAndroid.graphics.drawable.Drawable;
					public static getDimenPixelSize(param0: com.tapadoo.alerter.Alert, param1: number): number;
				}
			}
		}
	}
}

//Generics information:

