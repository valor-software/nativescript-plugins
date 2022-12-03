declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export abstract class AppUpdateInfo {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateInfo>;
							public constructor();
							public bytesDownloaded(): number;
							public static a(param0: string, param1: number, param2: number, param3: number, param4: java.lang.Integer, param5: number, param6: number, param7: number, param8: number, param9: number, param10: globalAndroid.app.PendingIntent, param11: globalAndroid.app.PendingIntent, param12: globalAndroid.app.PendingIntent, param13: globalAndroid.app.PendingIntent): com.google.android.play.core.appupdate.AppUpdateInfo;
							public updatePriority(): number;
							public availableVersionCode(): number;
							public isUpdateTypeAllowed(param0: number): boolean;
							public clientVersionStalenessDays(): java.lang.Integer;
							public updateAvailability(): number;
							public isUpdateTypeAllowed(param0: com.google.android.play.core.appupdate.AppUpdateOptions): boolean;
							public installStatus(): number;
							public packageName(): string;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class AppUpdateManager {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateManager>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.appupdate.AppUpdateManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
								unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
								getAppUpdateInfo(): com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
								startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
								completeUpdate(): com.google.android.play.core.tasks.Task<java.lang.Void>;
							});
							public constructor();
							public getAppUpdateInfo(): com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
							public unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
							public startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public completeUpdate(): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class AppUpdateManagerFactory {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateManagerFactory>;
							public constructor();
							public static create(param0: globalAndroid.content.Context): com.google.android.play.core.appupdate.AppUpdateManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export abstract class AppUpdateOptions {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateOptions>;
							public constructor();
							public static newBuilder(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
							public appUpdateType(): number;
							public allowAssetPackDeletion(): boolean;
							public static defaultOptions(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions;
						}
						export module AppUpdateOptions {
							export abstract class Builder {
								public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateOptions.Builder>;
								public setAppUpdateType(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
								public constructor();
								public build(): com.google.android.play.core.appupdate.AppUpdateOptions;
								public setAllowAssetPackDeletion(param0: boolean): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class a extends com.google.android.play.core.listener.b<com.google.android.play.core.install.InstallState> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.a>;
							public a(param0: any): void;
							public constructor(param0: com.google.android.play.core.internal.af, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
							public a(param0: com.google.android.play.core.listener.StateUpdatedListener<any>): void;
							public a(): void;
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public a(param0: boolean): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class b extends com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.a> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.b>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class c {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.c>;
							public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class d extends com.google.android.play.core.common.IntentSenderForResultStarter {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.d>;
							public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class e extends com.google.android.play.core.appupdate.AppUpdateManager {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.e>;
							public getAppUpdateInfo(): com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
							public unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
							public startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public completeUpdate(): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
							public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class f extends com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.e> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.f>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.p>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.a>, param2: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class g {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.g>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class h extends com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.AppUpdateManager> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.h>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.e>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class i extends com.google.android.play.core.internal.cn<globalAndroid.content.Context> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.i>;
							public constructor(param0: com.google.android.play.core.appupdate.g);
							public b(): globalAndroid.content.Context;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class j extends com.google.android.play.core.internal.al<any> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.j>;
							public a(param0: globalAndroid.os.IBinder): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class k extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.k>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class l extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.l>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class m<T>  extends com.google.android.play.core.internal.o {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.m<any>>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class n extends com.google.android.play.core.appupdate.m<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.n>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class o extends com.google.android.play.core.appupdate.m<com.google.android.play.core.appupdate.AppUpdateInfo> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.o>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class p {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.p>;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.play.core.appupdate.r);
							public a(param0: string): com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
							public b(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class q extends com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.p> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.q>;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.r>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class r {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.r>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class s extends com.google.android.play.core.internal.cn<com.google.android.play.core.appupdate.r> {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.s>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class t extends com.google.android.play.core.appupdate.AppUpdateInfo {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.t>;
							public bytesDownloaded(): number;
							public updatePriority(): number;
							public availableVersionCode(): number;
							public hashCode(): number;
							public clientVersionStalenessDays(): java.lang.Integer;
							public updateAvailability(): number;
							public toString(): string;
							public installStatus(): number;
							public equals(param0: any): boolean;
							public packageName(): string;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export module testing {
							export class FakeAppUpdateManager extends com.google.android.play.core.appupdate.AppUpdateManager {
								public static class: java.lang.Class<com.google.android.play.core.appupdate.testing.FakeAppUpdateManager>;
								public completeUpdate(): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
								public setUpdatePriority(param0: number): void;
								public installFails(): void;
								public userAcceptsUpdate(): void;
								public getAppUpdateInfo(): com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
								public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
								public userCancelsDownload(): void;
								public isInstallSplashScreenVisible(): boolean;
								public downloadFails(): void;
								public setUpdateAvailable(param0: number): void;
								public installCompletes(): void;
								public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
								public getTypeForUpdateInProgress(): java.lang.Integer;
								public isConfirmationDialogVisible(): boolean;
								public setInstallErrorCode(param0: number): void;
								public downloadStarts(): void;
								public startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								public setUpdateNotAvailable(): void;
								public isImmediateFlowVisible(): boolean;
								public setTotalBytesToDownload(param0: number): void;
								public setClientVersionStalenessDays(param0: java.lang.Integer): void;
								public userRejectsUpdate(): void;
								public unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
								public constructor(param0: globalAndroid.content.Context);
								public registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
								public setBytesDownloaded(param0: number): void;
								public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
								public downloadCompletes(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class u extends com.google.android.play.core.appupdate.AppUpdateOptions.Builder {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.u>;
							public setAppUpdateType(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
							public setAllowAssetPackDeletion(param0: boolean): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
							public build(): com.google.android.play.core.appupdate.AppUpdateOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class v extends com.google.android.play.core.appupdate.AppUpdateOptions {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.v>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public appUpdateType(): number;
							public allowAssetPackDeletion(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class w {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.w>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class x {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.x>;
							public a(): com.google.android.play.core.appupdate.y;
							public a(param0: com.google.android.play.core.appupdate.g): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class y {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.y>;
							public a(): com.google.android.play.core.appupdate.AppUpdateManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export abstract class AssetLocation {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetLocation>;
							public constructor();
							public size(): number;
							public offset(): number;
							public path(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class AssetPackException extends com.google.android.play.core.tasks.j {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackException>;
							public getErrorCode(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class AssetPackExtractionService {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackExtractionService>;
							public constructor();
							public onCreate(): void;
							public a(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export abstract class AssetPackLocation {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackLocation>;
							public constructor();
							public packStorageMethod(): number;
							public path(): string;
							public assetsPath(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class AssetPackManager {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackManager>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.AssetPackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
								unregisterListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
								clearListeners(): void;
								getPackStates(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
								fetch(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
								getPackLocation(param0: string): com.google.android.play.core.assetpacks.AssetPackLocation;
								getAssetLocation(param0: string, param1: string): com.google.android.play.core.assetpacks.AssetLocation;
								getPackLocations(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackLocation>;
								cancel(param0: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
								removePack(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
								showCellularDataConfirmation(param0: globalAndroid.app.Activity): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							});
							public constructor();
							public getPackLocations(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackLocation>;
							public removePack(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public getAssetLocation(param0: string, param1: string): com.google.android.play.core.assetpacks.AssetLocation;
							public cancel(param0: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
							public registerListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public getPackLocation(param0: string): com.google.android.play.core.assetpacks.AssetPackLocation;
							public fetch(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public unregisterListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public clearListeners(): void;
							public getPackStates(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public showCellularDataConfirmation(param0: globalAndroid.app.Activity): com.google.android.play.core.tasks.Task<java.lang.Integer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class AssetPackManagerFactory {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackManagerFactory>;
							public constructor();
							public static getInstance(param0: globalAndroid.content.Context): com.google.android.play.core.assetpacks.AssetPackManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export abstract class AssetPackState {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackState>;
							public constructor();
							public bytesDownloaded(): number;
							public status(): number;
							public transferProgressPercentage(): number;
							public name(): string;
							public errorCode(): number;
							public static a(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number): com.google.android.play.core.assetpacks.AssetPackState;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class AssetPackStateUpdateListener extends com.google.android.play.core.listener.StateUpdatedListener<com.google.android.play.core.assetpacks.AssetPackState> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackStateUpdateListener>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.AssetPackStateUpdateListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStateUpdate(param0: any): void;
							});
							public constructor();
							public onStateUpdate(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export abstract class AssetPackStates {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.AssetPackStates>;
							public constructor();
							public totalBytes(): number;
							public static a(param0: number, param1: java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackState>): com.google.android.play.core.assetpacks.AssetPackStates;
							public static a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.assetpacks.bz, param2: com.google.android.play.core.assetpacks.az): com.google.android.play.core.assetpacks.AssetPackStates;
							public static a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.assetpacks.bz, param2: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
							public packStates(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackState>;
							public static a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.assetpacks.bz): com.google.android.play.core.assetpacks.AssetPackStates;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class NativeAssetPackStateUpdateListener extends com.google.android.play.core.assetpacks.AssetPackStateUpdateListener {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.NativeAssetPackStateUpdateListener>;
							public constructor();
							public onStateUpdate(param0: com.google.android.play.core.assetpacks.AssetPackState): void;
							public onStateUpdate(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class a {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.a>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): com.google.android.play.core.assetpacks.AssetPackManager;
								a(param0: com.google.android.play.core.assetpacks.AssetPackExtractionService): void;
							});
							public constructor();
							public a(): com.google.android.play.core.assetpacks.AssetPackManager;
							public a(param0: com.google.android.play.core.assetpacks.AssetPackExtractionService): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class aa extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.aa>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ab extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ab>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ac extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ac>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ad extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ad>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ae extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ae>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class af extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.af>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ag extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ag>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ah extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ah>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ai extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ai>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class aj extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.aj>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ak<T>  extends com.google.android.play.core.internal.t {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ak<any>>;
							public a(param0: number): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class al extends com.google.android.play.core.assetpacks.ak<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.al>;
							public a(param0: number): void;
							public a(): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class am extends com.google.android.play.core.assetpacks.ak<java.util.List<string>> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.am>;
							public a(param0: number): void;
							public a(): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class an extends com.google.android.play.core.assetpacks.ak<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.an>;
							public a(param0: number): void;
							public a(): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ao extends com.google.android.play.core.assetpacks.ak<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ao>;
							public a(param0: number): void;
							public a(): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ap extends com.google.android.play.core.assetpacks.ak<com.google.android.play.core.assetpacks.AssetPackStates> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ap>;
							public a(param0: number): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class aq extends com.google.android.play.core.assetpacks.ak<com.google.android.play.core.assetpacks.AssetPackStates> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.aq>;
							public a(param0: number): void;
							public a(): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ar extends com.google.android.play.core.assetpacks.w {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ar>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<java.util.List<string>>;
							public a(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public a(param0: java.util.List<string>): void;
							public a(param0: number, param1: string, param2: string, param3: number): void;
							public b(param0: number, param1: string, param2: string, param3: number): com.google.android.play.core.tasks.Task<globalAndroid.os.ParcelFileDescriptor>;
							public a(param0: string): void;
							public a(param0: java.util.List<string>, param1: com.google.android.play.core.assetpacks.az, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public a(param0: number, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class as extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.ar> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.as>;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class at {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.at>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class au {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.au>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class av {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.av>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class aw extends com.google.android.play.core.listener.b<com.google.android.play.core.assetpacks.AssetPackState> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.aw>;
							public a(param0: any): void;
							public a(param0: com.google.android.play.core.listener.StateUpdatedListener<any>): void;
							public a(): void;
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public a(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ax extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.aw> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ax>;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cp>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bw>, param3: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param4: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>, param5: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bn>, param6: com.google.android.play.core.internal.cn<com.google.android.play.core.common.a>, param7: com.google.android.play.core.internal.cn<java.util.concurrent.Executor>, param8: com.google.android.play.core.internal.cn<java.util.concurrent.Executor>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ay extends com.google.android.play.core.assetpacks.az {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ay>;
							public a(param0: number, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class az {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.az>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.az interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: number, param1: string): number;
							});
							public constructor();
							public a(param0: number, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class b extends com.google.android.play.core.internal.v {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.b>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.internal.y): void;
							public a(param0: com.google.android.play.core.internal.y): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ba extends com.google.android.play.core.assetpacks.az {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ba>;
							public a(param0: number, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bb {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bb>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bc extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bc>;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dl>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bd>;
							public close(): void;
							public read(): number;
							public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class be extends com.google.android.play.core.internal.ca {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.be>;
							public a(param0: number, param1: number): java.io.InputStream;
							public close(): void;
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bf extends com.google.android.play.core.assetpacks.AssetLocation {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bf>;
							public size(): number;
							public offset(): number;
							public path(): string;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bg extends com.google.android.play.core.assetpacks.AssetPackLocation {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bg>;
							public packStorageMethod(): number;
							public path(): string;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public assetsPath(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bh extends com.google.android.play.core.assetpacks.AssetPackState {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bh>;
							public bytesDownloaded(): number;
							public hashCode(): number;
							public status(): number;
							public transferProgressPercentage(): number;
							public name(): string;
							public errorCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bi extends com.google.android.play.core.assetpacks.AssetPackStates {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bi>;
							public totalBytes(): number;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public packStates(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackState>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bj {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bk {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bk>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bl extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bk> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bl>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bm {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bm>;
							public read(param0: androidNative.Array<number>): number;
							public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bn {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bo {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bp extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bn> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bp>;
							public constructor();
							public static b(): com.google.android.play.core.assetpacks.bn;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bq {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bq>;
							public a(param0: com.google.android.play.core.assetpacks.n): void;
							public a(): com.google.android.play.core.assetpacks.a;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class br extends com.google.android.play.core.assetpacks.a {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.br>;
							public a(): com.google.android.play.core.assetpacks.AssetPackManager;
							public a(param0: com.google.android.play.core.assetpacks.AssetPackExtractionService): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bs extends com.google.android.play.core.assetpacks.cr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bt {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bt>;
							public a(param0: com.google.android.play.core.assetpacks.bs): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bu extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bt> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bu>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.aw>, param3: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bv {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bv>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bw {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bw>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bx extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bw> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bx>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cp>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bt>, param3: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dv>, param4: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.df>, param5: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dj>, param6: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.do>, param7: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cs>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class by {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.by>;
							public write(param0: androidNative.Array<number>): void;
							public write(param0: androidNative.Array<number>, param1: number, param2: number): void;
							public write(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class bz {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.bz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class c extends com.google.android.play.core.assetpacks.az {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.c>;
							public a(param0: number, param1: string): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ca {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ca>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cb extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cb>;
							public constructor();
							public static b(): com.google.android.play.core.assetpacks.bz;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cc extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cc>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cd extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cd>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ce extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ce>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cf extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cf>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cg extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cg>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ch extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ch>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ci extends com.google.android.play.core.assetpacks.co<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ci>;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cj {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cj>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ck {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ck>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cl {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cl>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cm {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cm>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cn {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class co<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.co<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.co<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): T;
							});
							public constructor();
							public a(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cp {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cp>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cq extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cp> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cq>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>, param3: com.google.android.play.core.internal.cn<java.util.concurrent.Executor>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cs>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ct extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cs> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ct>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cp>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bk>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cu {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cu>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cv {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cv>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cw {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cw>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cx {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cx>;
							public accept(param0: java.io.File, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cy {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cy>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class cz extends com.google.android.play.core.assetpacks.w {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.cz>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<java.util.List<string>>;
							public a(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public a(param0: java.util.List<string>): void;
							public a(param0: number, param1: string, param2: string, param3: number): void;
							public b(param0: number, param1: string, param2: string, param3: number): com.google.android.play.core.tasks.Task<globalAndroid.os.ParcelFileDescriptor>;
							public a(param0: string): void;
							public a(param0: java.util.List<string>, param1: com.google.android.play.core.assetpacks.az, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public a(param0: number, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class d {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.d>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class da extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cz> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.da>;
							public constructor(param0: com.google.android.play.core.internal.cn<string>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.aw>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>, param3: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param4: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dl>, param5: com.google.android.play.core.internal.cn<java.util.concurrent.Executor>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class db {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.db>;
							public static a(param0: number): boolean;
							public static b(param0: number): boolean;
							public static c(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dc {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dc>;
							public close(): void;
							public read(): number;
							public constructor(param0: java.util.Enumeration<java.io.File>);
							public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dd>;
							public constructor();
							public a(): com.google.android.play.core.assetpacks.dx;
							public a(param0: androidNative.Array<number>, param1: number, param2: number): number;
							public b(): number;
							public c(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class de extends com.google.android.play.core.assetpacks.cr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.de>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class df {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.df>;
							public a(param0: com.google.android.play.core.assetpacks.de): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dg extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.df> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dg>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dh extends com.google.android.play.core.assetpacks.cr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dh>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class di {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.di>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dj {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dj>;
							public a(param0: com.google.android.play.core.assetpacks.dh): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dk extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dj> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dk>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cp>, param3: com.google.android.play.core.internal.cn<java.util.concurrent.Executor>, param4: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dl {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dl>;
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dm extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dl> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dm>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dn extends com.google.android.play.core.assetpacks.cr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dn>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					// export module assetpacks {
					// 	export class do {
					// 		public static class: java.lang.Class<com.google.android.play.core.assetpacks.do>;
					// 		public a(param0: com.google.android.play.core.assetpacks.dn): void;
					// 	}
					// }
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dp extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.do> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dp>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.common.a>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dq {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dq>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dr>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class ds {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ds>;
							public accept(param0: java.io.File, param1: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dt {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dt>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class du extends com.google.android.play.core.assetpacks.cr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.du>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dv {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dv>;
							public a(param0: com.google.android.play.core.assetpacks.du): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dw extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.dv> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dw>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class dx {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.dx>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class e {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.e>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class f {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.f>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class g extends com.google.android.play.core.tasks.OnSuccessListener<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.g>;
							public onSuccess(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class h extends com.google.android.play.core.tasks.OnFailureListener {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.h>;
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class i {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.i>;
							public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class j extends com.google.android.play.core.assetpacks.AssetPackManager {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.j>;
							public getPackLocations(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackLocation>;
							public removePack(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public getAssetLocation(param0: string, param1: string): com.google.android.play.core.assetpacks.AssetLocation;
							public cancel(param0: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
							public registerListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public getPackLocation(param0: string): com.google.android.play.core.assetpacks.AssetPackLocation;
							public fetch(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public unregisterListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public clearListeners(): void;
							public getPackStates(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public showCellularDataConfirmation(param0: globalAndroid.app.Activity): com.google.android.play.core.tasks.Task<java.lang.Integer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class k extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.j> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.k>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bb>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.aw>, param3: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.p>, param4: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cp>, param5: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bz>, param6: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.bn>, param7: com.google.android.play.core.internal.cn<java.util.concurrent.Executor>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class l {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.l>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class m {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.m>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export module model {
							export class AssetPackErrorCode {
								public static class: java.lang.Class<com.google.android.play.core.assetpacks.model.AssetPackErrorCode>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.assetpacks.model.AssetPackErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static NETWORK_ERROR: number;
								public static INTERNAL_ERROR: number;
								public static APP_NOT_OWNED: number;
								public static NO_ERROR: number;
								public static APP_UNAVAILABLE: number;
								public static API_NOT_AVAILABLE: number;
								public static ACCESS_DENIED: number;
								public static PACK_UNAVAILABLE: number;
								public static INSUFFICIENT_STORAGE: number;
								public static DOWNLOAD_NOT_FOUND: number;
								public static INVALID_REQUEST: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export module model {
							export class AssetPackStatus {
								public static class: java.lang.Class<com.google.android.play.core.assetpacks.model.AssetPackStatus>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.assetpacks.model.AssetPackStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static DOWNLOADING: number;
								public static UNKNOWN: number;
								public static PENDING: number;
								public static WAITING_FOR_WIFI: number;
								public static NOT_INSTALLED: number;
								public static TRANSFERRING: number;
								public static COMPLETED: number;
								public static FAILED: number;
								public static CANCELED: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export module model {
							export class AssetPackStorageMethod {
								public static class: java.lang.Class<com.google.android.play.core.assetpacks.model.AssetPackStorageMethod>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.assetpacks.model.AssetPackStorageMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static STORAGE_FILES: number;
								public static APK_ASSETS: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export module model {
							export class a {
								public static class: java.lang.Class<com.google.android.play.core.assetpacks.model.a>;
								public static a(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class n {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.n>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class o {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.o>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class p extends com.google.android.play.core.internal.cn<java.util.concurrent.Executor> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.p>;
							public constructor();
							public a(): any;
							public static b(): java.util.concurrent.Executor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class q extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.AssetPackManager> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.q>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.j>, param1: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class r extends com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.w> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.r>;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.ar>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.assetpacks.cz>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class s extends com.google.android.play.core.internal.cn<globalAndroid.content.Context> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.s>;
							public static a(param0: com.google.android.play.core.assetpacks.n): globalAndroid.content.Context;
							public b(): globalAndroid.content.Context;
							public a(): any;
							public constructor(param0: com.google.android.play.core.assetpacks.n);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class t extends com.google.android.play.core.internal.cn<string> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.t>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class u {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.u>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class v extends com.google.android.play.core.internal.cn<java.util.concurrent.Executor> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.v>;
							public constructor();
							public a(): any;
							public static b(): java.util.concurrent.Executor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class w {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.w>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.w interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
								a(param0: java.util.List<string>): void;
								a(param0: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<java.util.List<string>>;
								a(param0: java.util.List<string>, param1: com.google.android.play.core.assetpacks.az, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
								a(param0: number, param1: string, param2: string, param3: number): void;
								a(param0: number, param1: string): void;
								a(param0: number): void;
								b(param0: number, param1: string, param2: string, param3: number): com.google.android.play.core.tasks.Task<globalAndroid.os.ParcelFileDescriptor>;
								a(param0: string): void;
								a(): void;
							});
							public constructor();
							public a(param0: number): void;
							public a(): void;
							public a(param0: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<java.util.List<string>>;
							public a(param0: java.util.List<string>, param1: java.util.List<string>, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public a(param0: java.util.List<string>): void;
							public a(param0: number, param1: string, param2: string, param3: number): void;
							public b(param0: number, param1: string, param2: string, param3: number): com.google.android.play.core.tasks.Task<globalAndroid.os.ParcelFileDescriptor>;
							public a(param0: string): void;
							public a(param0: java.util.List<string>, param1: com.google.android.play.core.assetpacks.az, param2: java.util.Map<string,java.lang.Long>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public a(param0: number, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class x extends com.google.android.play.core.internal.al<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.x>;
							public a(param0: globalAndroid.os.IBinder): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class y extends com.google.android.play.core.internal.al<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.y>;
							public a(param0: globalAndroid.os.IBinder): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module assetpacks {
						export class z extends com.google.android.play.core.tasks.OnSuccessListener<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.z>;
							public onSuccess(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class IntentSenderForResultStarter {
							public static class: java.lang.Class<com.google.android.play.core.common.IntentSenderForResultStarter>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.common.IntentSenderForResultStarter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class LocalTestingException {
							public static class: java.lang.Class<com.google.android.play.core.common.LocalTestingException>;
							public constructor(param0: string);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class PlayCoreDialogWrapperActivity {
							public static class: java.lang.Class<com.google.android.play.core.common.PlayCoreDialogWrapperActivity>;
							public constructor();
							public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public static a(param0: globalAndroid.content.Context): void;
							public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class PlayCoreVersion {
							public static class: java.lang.Class<com.google.android.play.core.common.PlayCoreVersion>;
							public static a(param0: string): java.util.Map<string,java.lang.Integer>;
							public static a(): globalAndroid.os.Bundle;
							public static addVersion(param0: string, param1: string, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class a {
							public static class: java.lang.Class<com.google.android.play.core.common.a>;
							public constructor();
							public a(param0: globalAndroid.os.Bundle): void;
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class b {
							public static class: java.lang.Class<com.google.android.play.core.common.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module common {
						export class c extends com.google.android.play.core.internal.cn<com.google.android.play.core.common.a> {
							public static class: java.lang.Class<com.google.android.play.core.common.c>;
							public constructor();
							public static c(): com.google.android.play.core.common.a;
							public static b(): com.google.android.play.core.common.c;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export class InstallException extends com.google.android.play.core.tasks.j {
							public static class: java.lang.Class<com.google.android.play.core.install.InstallException>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public getErrorCode(): number;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export abstract class InstallState {
							public static class: java.lang.Class<com.google.android.play.core.install.InstallState>;
							public constructor();
							public bytesDownloaded(): number;
							public installStatus(): number;
							public static a(param0: number, param1: number, param2: number, param3: number, param4: string): com.google.android.play.core.install.InstallState;
							public installErrorCode(): number;
							public packageName(): string;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export class InstallStateUpdatedListener extends com.google.android.play.core.listener.StateUpdatedListener<com.google.android.play.core.install.InstallState> {
							public static class: java.lang.Class<com.google.android.play.core.install.InstallStateUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.install.InstallStateUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStateUpdate(param0: any): void;
							});
							public constructor();
							public onStateUpdate(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export class NativeInstallStateUpdateListener extends com.google.android.play.core.install.InstallStateUpdatedListener {
							public static class: java.lang.Class<com.google.android.play.core.install.NativeInstallStateUpdateListener>;
							public onStateUpdate(param0: com.google.android.play.core.install.InstallState): void;
							public onStateUpdate(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export class a extends com.google.android.play.core.install.InstallState {
							public static class: java.lang.Class<com.google.android.play.core.install.a>;
							public bytesDownloaded(): number;
							public hashCode(): number;
							public toString(): string;
							public installStatus(): number;
							public equals(param0: any): boolean;
							public installErrorCode(): number;
							public packageName(): string;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export module model {
							export class ActivityResult {
								public static class: java.lang.Class<com.google.android.play.core.install.model.ActivityResult>;
								public static RESULT_IN_APP_UPDATE_FAILED: number;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export module model {
							export class AppUpdateType {
								public static class: java.lang.Class<com.google.android.play.core.install.model.AppUpdateType>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.install.model.AppUpdateType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static IMMEDIATE: number;
								public static FLEXIBLE: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export module model {
							export class InstallErrorCode {
								public static class: java.lang.Class<com.google.android.play.core.install.model.InstallErrorCode>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.install.model.InstallErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static ERROR_INSTALL_NOT_ALLOWED: number;
								public static ERROR_DOWNLOAD_NOT_PRESENT: number;
								public static NO_ERROR_PARTIALLY_ALLOWED: number;
								public static NO_ERROR: number;
								public static ERROR_UNKNOWN: number;
								public static ERROR_INSTALL_UNAVAILABLE: number;
								public static ERROR_APP_NOT_OWNED: number;
								public static ERROR_PLAY_STORE_NOT_FOUND: number;
								public static ERROR_API_NOT_AVAILABLE: number;
								public static ERROR_INVALID_REQUEST: number;
								public static ERROR_INTERNAL_ERROR: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export module model {
							export class InstallStatus {
								public static class: java.lang.Class<com.google.android.play.core.install.model.InstallStatus>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.install.model.InstallStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static DOWNLOADING: number;
								public static INSTALLED: number;
								public static UNKNOWN: number;
								public static PENDING: number;
								public static REQUIRES_UI_INTENT: number;
								public static DOWNLOADED: number;
								public static INSTALLING: number;
								public static FAILED: number;
								public static CANCELED: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export module model {
							export class UpdateAvailability {
								public static class: java.lang.Class<com.google.android.play.core.install.model.UpdateAvailability>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.install.model.UpdateAvailability interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static UNKNOWN: number;
								public static UPDATE_NOT_AVAILABLE: number;
								public static DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS: number;
								public static UPDATE_AVAILABLE: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module install {
						export module model {
							export class a {
								public static class: java.lang.Class<com.google.android.play.core.install.model.a>;
								public static a(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class a extends com.google.android.play.core.internal.b {
							public static class: java.lang.Class<com.google.android.play.core.internal.a>;
							public a(): number;
							public constructor(param0: java.nio.ByteBuffer);
							public a(param0: androidNative.Array<java.security.MessageDigest>, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class aa extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.ab {
							public static class: java.lang.Class<com.google.android.play.core.internal.aa>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public static a(param0: globalAndroid.os.IBinder): com.google.android.play.core.internal.ab;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.ad): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ab {
							public static class: java.lang.Class<com.google.android.play.core.internal.ab>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.ab interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.ad): void;
							});
							public constructor();
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.ad): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class ac extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.ad {
							public static class: java.lang.Class<com.google.android.play.core.internal.ac>;
							public constructor();
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ad {
							public static class: java.lang.Class<com.google.android.play.core.internal.ad>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.ad interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public a(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ae<StateT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.ae<any>>;
							public constructor();
							public b(param0: com.google.android.play.core.listener.StateUpdatedListener<StateT>): void;
							public a(param0: com.google.android.play.core.listener.StateUpdatedListener<StateT>): void;
							public a(param0: StateT): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class af {
							public static class: java.lang.Class<com.google.android.play.core.internal.af>;
							public d(param0: string, param1: androidNative.Array<any>): void;
							public c(param0: string, param1: androidNative.Array<any>): void;
							public b(param0: string, param1: androidNative.Array<any>): void;
							public constructor(param0: string);
							public a(param0: string, param1: androidNative.Array<any>): void;
							public a(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class ag {
							public static class: java.lang.Class<com.google.android.play.core.internal.ag>;
							public constructor(param0: com.google.android.play.core.tasks.i<any>);
							public a(): void;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ah {
							public static class: java.lang.Class<com.google.android.play.core.internal.ah>;
							public binderDied(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ai extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.internal.ai>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class aj extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.internal.aj>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ak {
							public static class: java.lang.Class<com.google.android.play.core.internal.ak>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.ak interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
							});
							public constructor();
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class al<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.al<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.al<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.os.IBinder): T;
							});
							public constructor();
							public a(param0: globalAndroid.os.IBinder): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class am extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.internal.am>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class an extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.internal.an>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ao {
							public static class: java.lang.Class<com.google.android.play.core.internal.ao>;
							public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
							public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ap<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.ap<any>>;
							public b(): T;
							public a(): void;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.play.core.internal.af, param2: string, param3: globalAndroid.content.Intent, param4: com.google.android.play.core.internal.al<T>);
							public a(param0: com.google.android.play.core.internal.ag): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class aq {
							public static class: java.lang.Class<com.google.android.play.core.internal.aq>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ar {
							public static class: java.lang.Class<com.google.android.play.core.internal.ar>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class as extends com.google.android.play.core.splitinstall.f {
							public static class: java.lang.Class<com.google.android.play.core.internal.as>;
							public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.Executor, param2: com.google.android.play.core.internal.at, param3: com.google.android.play.core.splitcompat.c, param4: com.google.android.play.core.splitcompat.p);
							public a(param0: java.util.List<globalAndroid.content.Intent>, param1: com.google.android.play.core.splitinstall.d): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class at {
							public static class: java.lang.Class<com.google.android.play.core.internal.at>;
							public a(param0: java.util.List<globalAndroid.content.Intent>): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.play.core.splitcompat.c, param2: com.google.android.play.core.internal.av, param3: androidNative.Array<number>);
							public a(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class au {
							public static class: java.lang.Class<com.google.android.play.core.internal.au>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.au interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
								a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							});
							public constructor();
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class av {
							public static class: java.lang.Class<com.google.android.play.core.internal.av>;
							public constructor();
							public static a(): com.google.android.play.core.internal.au;
							public static a(param0: java.io.File): string;
							public static a(param0: any, param1: any): void;
							public static a(param0: boolean, param1: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class aw extends com.google.android.play.core.internal.az {
							public static class: java.lang.Class<com.google.android.play.core.internal.aw>;
							public a(param0: any, param1: java.util.ArrayList<java.io.File>, param2: java.io.File, param3: java.util.ArrayList<java.io.IOException>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ax extends com.google.android.play.core.internal.ay {
							public static class: java.lang.Class<com.google.android.play.core.internal.ax>;
							public a(param0: any, param1: java.io.File, param2: java.io.File): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ay {
							public static class: java.lang.Class<com.google.android.play.core.internal.ay>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.ay interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: any, param1: java.io.File, param2: java.io.File): boolean;
							});
							public constructor();
							public a(param0: any, param1: java.io.File, param2: java.io.File): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class az {
							public static class: java.lang.Class<com.google.android.play.core.internal.az>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.az interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: any, param1: java.util.ArrayList<java.io.File>, param2: java.io.File, param3: java.util.ArrayList<java.io.IOException>): androidNative.Array<any>;
							});
							public constructor();
							public a(param0: any, param1: java.util.ArrayList<java.io.File>, param2: java.io.File, param3: java.util.ArrayList<java.io.IOException>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class b {
							public static class: java.lang.Class<com.google.android.play.core.internal.b>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.b interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): number;
								a(param0: androidNative.Array<java.security.MessageDigest>, param1: number, param2: number): void;
							});
							public constructor();
							public a(): number;
							public a(param0: androidNative.Array<java.security.MessageDigest>, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ba extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.ba>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bb extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bb>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bc extends com.google.android.play.core.internal.az {
							public static class: java.lang.Class<com.google.android.play.core.internal.bc>;
							public a(param0: any, param1: java.util.ArrayList<java.io.File>, param2: java.io.File, param3: java.util.ArrayList<java.io.IOException>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bd extends com.google.android.play.core.internal.be {
							public static class: java.lang.Class<com.google.android.play.core.internal.bd>;
							public a(param0: any, param1: java.util.List<java.io.File>, param2: java.util.List<java.io.IOException>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class be {
							public static class: java.lang.Class<com.google.android.play.core.internal.be>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.be interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: any, param1: java.util.List<java.io.File>, param2: java.util.List<java.io.IOException>): androidNative.Array<any>;
							});
							public constructor();
							public a(param0: any, param1: java.util.List<java.io.File>, param2: java.util.List<java.io.IOException>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bf extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bf>;
							public static a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>, param2: com.google.android.play.core.internal.be): void;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public static b(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bg extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bg>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bh extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bh>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bi extends com.google.android.play.core.internal.be {
							public static class: java.lang.Class<com.google.android.play.core.internal.bi>;
							public a(param0: any, param1: java.util.List<java.io.File>, param2: java.util.List<java.io.IOException>): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bj extends com.google.android.play.core.internal.ay {
							public static class: java.lang.Class<com.google.android.play.core.internal.bj>;
							public a(param0: any, param1: java.io.File, param2: java.io.File): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bk extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bk>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bl extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bl>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bm extends com.google.android.play.core.internal.ay {
							public static class: java.lang.Class<com.google.android.play.core.internal.bm>;
							public a(param0: any, param1: java.io.File, param2: java.io.File): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bn extends com.google.android.play.core.internal.au {
							public static class: java.lang.Class<com.google.android.play.core.internal.bn>;
							public a(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							public a(param0: java.lang.ClassLoader, param1: java.util.Set<java.io.File>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bo {
							public static class: java.lang.Class<com.google.android.play.core.internal.bo>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bp<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.bp<any>>;
							public b(): java.lang.reflect.Field;
							public a(param0: T): void;
							public a(): T;
							public b(param0: java.util.Collection<any>): void;
							public a(param0: java.util.Collection<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bq {
							public static class: java.lang.Class<com.google.android.play.core.internal.bq>;
							public static a(param0: any, param1: string, param2: java.lang.Class<any>, param3: java.lang.Class<any>, param4: any, param5: java.lang.Class<any>, param6: any, param7: java.lang.Class<any>, param8: any): any;
							public static a(param0: any): void;
							public static a(param0: com.google.android.play.core.internal.ca, param1: java.io.InputStream, param2: java.io.OutputStream, param3: number): void;
							public static a(param0: any, param1: java.lang.Class<any>): void;
							public static a(param0: any, param1: string, param2: java.lang.Class<any>): com.google.android.play.core.internal.bp<any>;
							public static b(param0: any, param1: string, param2: java.lang.Class<any>): com.google.android.play.core.internal.bp<any>;
							public static a(param0: any, param1: string, param2: java.lang.Class<any>, param3: java.lang.Class<any>, param4: any): any;
							public static b(param0: any): void;
							public static a(param0: globalAndroid.content.pm.PackageManager, param1: globalAndroid.content.ComponentName, param2: number): void;
							public static a(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: any): any;
							public static a(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: any, param4: java.lang.Class<any>, param5: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class br {
							public static class: java.lang.Class<com.google.android.play.core.internal.br>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bs extends com.google.android.play.core.internal.i implements com.google.android.play.core.internal.bu {
							public static class: java.lang.Class<com.google.android.play.core.internal.bs>;
							public a(param0: string, param1: number, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public d(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: com.google.android.play.core.internal.bw): void;
							public e(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(): globalAndroid.os.Parcel;
							public b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): void;
							public a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: number, param2: com.google.android.play.core.internal.bw): void;
							public c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class bt extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.bu {
							public static class: java.lang.Class<com.google.android.play.core.internal.bt>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: string, param1: number, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public d(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public static a(param0: globalAndroid.os.IBinder): com.google.android.play.core.internal.bu;
							public a(param0: string, param1: com.google.android.play.core.internal.bw): void;
							public e(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: number, param2: com.google.android.play.core.internal.bw): void;
							public c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bu {
							public static class: java.lang.Class<com.google.android.play.core.internal.bu>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.bu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
								a(param0: string, param1: number, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
								a(param0: string, param1: number, param2: com.google.android.play.core.internal.bw): void;
								a(param0: string, param1: com.google.android.play.core.internal.bw): void;
								b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
								c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
								d(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
								e(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							});
							public constructor();
							public a(param0: string, param1: number, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public d(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: com.google.android.play.core.internal.bw): void;
							public e(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
							public a(param0: string, param1: number, param2: com.google.android.play.core.internal.bw): void;
							public c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.bw): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class bv extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.bw {
							public static class: java.lang.Class<com.google.android.play.core.internal.bv>;
							public constructor();
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public constructor(param0: string);
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bw {
							public static class: java.lang.Class<com.google.android.play.core.internal.bw>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.bw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								c(param0: number, param1: globalAndroid.os.Bundle): void;
								a(param0: number, param1: globalAndroid.os.Bundle): void;
								b(param0: number, param1: globalAndroid.os.Bundle): void;
								e(param0: globalAndroid.os.Bundle): void;
								a(param0: java.util.List<globalAndroid.os.Bundle>): void;
								d(param0: globalAndroid.os.Bundle): void;
								a(param0: globalAndroid.os.Bundle): void;
								b(param0: globalAndroid.os.Bundle): void;
								c(param0: globalAndroid.os.Bundle): void;
								a(param0: number): void;
								a(): void;
								b(): void;
							});
							public constructor();
							public c(param0: globalAndroid.os.Bundle): void;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: number): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bx {
							public static class: java.lang.Class<com.google.android.play.core.internal.bx>;
							public a(): java.util.List<string>;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class by {
							public static class: java.lang.Class<com.google.android.play.core.internal.by>;
							public static a(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class bz {
							public static class: java.lang.Class<com.google.android.play.core.internal.bz>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class c extends com.google.android.play.core.internal.b {
							public static class: java.lang.Class<com.google.android.play.core.internal.c>;
							public a(): number;
							public constructor(param0: java.nio.channels.FileChannel, param1: number, param2: number);
							public a(param0: androidNative.Array<java.security.MessageDigest>, param1: number, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class ca {
							public static class: java.lang.Class<com.google.android.play.core.internal.ca>;
							public constructor();
							public a(param0: number, param1: number): java.io.InputStream;
							public b(): java.io.InputStream;
							public a(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cb extends com.google.android.play.core.internal.ca {
							public static class: java.lang.Class<com.google.android.play.core.internal.cb>;
							public constructor();
							public a(param0: number, param1: number): java.io.InputStream;
							public close(): void;
							public a(): number;
							public constructor(param0: com.google.android.play.core.internal.ca, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class cc {
							public static class: java.lang.Class<com.google.android.play.core.internal.cc>;
							public a(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cd extends java.lang.ref.WeakReference<java.lang.Throwable> {
							public static class: java.lang.Class<com.google.android.play.core.internal.cd>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: java.lang.Throwable, param1: java.lang.ref.ReferenceQueue<java.lang.Throwable>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ce {
							public static class: java.lang.Class<com.google.android.play.core.internal.ce>;
							public a(param0: java.lang.Throwable): java.util.List<java.lang.Throwable>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cf extends com.google.android.play.core.internal.cc {
							public static class: java.lang.Class<com.google.android.play.core.internal.cf>;
							public a(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cg extends com.google.android.play.core.internal.cc {
							public static class: java.lang.Class<com.google.android.play.core.internal.cg>;
							public a(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ch extends com.google.android.play.core.internal.cc {
							public static class: java.lang.Class<com.google.android.play.core.internal.ch>;
							public a(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ci {
							public static class: java.lang.Class<com.google.android.play.core.internal.ci>;
							public static a(param0: java.lang.Throwable, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cj<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.cj<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.cj<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): T;
							});
							public constructor();
							public a(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class ck<T>  extends com.google.android.play.core.internal.cn<any> {
							public static class: java.lang.Class<com.google.android.play.core.internal.ck<any>>;
							public constructor();
							public a(): any;
							public static a(param0: com.google.android.play.core.internal.cn<any>, param1: com.google.android.play.core.internal.cn<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cl<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.cl<any>>;
							public static a(param0: com.google.android.play.core.internal.cn<any>): com.google.android.play.core.internal.cn<any>;
							public static b(param0: com.google.android.play.core.internal.cn<any>): com.google.android.play.core.internal.cj<any>;
							public a(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cm {
							public static class: java.lang.Class<com.google.android.play.core.internal.cm>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class cn<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.internal.cn<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.cn<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): T;
							});
							public constructor();
							public a(): T;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class d {
							public static class: java.lang.Class<com.google.android.play.core.internal.d>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class e {
							public static class: java.lang.Class<com.google.android.play.core.internal.e>;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class f extends com.google.android.play.core.internal.g {
							public static class: java.lang.Class<com.google.android.play.core.internal.f>;
							public constructor(param0: java.security.cert.X509Certificate, param1: androidNative.Array<number>);
							public getEncoded(): androidNative.Array<number>;
							public constructor(param0: java.security.cert.X509Certificate);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class g {
							public static class: java.lang.Class<com.google.android.play.core.internal.g>;
							public getVersion(): number;
							public getBasicConstraints(): number;
							public getNonCriticalExtensionOIDs(): java.util.Set<string>;
							public getNotBefore(): java.util.Date;
							public toString(): string;
							public checkValidity(): void;
							public getSubjectDN(): java.security.Principal;
							public getCriticalExtensionOIDs(): java.util.Set<string>;
							public getSigAlgOID(): string;
							public getSerialNumber(): java.math.BigInteger;
							public getExtensionValue(param0: string): androidNative.Array<number>;
							public getSigAlgParams(): androidNative.Array<number>;
							public verify(param0: java.security.PublicKey, param1: string): void;
							public constructor(param0: java.security.cert.X509Certificate);
							public getIssuerDN(): java.security.Principal;
							public getTBSCertificate(): androidNative.Array<number>;
							public getIssuerUniqueID(): androidNative.Array<boolean>;
							public getSubjectUniqueID(): androidNative.Array<boolean>;
							public checkValidity(param0: java.util.Date): void;
							public getEncoded(): androidNative.Array<number>;
							public verify(param0: java.security.PublicKey): void;
							public getKeyUsage(): androidNative.Array<boolean>;
							public getPublicKey(): java.security.PublicKey;
							public hasUnsupportedCriticalExtension(): boolean;
							public getSignature(): androidNative.Array<number>;
							public getSigAlgName(): string;
							public getNotAfter(): java.util.Date;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class h {
							public static class: java.lang.Class<com.google.android.play.core.internal.h>;
							public static a(param0: string, param1: string): string;
							public static a(param0: java.nio.ByteBuffer): number;
							public static b(param0: java.nio.ByteBuffer): number;
							public static a(param0: string, param1: string, param2: string): string;
							public static a(param0: string): androidNative.Array<androidNative.Array<java.security.cert.X509Certificate>>;
							public static a(param0: java.nio.ByteBuffer, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class i {
							public static class: java.lang.Class<com.google.android.play.core.internal.i>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
							public a(): globalAndroid.os.Parcel;
							public a(param0: number, param1: globalAndroid.os.Parcel): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class j {
							public static class: java.lang.Class<com.google.android.play.core.internal.j>;
							public asBinder(): globalAndroid.os.IBinder;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public constructor(param0: string);
							public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class k {
							public static class: java.lang.Class<com.google.android.play.core.internal.k>;
							public static a(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.IInterface): void;
							public static a(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable.Creator<any>): globalAndroid.os.Parcelable;
							public static a(param0: globalAndroid.os.Parcel, param1: globalAndroid.os.Parcelable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class l extends com.google.android.play.core.internal.i implements com.google.android.play.core.internal.n {
							public static class: java.lang.Class<com.google.android.play.core.internal.l>;
							public a(): globalAndroid.os.Parcel;
							public a(param0: number, param1: globalAndroid.os.Parcel): void;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class m extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.n {
							public static class: java.lang.Class<com.google.android.play.core.internal.m>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public static a(param0: globalAndroid.os.IBinder): com.google.android.play.core.internal.n;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class n {
							public static class: java.lang.Class<com.google.android.play.core.internal.n>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.n interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
								b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
							});
							public constructor();
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.p): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class o extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.p {
							public static class: java.lang.Class<com.google.android.play.core.internal.o>;
							public constructor();
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public constructor(param0: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class p {
							public static class: java.lang.Class<com.google.android.play.core.internal.p>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.p interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.os.Bundle): void;
								b(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class q extends com.google.android.play.core.internal.i implements com.google.android.play.core.internal.s {
							public static class: java.lang.Class<com.google.android.play.core.internal.q>;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public d(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(): globalAndroid.os.Parcel;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
							public e(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public c(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
							public c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class r extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.s {
							public static class: java.lang.Class<com.google.android.play.core.internal.r>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public d(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
							public e(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public static a(param0: globalAndroid.os.IBinder): com.google.android.play.core.internal.s;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public c(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
							public c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class s {
							public static class: java.lang.Class<com.google.android.play.core.internal.s>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.s interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
								a(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								b(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								c(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
								d(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
								e(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							});
							public constructor();
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public d(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
							public e(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public c(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
							public b(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.u): void;
							public c(param0: string, param1: java.util.List<globalAndroid.os.Bundle>, param2: globalAndroid.os.Bundle, param3: com.google.android.play.core.internal.u): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class t extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.u {
							public static class: java.lang.Class<com.google.android.play.core.internal.t>;
							public constructor();
							public a(param0: number): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public constructor(param0: string);
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class u {
							public static class: java.lang.Class<com.google.android.play.core.internal.u>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.u interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: number, param1: globalAndroid.os.Bundle): void;
								a(param0: java.util.List<globalAndroid.os.Bundle>): void;
								a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								a(param0: globalAndroid.os.Bundle): void;
								a(param0: number): void;
								a(): void;
								b(param0: number): void;
								b(param0: globalAndroid.os.Bundle): void;
								c(param0: globalAndroid.os.Bundle): void;
								d(param0: globalAndroid.os.Bundle): void;
								b(): void;
							});
							public constructor();
							public a(param0: number): void;
							public c(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public b(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export abstract class v extends com.google.android.play.core.internal.j implements com.google.android.play.core.internal.w {
							public static class: java.lang.Class<com.google.android.play.core.internal.v>;
							public constructor();
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.internal.y): void;
							public constructor(param0: string);
							public a(param0: com.google.android.play.core.internal.y): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class w {
							public static class: java.lang.Class<com.google.android.play.core.internal.w>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.w interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.internal.y): void;
								a(param0: com.google.android.play.core.internal.y): void;
							});
							public constructor();
							public a(param0: globalAndroid.os.Bundle, param1: com.google.android.play.core.internal.y): void;
							public a(param0: com.google.android.play.core.internal.y): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class x extends com.google.android.play.core.internal.i implements com.google.android.play.core.internal.y {
							public static class: java.lang.Class<com.google.android.play.core.internal.x>;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public a(): globalAndroid.os.Parcel;
							public a(param0: number, param1: globalAndroid.os.Parcel): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class y {
							public static class: java.lang.Class<com.google.android.play.core.internal.y>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.y interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								a(param0: globalAndroid.os.Bundle): void;
								b(param0: globalAndroid.os.Bundle): void;
							});
							public constructor();
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module internal {
						export class z extends com.google.android.play.core.internal.i implements com.google.android.play.core.internal.ab {
							public static class: java.lang.Class<com.google.android.play.core.internal.z>;
							public a(param0: string, param1: globalAndroid.os.Bundle, param2: com.google.android.play.core.internal.ad): void;
							public a(): globalAndroid.os.Parcel;
							public a(param0: number, param1: globalAndroid.os.Parcel): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module listener {
						export class StateUpdatedListener<StateT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.listener.StateUpdatedListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.listener.StateUpdatedListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStateUpdate(param0: StateT): void;
							});
							public constructor();
							public onStateUpdate(param0: StateT): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module listener {
						export class a {
							public static class: java.lang.Class<com.google.android.play.core.listener.a>;
							public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module listener {
						export abstract class b<StateT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.listener.b<any>>;
							public constructor(param0: com.google.android.play.core.internal.af, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
							public a(): void;
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public b(param0: com.google.android.play.core.listener.StateUpdatedListener<StateT>): void;
							public a(param0: com.google.android.play.core.listener.StateUpdatedListener<StateT>): void;
							public a(param0: StateT): void;
							public b(): boolean;
							public a(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module missingsplits {
						export class MissingSplitsDetectingApplication {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.MissingSplitsDetectingApplication>;
							public constructor();
							public onCreate(): void;
							public onCreateCustom(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module missingsplits {
						export class MissingSplitsManager {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.MissingSplitsManager>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.missingsplits.MissingSplitsManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								disableAppIfMissingRequiredSplits(): boolean;
								isMissingRequiredSplits(): boolean;
							});
							public constructor();
							public disableAppIfMissingRequiredSplits(): boolean;
							public isMissingRequiredSplits(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module missingsplits {
						export class MissingSplitsManagerFactory {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.MissingSplitsManagerFactory>;
							public constructor();
							public static create(param0: globalAndroid.content.Context): com.google.android.play.core.missingsplits.MissingSplitsManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module missingsplits {
						export class PlayCoreMissingSplitsActivity {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.PlayCoreMissingSplitsActivity>;
							public constructor();
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onClick(param0: globalAndroid.content.DialogInterface, param1: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module missingsplits {
						export class a {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module missingsplits {
						export class b extends com.google.android.play.core.missingsplits.MissingSplitsManager {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.b>;
							public disableAppIfMissingRequiredSplits(): boolean;
							public isMissingRequiredSplits(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export abstract class ReviewInfo {
							public static class: java.lang.Class<com.google.android.play.core.review.ReviewInfo>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public static a(param0: globalAndroid.app.PendingIntent): com.google.android.play.core.review.ReviewInfo;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class ReviewManager {
							public static class: java.lang.Class<com.google.android.play.core.review.ReviewManager>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.review.ReviewManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								requestReviewFlow(): com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
								launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.play.core.tasks.Task<java.lang.Void>;
							});
							public constructor();
							public launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public requestReviewFlow(): com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class ReviewManagerFactory {
							public static class: java.lang.Class<com.google.android.play.core.review.ReviewManagerFactory>;
							public static create(param0: globalAndroid.content.Context): com.google.android.play.core.review.ReviewManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class a extends com.google.android.play.core.review.ReviewInfo {
							public static class: java.lang.Class<com.google.android.play.core.review.a>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class b {
							public static class: java.lang.Class<com.google.android.play.core.review.b>;
							public onReceiveResult(param0: number, param1: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class c extends com.google.android.play.core.review.ReviewManager {
							public static class: java.lang.Class<com.google.android.play.core.review.c>;
							public launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public requestReviewFlow(): com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class d extends com.google.android.play.core.internal.al<any> {
							public static class: java.lang.Class<com.google.android.play.core.review.d>;
							public a(param0: globalAndroid.os.IBinder): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class e extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.review.e>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class f<T>  extends com.google.android.play.core.internal.ac {
							public static class: java.lang.Class<com.google.android.play.core.review.f<any>>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class g extends com.google.android.play.core.review.f<com.google.android.play.core.review.ReviewInfo> {
							public static class: java.lang.Class<com.google.android.play.core.review.g>;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public a(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class h {
							public static class: java.lang.Class<com.google.android.play.core.review.h>;
							public constructor(param0: globalAndroid.content.Context);
							public a(): com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export module testing {
							export class FakeReviewManager extends com.google.android.play.core.review.ReviewManager {
								public static class: java.lang.Class<com.google.android.play.core.review.testing.FakeReviewManager>;
								public requestReviewFlow(): com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
								public launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export module testing {
							export class a extends com.google.android.play.core.tasks.j {
								public static class: java.lang.Class<com.google.android.play.core.review.testing.a>;
								public getErrorCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class SplitCompat {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.SplitCompat>;
							public static a(): boolean;
							public static install(param0: globalAndroid.content.Context): boolean;
							public static a(param0: globalAndroid.content.Context): boolean;
							public static installActivity(param0: globalAndroid.content.Context): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class SplitCompatApplication {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.SplitCompatApplication>;
							public constructor();
							public attachBaseContext(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class a {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class b {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.b>;
							public newThread(param0: java.lang.Runnable): java.lang.Thread;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class c {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.c>;
							public a(param0: java.io.File): java.io.File;
							public static c(param0: java.io.File): void;
							public b(): java.io.File;
							public a(): void;
							public a(param0: string, param1: string): java.io.File;
							public a(param0: string): java.io.File;
							public b(param0: string): java.io.File;
							public c(param0: string): java.io.File;
							public c(): java.io.File;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class d extends com.google.android.play.core.splitcompat.i {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.d>;
							public a(param0: com.google.android.play.core.splitcompat.j, param1: java.io.File, param2: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class e extends com.google.android.play.core.splitcompat.h {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.e>;
							public a(param0: java.util.zip.ZipFile, param1: java.util.Set<com.google.android.play.core.splitcompat.j>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class f extends com.google.android.play.core.splitcompat.h {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.f>;
							public a(param0: java.util.zip.ZipFile, param1: java.util.Set<com.google.android.play.core.splitcompat.j>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class g extends com.google.android.play.core.splitcompat.i {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.g>;
							public a(param0: com.google.android.play.core.splitcompat.j, param1: java.io.File, param2: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class h {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.h>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitcompat.h interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: java.util.zip.ZipFile, param1: java.util.Set<com.google.android.play.core.splitcompat.j>): void;
							});
							public constructor();
							public a(param0: java.util.zip.ZipFile, param1: java.util.Set<com.google.android.play.core.splitcompat.j>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class i {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.i>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitcompat.i interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: com.google.android.play.core.splitcompat.j, param1: java.io.File, param2: boolean): void;
							});
							public constructor();
							public a(param0: com.google.android.play.core.splitcompat.j, param1: java.io.File, param2: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class j {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.j>;
							public a: string;
							public b: java.util.zip.ZipEntry;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class k {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.k>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class l extends com.google.android.play.core.splitinstall.n {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.l>;
							public a(): java.util.Set<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class m {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.m>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class n {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.n>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class o {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.o>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class p {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.p>;
							public constructor();
							public static a(): java.util.concurrent.Executor;
							public static a(param0: globalAndroid.content.Context): globalAndroid.content.Context;
							public static a(param0: androidNative.Array<number>): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitcompat {
						export class q {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.q>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class SplitInstallException extends com.google.android.play.core.tasks.j {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallException>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public getErrorCode(): number;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class SplitInstallHelper {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallHelper>;
							public static updateAppInfo(param0: globalAndroid.content.Context): void;
							public static loadLibrary(param0: globalAndroid.content.Context, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class SplitInstallManager {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallManager>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.SplitInstallManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
								startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
								cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
								getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
								getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
								deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								getInstalledLanguages(): java.util.Set<string>;
								getInstalledModules(): java.util.Set<string>;
							});
							public constructor();
							public getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
							public getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
							public deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public getInstalledModules(): java.util.Set<string>;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
							public getInstalledLanguages(): java.util.Set<string>;
							public cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class SplitInstallManagerFactory {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallManagerFactory>;
							public constructor();
							public static create(param0: globalAndroid.content.Context): com.google.android.play.core.splitinstall.SplitInstallManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class SplitInstallRequest {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallRequest>;
							public static newBuilder(): com.google.android.play.core.splitinstall.SplitInstallRequest.Builder;
							public getLanguages(): java.util.List<java.util.Locale>;
							public toString(): string;
							public getModuleNames(): java.util.List<string>;
						}
						export module SplitInstallRequest {
							export class Builder {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallRequest.Builder>;
								public addModule(param0: string): com.google.android.play.core.splitinstall.SplitInstallRequest.Builder;
								public build(): com.google.android.play.core.splitinstall.SplitInstallRequest;
								public addLanguage(param0: java.util.Locale): com.google.android.play.core.splitinstall.SplitInstallRequest.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export abstract class SplitInstallSessionState {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
							public constructor();
							public bytesDownloaded(): number;
							public resolutionIntent(): globalAndroid.app.PendingIntent;
							public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: java.util.List<string>, param6: java.util.List<string>): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							public moduleNames(): java.util.List<string>;
							public static a(param0: globalAndroid.os.Bundle): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							public hasTerminalStatus(): boolean;
							public sessionId(): number;
							public status(): number;
							public errorCode(): number;
							public languages(): java.util.List<string>;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class SplitInstallStateUpdatedListener extends com.google.android.play.core.listener.StateUpdatedListener<com.google.android.play.core.splitinstall.SplitInstallSessionState> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onStateUpdate(param0: any): void;
							});
							public constructor();
							public onStateUpdate(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class a extends com.google.android.play.core.splitinstall.SplitInstallSessionState {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.a>;
							public bytesDownloaded(): number;
							public resolutionIntent(): globalAndroid.app.PendingIntent;
							public hashCode(): number;
							public sessionId(): number;
							public status(): number;
							public errorCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
							public totalBytesToDownload(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class aa extends com.google.android.play.core.internal.cn<java.io.File> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.aa>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ab extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.t> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ab>;
							public constructor(param0: com.google.android.play.core.splitinstall.y);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ac extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.SplitInstallManager> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ac>;
							public constructor(param0: com.google.android.play.core.splitinstall.y, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.i>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ad extends com.google.android.play.core.internal.al<any> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ad>;
							public a(param0: globalAndroid.os.IBinder): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ae extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ae>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class af extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.af>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ag extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ag>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ah extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ah>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ai extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ai>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class aj extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.aj>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ak extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ak>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class al extends com.google.android.play.core.internal.ag {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.al>;
							public a(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class am extends com.google.android.play.core.splitinstall.au<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.am>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class an extends com.google.android.play.core.splitinstall.au<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.an>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ao extends com.google.android.play.core.splitinstall.au<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ao>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ap extends com.google.android.play.core.splitinstall.au<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ap>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class aq extends com.google.android.play.core.splitinstall.au<java.lang.Void> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.aq>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ar extends com.google.android.play.core.splitinstall.au<com.google.android.play.core.splitinstall.SplitInstallSessionState> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ar>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class as extends com.google.android.play.core.splitinstall.au<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.as>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class at extends com.google.android.play.core.splitinstall.au<java.lang.Integer> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.at>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class au<T>  extends com.google.android.play.core.internal.bv {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.au<any>>;
							public a(param0: number): void;
							public a(): void;
							public a(param0: number, param1: globalAndroid.os.Bundle): void;
							public c(param0: globalAndroid.os.Bundle): void;
							public a(param0: number, param1: globalAndroid.os.Parcel): boolean;
							public b(param0: number, param1: globalAndroid.os.Bundle): void;
							public d(param0: globalAndroid.os.Bundle): void;
							public a(param0: globalAndroid.os.Bundle): void;
							public b(param0: globalAndroid.os.Bundle): void;
							public b(): void;
							public c(param0: number, param1: globalAndroid.os.Bundle): void;
							public a(param0: java.util.List<globalAndroid.os.Bundle>): void;
							public e(param0: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class av {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.av>;
							public a(param0: java.util.Collection<string>, param1: java.util.Collection<string>): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public c(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public b(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public b(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public a(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public a(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
							public a(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
							public constructor(param0: globalAndroid.content.Context);
							public d(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class aw extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.av> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.aw>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ax {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ax>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class ay extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.ax> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.ay>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class az {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.az>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class b {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.b>;
							public a(): com.google.android.play.core.splitinstall.m;
							public a(param0: com.google.android.play.core.splitinstall.y): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class c extends com.google.android.play.core.splitinstall.m {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.c>;
							public b(): java.io.File;
							public a(): com.google.android.play.core.splitinstall.SplitInstallManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class d {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.d>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): void;
								b(): void;
								a(param0: number): void;
							});
							public constructor();
							public a(param0: number): void;
							public a(): void;
							public b(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class e {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.e>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.e interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): com.google.android.play.core.splitinstall.f;
							});
							public constructor();
							public a(): com.google.android.play.core.splitinstall.f;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class f {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.f>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.f interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: java.util.List<globalAndroid.content.Intent>, param1: com.google.android.play.core.splitinstall.d): void;
							});
							public constructor();
							public a(param0: java.util.List<globalAndroid.content.Intent>, param1: com.google.android.play.core.splitinstall.d): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class g {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.g>;
							public constructor();
							public a(): com.google.android.play.core.splitinstall.h;
							public a(param0: string, param1: string, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class h {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.h>;
							public a(param0: java.util.Collection<string>): java.util.Map<string,java.util.Set<string>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class i extends com.google.android.play.core.splitinstall.SplitInstallManager {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.i>;
							public getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
							public getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
							public deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public getInstalledModules(): java.util.Set<string>;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
							public getInstalledLanguages(): java.util.Set<string>;
							public cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class j extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.i> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.j>;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.w>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager>, param2: com.google.android.play.core.internal.cn<java.io.File>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class k {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.k>;
							public static a(param0: globalAndroid.content.Context): com.google.android.play.core.splitinstall.m;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class l extends com.google.android.play.core.splitinstall.e {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.l>;
							public a(): com.google.android.play.core.splitinstall.f;
							public a(param0: com.google.android.play.core.splitinstall.f): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class m {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.m>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.m interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): com.google.android.play.core.splitinstall.SplitInstallManager;
								b(): java.io.File;
							});
							public constructor();
							public b(): java.io.File;
							public a(): com.google.android.play.core.splitinstall.SplitInstallManager;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module model {
							export class SplitInstallErrorCode {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.model.SplitInstallErrorCode>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.splitinstall.model.SplitInstallErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static PLAY_STORE_NOT_FOUND: number;
								public static INTERNAL_ERROR: number;
								public static SPLITCOMPAT_COPY_ERROR: number;
								public static SESSION_NOT_FOUND: number;
								public static API_NOT_AVAILABLE: number;
								public static ACTIVE_SESSIONS_LIMIT_EXCEEDED: number;
								public static INSUFFICIENT_STORAGE: number;
								public static SPLITCOMPAT_VERIFICATION_ERROR: number;
								public static MODULE_UNAVAILABLE: number;
								public static NETWORK_ERROR: number;
								public static INCOMPATIBLE_WITH_EXISTING_SESSION: number;
								public static APP_NOT_OWNED: number;
								public static NO_ERROR: number;
								public static SPLITCOMPAT_EMULATION_ERROR: number;
								public static SERVICE_DIED: number;
								public static ACCESS_DENIED: number;
								public static INVALID_REQUEST: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module model {
							export class SplitInstallSessionStatus {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.model.SplitInstallSessionStatus>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.splitinstall.model.SplitInstallSessionStatus interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static DOWNLOADING: number;
								public static INSTALLED: number;
								public static CANCELING: number;
								public static UNKNOWN: number;
								public static PENDING: number;
								public static REQUIRES_USER_CONFIRMATION: number;
								public static DOWNLOADED: number;
								public static INSTALLING: number;
								public static FAILED: number;
								public static CANCELED: number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module model {
							export class a {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.model.a>;
								public static a(param0: number): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class n {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.n>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.n interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(): java.util.Set<string>;
							});
							public constructor();
							public a(): java.util.Set<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class o {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.o>;
							public static a(param0: com.google.android.play.core.splitinstall.n): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class p {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.p>;
							public a(): java.util.Set<string>;
							public c(): com.google.android.play.core.splitinstall.h;
							public static b(param0: string): boolean;
							public static a(param0: string): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public constructor(param0: globalAndroid.content.Context, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class q extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.p> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.q>;
							public static a(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>): com.google.android.play.core.splitinstall.q;
							public a(): any;
							public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class r extends com.google.android.play.core.splitinstall.d {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.r>;
							public a(param0: number): void;
							public a(): void;
							public b(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class s {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.s>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class t extends com.google.android.play.core.listener.b<com.google.android.play.core.splitinstall.SplitInstallSessionState> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.t>;
							public a(param0: any): void;
							public constructor(param0: globalAndroid.content.Context, param1: com.google.android.play.core.splitinstall.e);
							public constructor(param0: com.google.android.play.core.internal.af, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
							public a(param0: com.google.android.play.core.listener.StateUpdatedListener<any>): void;
							public a(): void;
							public a(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							public static a(param0: globalAndroid.content.Context): com.google.android.play.core.splitinstall.t;
							public a(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class FakeSplitInstallManager extends com.google.android.play.core.splitinstall.SplitInstallManager {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager>;
								public unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								public deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
								public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
								public registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								public getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
								public getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
								public deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public setShouldNetworkError(param0: boolean): void;
								public getInstalledLanguages(): java.util.Set<string>;
								public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
								public cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								public deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public getInstalledModules(): java.util.Set<string>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class FakeSplitInstallManagerFactory {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.FakeSplitInstallManagerFactory>;
								public static createNewInstance(param0: globalAndroid.content.Context, param1: java.io.File): com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager;
								public static create(param0: globalAndroid.content.Context, param1: java.io.File): com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager;
								public static create(param0: globalAndroid.content.Context): com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class a {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.a>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class b extends com.google.android.play.core.splitinstall.testing.j {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.b>;
								public a(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class c {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.c>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class d extends com.google.android.play.core.splitinstall.testing.j {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.d>;
								public a(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class e extends com.google.android.play.core.splitinstall.testing.j {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.e>;
								public a(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class f {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.f>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class g {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.g>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class h {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.h>;
								public run(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class i extends com.google.android.play.core.splitinstall.d {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.i>;
								public a(): void;
								public b(): void;
								public a(param0: number): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class j {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.j>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.splitinstall.testing.j interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									a(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): com.google.android.play.core.splitinstall.SplitInstallSessionState;
								});
								public constructor();
								public a(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export module testing {
							export class k extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager> {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.k>;
								public a(): any;
								public constructor(param0: com.google.android.play.core.internal.cn<globalAndroid.content.Context>, param1: com.google.android.play.core.internal.cn<java.io.File>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.p>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class u {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.u>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class v extends com.google.android.play.core.common.IntentSenderForResultStarter {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.v>;
							public startIntentSenderForResult(param0: globalAndroid.content.IntentSender, param1: number, param2: globalAndroid.content.Intent, param3: number, param4: number, param5: number, param6: globalAndroid.os.Bundle): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class w extends com.google.android.play.core.splitinstall.SplitInstallManager {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.w>;
							public getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
							public getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
							public deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public getInstalledModules(): java.util.Set<string>;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
							public getInstalledLanguages(): java.util.Set<string>;
							public cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class x extends com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.w> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.x>;
							public constructor(param0: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.av>, param1: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.t>, param2: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.p>, param3: com.google.android.play.core.internal.cn<com.google.android.play.core.splitinstall.ax>);
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class y {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.y>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module splitinstall {
						export class z extends com.google.android.play.core.internal.cn<globalAndroid.content.Context> {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.z>;
							public constructor(param0: com.google.android.play.core.splitinstall.y);
							public b(): globalAndroid.content.Context;
							public a(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class NativeOnCompleteListener extends com.google.android.play.core.tasks.OnCompleteListener<any> {
							public static class: java.lang.Class<com.google.android.play.core.tasks.NativeOnCompleteListener>;
							public nativeOnComplete(param0: number, param1: number, param2: any, param3: number): void;
							public constructor(param0: number, param1: number);
							public onComplete(param0: com.google.android.play.core.tasks.Task<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class OnCompleteListener<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.tasks.OnCompleteListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onComplete(param0: com.google.android.play.core.tasks.Task<ResultT>): void;
							});
							public constructor();
							public onComplete(param0: com.google.android.play.core.tasks.Task<ResultT>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class OnFailureListener {
							public static class: java.lang.Class<com.google.android.play.core.tasks.OnFailureListener>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFailure(param0: java.lang.Exception): void;
							});
							public constructor();
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class OnSuccessListener<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.tasks.OnSuccessListener<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: ResultT): void;
							});
							public constructor();
							public onSuccess(param0: ResultT): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class RuntimeExecutionException extends com.google.android.play.core.tasks.j {
							public static class: java.lang.Class<com.google.android.play.core.tasks.RuntimeExecutionException>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public getErrorCode(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export abstract class Task<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.tasks.Task<any>>;
							public constructor();
							public getResult(): ResultT;
							public isComplete(): boolean;
							public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnSuccessListener<any>): com.google.android.play.core.tasks.Task<ResultT>;
							public isSuccessful(): boolean;
							public getResult(param0: java.lang.Class<any>): any;
							public addOnFailureListener(param0: com.google.android.play.core.tasks.OnFailureListener): com.google.android.play.core.tasks.Task<ResultT>;
							public addOnSuccessListener(param0: com.google.android.play.core.tasks.OnSuccessListener<any>): com.google.android.play.core.tasks.Task<ResultT>;
							public addOnCompleteListener(param0: com.google.android.play.core.tasks.OnCompleteListener<ResultT>): com.google.android.play.core.tasks.Task<ResultT>;
							public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnFailureListener): com.google.android.play.core.tasks.Task<ResultT>;
							public getException(): java.lang.Exception;
							public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnCompleteListener<ResultT>): com.google.android.play.core.tasks.Task<ResultT>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class TaskExecutors {
							public static class: java.lang.Class<com.google.android.play.core.tasks.TaskExecutors>;
							public static MAIN_THREAD: java.util.concurrent.Executor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class Tasks {
							public static class: java.lang.Class<com.google.android.play.core.tasks.Tasks>;
							public static a(param0: java.lang.Exception): com.google.android.play.core.tasks.Task<any>;
							public static await(param0: com.google.android.play.core.tasks.Task<any>): any;
							public static a(param0: any): com.google.android.play.core.tasks.Task<any>;
							public static await(param0: com.google.android.play.core.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class a {
							public static class: java.lang.Class<com.google.android.play.core.tasks.a>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class b<ResultT>  extends com.google.android.play.core.tasks.g<any> {
							public static class: java.lang.Class<com.google.android.play.core.tasks.b<any>>;
							public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnCompleteListener<any>);
							public a(param0: com.google.android.play.core.tasks.Task<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class c {
							public static class: java.lang.Class<com.google.android.play.core.tasks.c>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class d<ResultT>  extends com.google.android.play.core.tasks.g<any> {
							public static class: java.lang.Class<com.google.android.play.core.tasks.d<any>>;
							public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnFailureListener);
							public a(param0: com.google.android.play.core.tasks.Task<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class e {
							public static class: java.lang.Class<com.google.android.play.core.tasks.e>;
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class f<ResultT>  extends com.google.android.play.core.tasks.g<any> {
							public static class: java.lang.Class<com.google.android.play.core.tasks.f<any>>;
							public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnSuccessListener<any>);
							public a(param0: com.google.android.play.core.tasks.Task<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class g<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.tasks.g<any>>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.tasks.g<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: com.google.android.play.core.tasks.Task<ResultT>): void;
							});
							public constructor();
							public a(param0: com.google.android.play.core.tasks.Task<ResultT>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class h<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.tasks.h<any>>;
							public a(param0: com.google.android.play.core.tasks.g<ResultT>): void;
							public a(param0: com.google.android.play.core.tasks.Task<ResultT>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class i<ResultT>  extends java.lang.Object {
							public static class: java.lang.Class<com.google.android.play.core.tasks.i<any>>;
							public constructor();
							public a(param0: java.lang.Exception): void;
							public a(): com.google.android.play.core.tasks.Task<ResultT>;
							public b(param0: ResultT): void;
							public b(param0: java.lang.Exception): void;
							public a(param0: ResultT): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export abstract class j {
							public static class: java.lang.Class<com.google.android.play.core.tasks.j>;
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public getErrorCode(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class k {
							public static class: java.lang.Class<com.google.android.play.core.tasks.k>;
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class l {
							public static class: java.lang.Class<com.google.android.play.core.tasks.l>;
							public constructor();
							public execute(param0: java.lang.Runnable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class m<ResultT>  extends com.google.android.play.core.tasks.Task<any> {
							public static class: java.lang.Class<com.google.android.play.core.tasks.m<any>>;
							public addOnCompleteListener(param0: com.google.android.play.core.tasks.OnCompleteListener<any>): com.google.android.play.core.tasks.Task<any>;
							public a(param0: any): void;
							public addOnSuccessListener(param0: com.google.android.play.core.tasks.OnSuccessListener<any>): com.google.android.play.core.tasks.Task<any>;
							public isSuccessful(): boolean;
							public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnCompleteListener<any>): com.google.android.play.core.tasks.Task<any>;
							public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnSuccessListener<any>): com.google.android.play.core.tasks.Task<any>;
							public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnFailureListener): com.google.android.play.core.tasks.Task<any>;
							public b(param0: any): boolean;
							public getException(): java.lang.Exception;
							public isComplete(): boolean;
							public a(param0: java.lang.Exception): void;
							public b(param0: java.lang.Exception): boolean;
							public addOnFailureListener(param0: com.google.android.play.core.tasks.OnFailureListener): com.google.android.play.core.tasks.Task<any>;
							public getResult(param0: java.lang.Class<any>): any;
							public getResult(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module tasks {
						export class n implements com.google.android.play.core.tasks.OnSuccessListener<any>, com.google.android.play.core.tasks.OnFailureListener {
							public static class: java.lang.Class<com.google.android.play.core.tasks.n>;
							public a(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public a(): void;
							public onSuccess(param0: any): void;
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.play.core.appupdate.m:1
//com.google.android.play.core.assetpacks.ak:1
//com.google.android.play.core.assetpacks.co:1
//com.google.android.play.core.internal.ae:1
//com.google.android.play.core.internal.al:1
//com.google.android.play.core.internal.ap:1
//com.google.android.play.core.internal.bp:1
//com.google.android.play.core.internal.cj:1
//com.google.android.play.core.internal.ck:1
//com.google.android.play.core.internal.cl:1
//com.google.android.play.core.internal.cn:1
//com.google.android.play.core.listener.StateUpdatedListener:1
//com.google.android.play.core.listener.b:1
//com.google.android.play.core.review.f:1
//com.google.android.play.core.splitinstall.au:1
//com.google.android.play.core.tasks.OnCompleteListener:1
//com.google.android.play.core.tasks.OnSuccessListener:1
//com.google.android.play.core.tasks.Task:1
//com.google.android.play.core.tasks.b:1
//com.google.android.play.core.tasks.d:1
//com.google.android.play.core.tasks.f:1
//com.google.android.play.core.tasks.g:1
//com.google.android.play.core.tasks.h:1
//com.google.android.play.core.tasks.i:1
//com.google.android.play.core.tasks.m:1

