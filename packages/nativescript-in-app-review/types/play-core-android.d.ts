declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module appupdate {
						export class AppUpdateInfo {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateInfo>;
							public bytesDownloaded(): number;
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
								completeUpdate(): com.google.android.play.core.tasks.Task<java.lang.Void>;
								getAppUpdateInfo(): com.google.android.play.core.tasks.Task<com.google.android.play.core.appupdate.AppUpdateInfo>;
								startUpdateFlow(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								registerListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
								unregisterListener(param0: com.google.android.play.core.install.InstallStateUpdatedListener): void;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: globalAndroid.app.Activity, param3: number): boolean;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: number, param2: com.google.android.play.core.common.IntentSenderForResultStarter, param3: number): boolean;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: globalAndroid.app.Activity, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
								startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
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
							public static newBuilder(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
							public constructor();
							public appUpdateType(): number;
							public static defaultOptions(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions;
							public allowAssetPackDeletion(): boolean;
						}
						export module AppUpdateOptions {
							export abstract class Builder {
								public static class: java.lang.Class<com.google.android.play.core.appupdate.AppUpdateOptions.Builder>;
								public setAppUpdateType(param0: number): com.google.android.play.core.appupdate.AppUpdateOptions.Builder;
								public build(): com.google.android.play.core.appupdate.AppUpdateOptions;
								public constructor();
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
						export module testing {
							export class FakeAppUpdateManager extends com.google.android.play.core.appupdate.AppUpdateManager {
								public static class: java.lang.Class<com.google.android.play.core.appupdate.testing.FakeAppUpdateManager>;
								public completeUpdate(): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public setUpdateAvailable(param0: number, param1: number): void;
								public setUpdatePriority(param0: number): void;
								public startUpdateFlowForResult(param0: com.google.android.play.core.appupdate.AppUpdateInfo, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: com.google.android.play.core.appupdate.AppUpdateOptions, param3: number): boolean;
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zza>;
						}
					}
				}
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
						export class zzaa {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzaa>;
						}
					}
				}
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
						export class zzb extends com.google.android.play.core.listener.zzc {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzb>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzag*/, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
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
						export class zzc extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzc>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzd {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzd>;
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
						export class zze extends com.google.android.play.core.common.IntentSenderForResultStarter {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zze>;
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
						export class zzf extends com.google.android.play.core.appupdate.AppUpdateManager {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzf>;
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
						export class zzg extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzg>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzh {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzh>;
						}
					}
				}
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
						export class zzi extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzi>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzj extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzj>;
							public constructor(param0: any /* com.google.android.play.core.appupdate.zzh*/);
						}
					}
				}
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
						export class zzk extends com.google.android.play.core.internal.zzan {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzk>;
						}
					}
				}
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
						export class zzl extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzl>;
						}
					}
				}
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
						export class zzm extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzm>;
						}
					}
				}
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
						export class zzn extends com.google.android.play.core.internal.zzq {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzn>;
						}
					}
				}
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
						export class zzo extends com.google.android.play.core.appupdate.zzn {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzo>;
						}
					}
				}
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
						export class zzp extends com.google.android.play.core.appupdate.zzn {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzp>;
						}
					}
				}
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
						export class zzq {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzq>;
						}
					}
				}
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
						export class zzr extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzr>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzs>;
						}
					}
				}
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
						export class zzt extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzt>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzu extends com.google.android.play.core.appupdate.AppUpdateOptions.Builder {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzu>;
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
						export class zzv {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzv>;
						}
					}
				}
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
						export class zzw extends com.google.android.play.core.appupdate.AppUpdateOptions {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzw>;
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
						export class zzx {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzx>;
						}
					}
				}
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
						export class zzy {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzy>;
						}
					}
				}
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
						export class zzz {
							public static class: java.lang.Class<com.google.android.play.core.appupdate.zzz>;
						}
					}
				}
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
						export class AssetPackException extends com.google.android.play.core.tasks.zzj {
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
								getAssetLocation(param0: string, param1: string): com.google.android.play.core.assetpacks.AssetLocation;
								getPackLocation(param0: string): com.google.android.play.core.assetpacks.AssetPackLocation;
								cancel(param0: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
								fetch(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
								getPackStates(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
								removePack(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
								showCellularDataConfirmation(param0: globalAndroid.app.Activity): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								getPackLocations(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackLocation>;
								clearListeners(): void;
								registerListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
								unregisterListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							});
							public constructor();
							public removePack(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public getPackLocations(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackLocation>;
							public getAssetLocation(param0: string, param1: string): com.google.android.play.core.assetpacks.AssetLocation;
							public cancel(param0: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
							public registerListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public getPackLocation(param0: string): com.google.android.play.core.assetpacks.AssetPackLocation;
							public fetch(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public unregisterListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public getPackStates(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public showCellularDataConfirmation(param0: globalAndroid.app.Activity): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public clearListeners(): void;
						}
					}
				}
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
							public bytesDownloaded(): number;
							public constructor();
							public status(): number;
							public transferProgressPercentage(): number;
							public errorCode(): number;
							public name(): string;
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
							public totalBytes(): number;
							public constructor();
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
						export class ExtractionForegroundService {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.ExtractionForegroundService>;
							public constructor();
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
							export class zza {
								public static class: java.lang.Class<com.google.android.play.core.assetpacks.model.zza>;
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
							export class zzb {
								public static class: java.lang.Class<com.google.android.play.core.assetpacks.model.zzb>;
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zza>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.zza interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): com.google.android.play.core.assetpacks.AssetPackManager;
								zzb(param0: com.google.android.play.core.assetpacks.AssetPackExtractionService): void;
							});
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
					export module assetpacks {
						export class zzaa extends com.google.android.play.core.tasks.OnSuccessListener<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzaa>;
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
						export class zzab extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzab>;
						}
					}
				}
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
						export class zzac extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzac>;
						}
					}
				}
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
						export class zzad extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzad>;
						}
					}
				}
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
						export class zzae extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzae>;
						}
					}
				}
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
						export class zzaf extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzaf>;
						}
					}
				}
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
						export class zzag extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzag>;
						}
					}
				}
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
						export class zzah extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzah>;
						}
					}
				}
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
						export class zzai extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzai>;
						}
					}
				}
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
						export class zzaj extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzaj>;
						}
					}
				}
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
						export class zzak extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzak>;
						}
					}
				}
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
						export class zzal extends com.google.android.play.core.internal.zzv {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzal>;
						}
					}
				}
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
						export class zzam extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzam>;
						}
					}
				}
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
						export class zzan extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzan>;
						}
					}
				}
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
						export class zzao extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzao>;
						}
					}
				}
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
						export class zzap extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzap>;
						}
					}
				}
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
						export class zzaq extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzaq>;
						}
					}
				}
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
						export class zzar extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzar>;
						}
					}
				}
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
						export class zzas extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzas>;
						}
					}
				}
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
						export class zzat extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzat>;
						}
					}
				}
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
						export class zzau extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzau>;
						}
					}
				}
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
						export class zzav extends com.google.android.play.core.assetpacks.zzal {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzav>;
						}
					}
				}
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
						export class zzaw extends com.google.android.play.core.assetpacks.zzy {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzaw>;
						}
					}
				}
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
						export class zzax extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzax>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzay {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzay>;
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
						export class zzaz {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzaz>;
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
						export class zzb extends com.google.android.play.core.internal.zzx {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzb>;
						}
					}
				}
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
						export class zzba {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzba>;
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
						export class zzbb extends com.google.android.play.core.listener.zzc {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbb>;
						}
					}
				}
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
						export class zzbc extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbc>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/, param5: any /* com.google.android.play.core.internal.zzcs*/, param6: any /* com.google.android.play.core.internal.zzcs*/, param7: any /* com.google.android.play.core.internal.zzcs*/, param8: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzbd extends com.google.android.play.core.assetpacks.zzbe {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbd>;
						}
					}
				}
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
						export class zzbe {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbe>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.zzbe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: string): number;
							});
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
					export module assetpacks {
						export class zzbf extends com.google.android.play.core.assetpacks.zzbe {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbf>;
						}
					}
				}
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
						export class zzbg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbg>;
						}
					}
				}
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
						export class zzbh {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbh>;
						}
					}
				}
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
						export class zzbi extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbi>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzbj {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbj>;
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
						export class zzbk extends com.google.android.play.core.internal.zzcm {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbk>;
							public close(): void;
						}
					}
				}
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
						export class zzbl extends com.google.android.play.core.assetpacks.AssetLocation {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbl>;
							public size(): number;
							public offset(): number;
							public hashCode(): number;
							public path(): string;
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
						export class zzbm extends com.google.android.play.core.assetpacks.AssetPackLocation {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbm>;
							public hashCode(): number;
							public packStorageMethod(): number;
							public path(): string;
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
						export class zzbn extends com.google.android.play.core.assetpacks.AssetPackState {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbn>;
							public bytesDownloaded(): number;
							public hashCode(): number;
							public status(): number;
							public transferProgressPercentage(): number;
							public errorCode(): number;
							public name(): string;
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
						export class zzbo extends com.google.android.play.core.assetpacks.AssetPackStates {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbo>;
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
						export class zzbp extends com.google.android.play.core.assetpacks.zzem {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbp>;
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
						export class zzbq extends com.google.android.play.core.assetpacks.zzet {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbq>;
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
						export class zzbr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbr>;
						}
					}
				}
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
						export class zzbs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbs>;
						}
					}
				}
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
						export class zzbt {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbt>;
						}
					}
				}
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
						export class zzbu {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbu>;
						}
					}
				}
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
						export class zzbv extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbv>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzbw {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbw>;
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
						export class zzbx {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbx>;
						}
					}
				}
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
						export class zzby {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzby>;
						}
					}
				}
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
						export class zzbz extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzbz>;
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
					export module assetpacks {
						export class zzc extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzc>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzca {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzca>;
						}
					}
				}
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
						export class zzcb {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcb>;
						}
					}
				}
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
						export class zzcc {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcc>;
						}
					}
				}
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
						export class zzcd extends com.google.android.play.core.assetpacks.zza {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcd>;
						}
					}
				}
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
						export class zzce extends com.google.android.play.core.assetpacks.zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzce>;
						}
					}
				}
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
						export class zzcf {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcf>;
						}
					}
				}
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
						export class zzcg extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcg>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzch {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzch>;
						}
					}
				}
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
						export class zzci {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzci>;
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
					export module assetpacks {
						export class zzcj extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcj>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzck {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzck>;
						}
					}
				}
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
						export class zzcl {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcl>;
						}
					}
				}
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
						export class zzcm extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcm>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/, param5: any /* com.google.android.play.core.internal.zzcs*/, param6: any /* com.google.android.play.core.internal.zzcs*/, param7: any /* com.google.android.play.core.internal.zzcs*/, param8: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzcn {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcn>;
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
						export class zzco {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzco>;
						}
					}
				}
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
						export class zzcp {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcp>;
						}
					}
				}
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
						export class zzcq extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcq>;
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
					export module assetpacks {
						export class zzcr extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcr>;
						}
					}
				}
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
						export class zzcs extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcs>;
						}
					}
				}
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
						export class zzct extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzct>;
						}
					}
				}
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
						export class zzcu extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcu>;
						}
					}
				}
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
						export class zzcv extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcv>;
						}
					}
				}
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
						export class zzcw extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcw>;
						}
					}
				}
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
						export class zzcx extends com.google.android.play.core.assetpacks.zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcx>;
						}
					}
				}
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
						export class zzcy {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcy>;
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
						export class zzcz {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzcz>;
						}
					}
				}
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
						export class zzd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzd>;
						}
					}
				}
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
						export class zzda {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzda>;
						}
					}
				}
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
						export class zzdb {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdb>;
						}
					}
				}
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
						export class zzdc {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdc>;
						}
					}
				}
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
						export class zzdd {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdd>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.zzdd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any;
							});
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
					export module assetpacks {
						export class zzde {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzde>;
						}
					}
				}
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
						export class zzdf extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdf>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdg>;
						}
					}
				}
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
						export class zzdh {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdh>;
						}
					}
				}
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
						export class zzdi extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdi>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzdj {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdj>;
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
						export class zzdk {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdk>;
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
						export class zzdl {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdl>;
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
						export class zzdm {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdm>;
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
						export class zzdn {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdn>;
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
						export class zzdo extends com.google.android.play.core.assetpacks.zzy {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdo>;
						}
					}
				}
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
						export class zzdp extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdp>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/, param5: any /* com.google.android.play.core.internal.zzcs*/, param6: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzdq {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdq>;
						}
					}
				}
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
						export class zzdr {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdr>;
							public close(): void;
							public constructor(param0: java.util.Enumeration<any>);
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
						export class zzds {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzds>;
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
					export module assetpacks {
						export class zzdt extends com.google.android.play.core.assetpacks.zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdt>;
						}
					}
				}
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
						export class zzdu {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdu>;
						}
					}
				}
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
						export class zzdv extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdv>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzdw extends com.google.android.play.core.assetpacks.zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdw>;
						}
					}
				}
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
						export class zzdx {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdx>;
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
						export class zzdy {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdy>;
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
						export class zzdz {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzdz>;
						}
					}
				}
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
						export class zze extends com.google.android.play.core.assetpacks.zzbe {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zze>;
						}
					}
				}
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
						export class zzea extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzea>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/, param5: any /* com.google.android.play.core.internal.zzcs*/, param6: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzeb {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzeb>;
						}
					}
				}
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
						export class zzec extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzec>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzed {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzed>;
						}
					}
				}
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
						export class zzee extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzee>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzef extends com.google.android.play.core.assetpacks.zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzef>;
						}
					}
				}
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
						export class zzeg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzeg>;
						}
					}
				}
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
						export class zzeh extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzeh>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzei extends com.google.android.play.core.assetpacks.zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzei>;
						}
					}
				}
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
						export class zzej {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzej>;
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
						export class zzek {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzek>;
						}
					}
				}
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
						export class zzel extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzel>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export abstract class zzem {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzem>;
						}
					}
				}
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
						export class zzen {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzen>;
						}
					}
				}
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
						export class zzeo {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzeo>;
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
						export class zzep {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzep>;
						}
					}
				}
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
						export class zzeq extends com.google.android.play.core.assetpacks.zzdg {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzeq>;
						}
					}
				}
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
						export class zzer {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzer>;
						}
					}
				}
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
						export class zzes extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzes>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export abstract class zzet {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzet>;
						}
					}
				}
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
						export class zzf extends com.google.android.play.core.tasks.OnFailureListener {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzf>;
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
						export class zzg extends com.google.android.play.core.tasks.OnSuccessListener<any> {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzg>;
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
						export class zzh {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzh>;
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
						export class zzi {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzi>;
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
						export class zzj {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzj>;
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
						export class zzk {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzk>;
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
						export class zzl extends com.google.android.play.core.assetpacks.AssetPackManager {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzl>;
							public removePack(param0: string): com.google.android.play.core.tasks.Task<java.lang.Void>;
							public getPackLocations(): java.util.Map<string,com.google.android.play.core.assetpacks.AssetPackLocation>;
							public getAssetLocation(param0: string, param1: string): com.google.android.play.core.assetpacks.AssetLocation;
							public cancel(param0: java.util.List<string>): com.google.android.play.core.assetpacks.AssetPackStates;
							public registerListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public getPackLocation(param0: string): com.google.android.play.core.assetpacks.AssetPackLocation;
							public fetch(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public unregisterListener(param0: com.google.android.play.core.assetpacks.AssetPackStateUpdateListener): void;
							public getPackStates(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<com.google.android.play.core.assetpacks.AssetPackStates>;
							public showCellularDataConfirmation(param0: globalAndroid.app.Activity): com.google.android.play.core.tasks.Task<java.lang.Integer>;
							public clearListeners(): void;
						}
					}
				}
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
						export class zzm extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzm>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/, param4: any /* com.google.android.play.core.internal.zzcs*/, param5: any /* com.google.android.play.core.internal.zzcs*/, param6: any /* com.google.android.play.core.internal.zzcs*/, param7: any /* com.google.android.play.core.internal.zzcs*/, param8: any /* com.google.android.play.core.internal.zzcs*/, param9: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzn {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzn>;
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
						export class zzo {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzo>;
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
						export class zzp {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzp>;
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
						export class zzq {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzq>;
						}
					}
				}
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
						export class zzr extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzr>;
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
					export module assetpacks {
						export class zzs extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzs>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzt extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzt>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzu extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzu>;
							public constructor(param0: any /* com.google.android.play.core.assetpacks.zzp*/);
						}
					}
				}
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
						export class zzv extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzv>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzw {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzw>;
						}
					}
				}
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
						export class zzx extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzx>;
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
					export module assetpacks {
						export class zzy {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzy>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.assetpacks.zzy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: number, param1: string, param2: string, param3: number): com.google.android.play.core.tasks.Task<any>;
								zzb(param0: java.util.List<any>, param1: any /* com.google.android.play.core.assetpacks.zzbe*/, param2: java.util.Map<any,any>): com.google.android.play.core.tasks.Task<any>;
								zzc(param0: java.util.List<any>, param1: java.util.List<any>, param2: java.util.Map<any,any>): com.google.android.play.core.tasks.Task<any>;
								zzd(param0: java.util.Map<any,any>): com.google.android.play.core.tasks.Task<any>;
								zze(param0: java.util.List<any>): void;
								zzf(): void;
								zzg(param0: number, param1: string, param2: string, param3: number): void;
								zzh(param0: number, param1: string): void;
								zzi(param0: number): void;
								zzj(param0: string): void;
							});
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
					export module assetpacks {
						export class zzz extends com.google.android.play.core.internal.zzan {
							public static class: java.lang.Class<com.google.android.play.core.assetpacks.zzz>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module client {
						export class R {
							public static class: java.lang.Class<com.google.android.play.core.client.R>;
						}
						export module R {
							export class style {
								public static class: java.lang.Class<com.google.android.play.core.client.R.style>;
								public static Theme_PlayCore_Transparent: number;
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.common.zza>;
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
					export module common {
						export class zzb {
							public static class: java.lang.Class<com.google.android.play.core.common.zzb>;
						}
					}
				}
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
						export class zzc extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.common.zzc>;
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
					export module install {
						export class InstallException extends com.google.android.play.core.tasks.zzj {
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
							public bytesDownloaded(): number;
							public constructor();
							public installStatus(): number;
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
						export module model {
							export class ActivityResult {
								public static class: java.lang.Class<com.google.android.play.core.install.model.ActivityResult>;
								public static RESULT_IN_APP_UPDATE_FAILED: number;
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
							export class zza {
								public static class: java.lang.Class<com.google.android.play.core.install.model.zza>;
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
						export class zza extends com.google.android.play.core.install.InstallState {
							public static class: java.lang.Class<com.google.android.play.core.install.zza>;
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
					export module internal {
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.internal.zza>;
						}
					}
				}
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
						export class zzaa extends com.google.android.play.core.internal.zzk implements com.google.android.play.core.internal.zzac {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzaa>;
						}
					}
				}
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
						export abstract class zzab extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzac {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzab>;
						}
					}
				}
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
						export class zzac {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzac>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzac interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.internal.zzae*/): void;
							});
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
						export abstract class zzad extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzae {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzad>;
							public constructor();
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
						export class zzae {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzae>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzae interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: globalAndroid.os.Bundle): void;
							});
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
						export class zzaf {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzaf>;
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
						export class zzag {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzag>;
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
						export abstract class zzah {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzah>;
							public constructor(param0: any /* com.google.android.play.core.tasks.zzi*/);
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
						export class zzai {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzai>;
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
						export class zzaj extends com.google.android.play.core.tasks.OnCompleteListener<any> {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzaj>;
							public onComplete(param0: com.google.android.play.core.tasks.Task<any>): void;
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
					export module internal {
						export class zzak extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzak>;
						}
					}
				}
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
						export class zzal extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzal>;
						}
					}
				}
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
						export class zzam {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzam>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzam interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): void;
							});
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
						export class zzan {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzan>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: globalAndroid.os.IBinder): any;
							});
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
						export class zzao extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzao>;
						}
					}
				}
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
						export class zzap extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzap>;
						}
					}
				}
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
						export class zzaq {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzaq>;
						}
					}
				}
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
						export class zzar {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzar>;
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
						export class zzas {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzas>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.play.core.internal.zzag*/, param2: string, param3: globalAndroid.content.Intent, param4: any /* com.google.android.play.core.internal.zzan*/, param5: any /* com.google.android.play.core.internal.zzam*/);
						}
					}
				}
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
						export class zzat {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzat>;
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
						export class zzau {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzau>;
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
						export class zzav {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzav>;
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
						export class zzaw extends com.google.android.play.core.splitinstall.zzh {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzaw>;
							public constructor(param0: globalAndroid.content.Context, param1: java.util.concurrent.Executor, param2: any /* com.google.android.play.core.internal.zzay*/, param3: any /* com.google.android.play.core.splitcompat.zze*/, param4: any /* com.google.android.play.core.splitcompat.zzr*/, param5: androidNative.Array<number>);
						}
					}
				}
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
						export class zzax {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzax>;
							public constructor(param0: any /* com.google.android.play.core.splitcompat.zza*/);
						}
					}
				}
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
						export class zzay {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzay>;
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.play.core.splitcompat.zze*/, param2: any /* com.google.android.play.core.internal.zzau*/);
						}
					}
				}
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
						export class zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzaz>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzaz interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.lang.ClassLoader, param1: java.util.Set<any>): void;
								zzb(param0: java.lang.ClassLoader, param1: java.io.File, param2: java.io.File, param3: boolean): boolean;
							});
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
						export class zzb extends com.google.android.play.core.internal.zzc {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzb>;
							public constructor(param0: java.nio.ByteBuffer);
						}
					}
				}
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
						export class zzba {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzba>;
						}
					}
				}
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
						export class zzbb extends com.google.android.play.core.internal.zzbe {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbb>;
						}
					}
				}
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
						export class zzbc extends com.google.android.play.core.internal.zzbd {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbc>;
						}
					}
				}
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
						export class zzbd {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbd>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzbd interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any, param1: java.io.File, param2: java.io.File): boolean;
							});
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
						export class zzbe {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbe>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzbe interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any, param1: java.util.ArrayList<any>, param2: java.io.File, param3: java.util.ArrayList<any>): androidNative.Array<any>;
							});
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
						export class zzbf extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbf>;
						}
					}
				}
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
						export class zzbg extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbg>;
						}
					}
				}
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
						export class zzbh extends com.google.android.play.core.internal.zzbe {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbh>;
						}
					}
				}
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
						export class zzbi extends com.google.android.play.core.internal.zzbj {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbi>;
						}
					}
				}
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
						export class zzbj {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbj>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzbj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any, param1: java.util.List<any>, param2: java.io.File, param3: java.util.List<any>): androidNative.Array<any>;
							});
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
						export class zzbk extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbk>;
						}
					}
				}
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
						export class zzbl extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbl>;
						}
					}
				}
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
						export class zzbm extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbm>;
						}
					}
				}
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
						export class zzbn extends com.google.android.play.core.internal.zzbj {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbn>;
						}
					}
				}
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
						export class zzbo extends com.google.android.play.core.internal.zzbd {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbo>;
						}
					}
				}
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
						export class zzbp extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbp>;
						}
					}
				}
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
						export class zzbq extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbq>;
						}
					}
				}
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
						export class zzbr extends com.google.android.play.core.internal.zzbd {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbr>;
						}
					}
				}
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
						export class zzbs extends com.google.android.play.core.internal.zzaz {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbs>;
						}
					}
				}
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
						export class zzbt {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbt>;
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
					export module internal {
						export class zzbu extends com.google.android.play.core.internal.zzbv {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbu>;
						}
					}
				}
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
						export class zzbv {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbv>;
						}
					}
				}
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
						export class zzbw {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbw>;
						}
					}
				}
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
						export class zzbx {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbx>;
						}
					}
				}
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
						export class zzby extends com.google.android.play.core.internal.zzk implements com.google.android.play.core.internal.zzca {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzby>;
						}
					}
				}
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
						export abstract class zzbz extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzca {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzbz>;
						}
					}
				}
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
						export class zzc {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzc>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): number;
								zzb(param0: androidNative.Array<java.security.MessageDigest>, param1: number, param2: number): void;
							});
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
						export class zzca {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzca>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzca interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: string, param1: number, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzcc*/): void;
								zzd(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzcc*/): void;
								zze(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzcc*/): void;
								zzf(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzcc*/): void;
								zzg(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzcc*/): void;
								zzh(param0: string, param1: number, param2: any /* com.google.android.play.core.internal.zzcc*/): void;
								zzi(param0: string, param1: any /* com.google.android.play.core.internal.zzcc*/): void;
								zzj(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzcc*/): void;
							});
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
						export abstract class zzcb extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzcc {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcb>;
							public constructor();
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
						export class zzcc {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcc>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzcc interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: number, param1: globalAndroid.os.Bundle): void;
								zzj(param0: number, param1: globalAndroid.os.Bundle): void;
								zzk(param0: globalAndroid.os.Bundle): void;
								zzc(param0: globalAndroid.os.Bundle): void;
								zzd(param0: globalAndroid.os.Bundle): void;
								zze(param0: globalAndroid.os.Bundle): void;
								zzf(param0: globalAndroid.os.Bundle): void;
								zzl(param0: globalAndroid.os.Bundle): void;
								zzg(param0: number, param1: globalAndroid.os.Bundle): void;
								zzh(param0: java.util.List<any>): void;
								zzm(param0: globalAndroid.os.Bundle): void;
								zzi(param0: number, param1: globalAndroid.os.Bundle): void;
							});
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
						export class zzcd {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcd>;
						}
					}
				}
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
						export class zzce {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzce>;
						}
					}
				}
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
						export class zzcf {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcf>;
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
						export class zzcg {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcg>;
						}
					}
				}
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
						export class zzch {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzch>;
						}
					}
				}
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
						export class zzci {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzci>;
						}
					}
				}
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
						export class zzcj {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcj>;
						}
					}
				}
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
						export class zzck {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzck>;
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
						export class zzcl {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcl>;
						}
					}
				}
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
						export abstract class zzcm {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcm>;
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
						export class zzcn extends com.google.android.play.core.internal.zzcm {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcn>;
							public constructor();
							public constructor(param0: any /* com.google.android.play.core.internal.zzcm*/, param1: number, param2: number);
							public close(): void;
						}
					}
				}
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
						export class zzco {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzco>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzco interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any;
							});
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
						export class zzcp extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcp>;
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
						export class zzcq implements com.google.android.play.core.internal.zzcs, com.google.android.play.core.internal.zzco {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcq>;
						}
					}
				}
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
						export class zzcr {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcr>;
						}
					}
				}
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
						export class zzcs {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzcs>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzcs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any;
							});
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
						export class zzd extends com.google.android.play.core.internal.zzc {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzd>;
							public constructor(param0: java.nio.channels.FileChannel, param1: number, param2: number);
						}
					}
				}
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
						export class zze {
							public static class: java.lang.Class<com.google.android.play.core.internal.zze>;
						}
					}
				}
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
						export class zzf {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzf>;
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
						export class zzg extends com.google.android.play.core.internal.zzh {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzg>;
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
						export class zzh {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzh>;
							public getVersion(): number;
							public getBasicConstraints(): number;
							public getNotBefore(): java.util.Date;
							public toString(): string;
							public getSubjectDN(): java.security.Principal;
							public checkValidity(): void;
							public getSigAlgOID(): string;
							public getSerialNumber(): java.math.BigInteger;
							public getExtensionValue(param0: string): androidNative.Array<number>;
							public getSigAlgParams(): androidNative.Array<number>;
							public getCriticalExtensionOIDs(): java.util.Set<any>;
							public verify(param0: java.security.PublicKey, param1: string): void;
							public getIssuerDN(): java.security.Principal;
							public constructor(param0: java.security.cert.X509Certificate);
							public getNonCriticalExtensionOIDs(): java.util.Set<any>;
							public getTBSCertificate(): androidNative.Array<number>;
							public getIssuerUniqueID(): androidNative.Array<boolean>;
							public getSubjectUniqueID(): androidNative.Array<boolean>;
							public checkValidity(param0: java.util.Date): void;
							public getEncoded(): androidNative.Array<number>;
							public verify(param0: java.security.PublicKey): void;
							public getPublicKey(): java.security.PublicKey;
							public getKeyUsage(): androidNative.Array<boolean>;
							public hasUnsupportedCriticalExtension(): boolean;
							public getSigAlgName(): string;
							public getSignature(): androidNative.Array<number>;
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
						export class zzi {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzi>;
						}
					}
				}
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
						export class zzj {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzj>;
						}
					}
				}
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
						export class zzk {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzk>;
							public constructor(param0: globalAndroid.os.IBinder, param1: string);
							public asBinder(): globalAndroid.os.IBinder;
						}
					}
				}
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
						export class zzl {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzl>;
							public asBinder(): globalAndroid.os.IBinder;
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
						export class zzm {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzm>;
						}
					}
				}
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
						export class zzn extends com.google.android.play.core.internal.zzk implements com.google.android.play.core.internal.zzp {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzn>;
						}
					}
				}
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
						export abstract class zzo extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzp {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzo>;
						}
					}
				}
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
						export class zzp {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzp>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.internal.zzr*/): void;
								zzd(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.internal.zzr*/): void;
							});
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
						export abstract class zzq extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzr {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzq>;
							public constructor();
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
						export class zzr {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzr>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzr interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: globalAndroid.os.Bundle): void;
								zzc(param0: globalAndroid.os.Bundle): void;
							});
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
						export class zzs extends com.google.android.play.core.internal.zzk implements com.google.android.play.core.internal.zzu {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzs>;
						}
					}
				}
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
						export abstract class zzt extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzu {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzt>;
						}
					}
				}
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
						export class zzu {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzu>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzu interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zzd(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zze(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.internal.zzw*/): void;
								zzf(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.internal.zzw*/): void;
								zzg(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zzh(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zzi(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zzj(param0: string, param1: globalAndroid.os.Bundle, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zzk(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
								zzl(param0: string, param1: java.util.List<any>, param2: globalAndroid.os.Bundle, param3: any /* com.google.android.play.core.internal.zzw*/): void;
							});
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
						export abstract class zzv extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzw {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzv>;
							public constructor();
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
						export class zzw {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzw>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzw interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: number, param1: globalAndroid.os.Bundle): void;
								zzc(param0: globalAndroid.os.Bundle): void;
								zzd(param0: globalAndroid.os.Bundle): void;
								zze(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzf(param0: number, param1: globalAndroid.os.Bundle): void;
								zzg(param0: java.util.List<any>): void;
								zzh(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzi(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzj(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzk(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzl(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzm(param0: globalAndroid.os.Bundle, param1: globalAndroid.os.Bundle): void;
								zzn(param0: number, param1: globalAndroid.os.Bundle): void;
							});
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
						export abstract class zzx extends com.google.android.play.core.internal.zzl implements com.google.android.play.core.internal.zzy {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzx>;
							public constructor();
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
						export class zzy {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzy>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.internal.zzy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzb(param0: globalAndroid.os.Bundle, param1: any /* com.google.android.play.core.internal.zzz*/): void;
								zzc(param0: globalAndroid.os.Bundle, param1: any /* com.google.android.play.core.internal.zzz*/): void;
							});
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
						export class zzz extends com.google.android.play.core.internal.zzk {
							public static class: java.lang.Class<com.google.android.play.core.internal.zzz>;
						}
					}
				}
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.listener.zza>;
						}
					}
				}
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
						export class zzb {
							public static class: java.lang.Class<com.google.android.play.core.listener.zzb>;
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
						export abstract class zzc {
							public static class: java.lang.Class<com.google.android.play.core.listener.zzc>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzag*/, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
						}
					}
				}
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
							/** @deprecated */
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
							/** @deprecated */
							public disableAppIfMissingRequiredSplits(): boolean;
							/** @deprecated */
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
							/** @deprecated */
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.zza>;
						}
					}
				}
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
						export class zzb extends com.google.android.play.core.missingsplits.MissingSplitsManager {
							public static class: java.lang.Class<com.google.android.play.core.missingsplits.zzb>;
							public disableAppIfMissingRequiredSplits(): boolean;
							/** @deprecated */
							public disableAppIfMissingRequiredSplits(): boolean;
							public isMissingRequiredSplits(): boolean;
							/** @deprecated */
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
						export class ReviewException extends com.google.android.play.core.tasks.zzj {
							public static class: java.lang.Class<com.google.android.play.core.review.ReviewException>;
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
					export module review {
						export abstract class ReviewInfo {
							public static class: java.lang.Class<com.google.android.play.core.review.ReviewInfo>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.google.android.play.core.review.ReviewInfo>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
					}
				}
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
								launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.play.core.tasks.Task<java.lang.Void>;
								requestReviewFlow(): com.google.android.play.core.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
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
						export module model {
							export class ReviewErrorCode {
								public static class: java.lang.Class<com.google.android.play.core.review.model.ReviewErrorCode>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.review.model.ReviewErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static PLAY_STORE_NOT_FOUND: number;
								public static NO_ERROR: number;
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
					export module review {
						export module model {
							export class zza {
								public static class: java.lang.Class<com.google.android.play.core.review.model.zza>;
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
						export class zza extends com.google.android.play.core.review.ReviewInfo {
							public static class: java.lang.Class<com.google.android.play.core.review.zza>;
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
						export class zzb {
							public static class: java.lang.Class<com.google.android.play.core.review.zzb>;
						}
					}
				}
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
						export class zzc {
							public static class: java.lang.Class<com.google.android.play.core.review.zzc>;
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
						export class zzd extends com.google.android.play.core.review.ReviewManager {
							public static class: java.lang.Class<com.google.android.play.core.review.zzd>;
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
						export class zze extends com.google.android.play.core.internal.zzan {
							public static class: java.lang.Class<com.google.android.play.core.review.zze>;
						}
					}
				}
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
						export class zzf extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.review.zzf>;
						}
					}
				}
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
						export class zzg extends com.google.android.play.core.internal.zzad {
							public static class: java.lang.Class<com.google.android.play.core.review.zzg>;
						}
					}
				}
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
						export class zzh extends com.google.android.play.core.review.zzg {
							public static class: java.lang.Class<com.google.android.play.core.review.zzh>;
						}
					}
				}
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
						export class zzi {
							public static class: java.lang.Class<com.google.android.play.core.review.zzi>;
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
						export class SplitCompat {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.SplitCompat>;
							public static install(param0: globalAndroid.content.Context): boolean;
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zza>;
							public constructor(param0: any /* com.google.android.play.core.splitcompat.zze*/);
						}
					}
				}
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
						export class zzb extends com.google.android.play.core.splitcompat.zzs {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzb>;
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
					export module splitcompat {
						export class zzc {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzc>;
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
						export class zzd {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzd>;
						}
					}
				}
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
						export class zze {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zze>;
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
						export class zzf extends com.google.android.play.core.splitcompat.zzk {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzf>;
						}
					}
				}
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
						export class zzg extends com.google.android.play.core.splitcompat.zzj {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzg>;
						}
					}
				}
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
						export class zzh extends com.google.android.play.core.splitcompat.zzj {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzh>;
						}
					}
				}
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
						export class zzi extends com.google.android.play.core.splitcompat.zzk {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzi>;
						}
					}
				}
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
						export class zzj {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzj>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitcompat.zzj interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: java.util.zip.ZipFile, param1: java.util.Set<any>): void;
							});
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
					export module splitcompat {
						export class zzk {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzk>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitcompat.zzk interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(param0: any /* com.google.android.play.core.splitcompat.zzl*/, param1: java.io.File, param2: boolean): void;
							});
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
					export module splitcompat {
						export class zzl {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzl>;
						}
					}
				}
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
						export class zzm {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzm>;
						}
					}
				}
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
						export class zzn {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzn>;
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
						export class zzo extends com.google.android.play.core.splitinstall.zzq {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzo>;
						}
					}
				}
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
						export class zzp {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzp>;
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
						export class zzq {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzq>;
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
						export class zzr {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzr>;
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
					export module splitcompat {
						export abstract class zzs {
							public static class: java.lang.Class<com.google.android.play.core.splitcompat.zzs>;
						}
					}
				}
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
						export class InternalFrameworkListenerExtensions {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.InternalFrameworkListenerExtensions>;
							public static unregisterFrameworkListener(param0: globalAndroid.content.Context, param1: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
							public static registerFrameworkListener(param0: globalAndroid.content.Context, param1: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
						}
					}
				}
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
						export class SplitInstallException extends com.google.android.play.core.tasks.zzj {
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
								cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
								getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
								startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
								getInstalledLanguages(): java.util.Set<string>;
								getInstalledModules(): java.util.Set<string>;
								registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
								startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
								zza(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								zzb(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
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
							public getInstalledLanguages(): java.util.Set<string>;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
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
							public bytesDownloaded(): number;
							public constructor();
							public static create(param0: number, param1: number, param2: number, param3: number, param4: number, param5: java.util.List<string>, param6: java.util.List<string>): com.google.android.play.core.splitinstall.SplitInstallSessionState;
							public moduleNames(): java.util.List<string>;
							public hasTerminalStatus(): boolean;
							public sessionId(): number;
							public status(): number;
							/** @deprecated */
							public resolutionIntent(): globalAndroid.app.PendingIntent;
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
							export class zza {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.model.zza>;
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
							export class FakeSplitInstallManager extends com.google.android.play.core.splitinstall.SplitInstallManager {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.FakeSplitInstallManager>;
								/** @deprecated */
								public constructor(param0: globalAndroid.content.Context, param1: java.io.File);
								public unregisterListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								public deferredLanguageInstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
								public getSessionState(param0: number): com.google.android.play.core.tasks.Task<com.google.android.play.core.splitinstall.SplitInstallSessionState>;
								public registerListener(param0: com.google.android.play.core.splitinstall.SplitInstallStateUpdatedListener): void;
								public deferredUninstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public getSessionStates(): com.google.android.play.core.tasks.Task<java.util.List<com.google.android.play.core.splitinstall.SplitInstallSessionState>>;
								public deferredInstall(param0: java.util.List<string>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public getInstalledLanguages(): java.util.Set<string>;
								public setShouldNetworkError(param0: boolean): void;
								public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
								public cancelInstall(param0: number): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public deferredLanguageUninstall(param0: java.util.List<java.util.Locale>): com.google.android.play.core.tasks.Task<java.lang.Void>;
								public startInstall(param0: com.google.android.play.core.splitinstall.SplitInstallRequest): com.google.android.play.core.tasks.Task<java.lang.Integer>;
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
							export class zza extends com.google.android.play.core.splitinstall.testing.zzs {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zza>;
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
							export class zzb {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzb>;
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
							export class zzc extends com.google.android.play.core.splitinstall.testing.zzt {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzc>;
								public toString(): string;
								public equals(param0: any): boolean;
								public hashCode(): number;
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
							export class zzd {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzd>;
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
							export class zze {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zze>;
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
							export class zzf extends com.google.android.play.core.splitinstall.testing.zzp {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzf>;
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
							export class zzg extends com.google.android.play.core.splitinstall.testing.zzp {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzg>;
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
							export class zzh extends com.google.android.play.core.splitinstall.testing.zzp {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzh>;
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
							export class zzi extends com.google.android.play.core.splitinstall.testing.zzp {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzi>;
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
							export class zzj extends com.google.android.play.core.internal.zzco {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzj>;
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
							export class zzk {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzk>;
								public accept(param0: java.io.File): boolean;
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
							export class zzl {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzl>;
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
							export class zzm {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzm>;
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
							export class zzn {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzn>;
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
							export class zzo extends com.google.android.play.core.splitinstall.zzf {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzo>;
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
							export class zzp {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzp>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.splitinstall.testing.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState): com.google.android.play.core.splitinstall.SplitInstallSessionState;
								});
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
							export class zzq extends com.google.android.play.core.internal.zzco {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzq>;
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
							export class zzr extends com.google.android.play.core.internal.zzcs {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzr>;
								public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/);
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
							export abstract class zzs {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzs>;
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
							export abstract class zzt {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzt>;
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
							export class zzu extends com.google.android.play.core.splitinstall.testing.zzx {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzu>;
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
							export class zzv extends com.google.android.play.core.splitinstall.testing.zzx {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzv>;
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
							export class zzw extends com.google.android.play.core.splitinstall.testing.zzx {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzw>;
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
							export class zzx {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzx>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.splitinstall.testing.zzx interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zza(): void;
								});
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
							export class zzy {
								public static class: java.lang.Class<com.google.android.play.core.splitinstall.testing.zzy>;
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
						export class zza extends com.google.android.play.core.splitinstall.SplitInstallSessionState {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zza>;
							public bytesDownloaded(): number;
							public hashCode(): number;
							public sessionId(): number;
							public status(): number;
							/** @deprecated */
							public resolutionIntent(): globalAndroid.app.PendingIntent;
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
						export class zzaa extends com.google.android.play.core.splitinstall.SplitInstallManager {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzaa>;
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
							public getInstalledLanguages(): java.util.Set<string>;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
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
						export class zzab extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzab>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/, param3: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzac {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzac>;
						}
					}
				}
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
						export class zzad extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzad>;
							public constructor(param0: any /* com.google.android.play.core.splitinstall.zzac*/);
						}
					}
				}
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
						export class zzae extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzae>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzaf extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzaf>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzag extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzag>;
							public constructor(param0: any /* com.google.android.play.core.splitinstall.zzac*/);
						}
					}
				}
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
						export class zzah extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzah>;
							public constructor(param0: any /* com.google.android.play.core.splitinstall.zzac*/, param1: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzai {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzai>;
						}
					}
				}
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
						export class zzaj {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzaj>;
						}
					}
				}
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
						export class zzak extends com.google.android.play.core.internal.zzan {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzak>;
						}
					}
				}
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
						export class zzal extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzal>;
						}
					}
				}
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
						export class zzam extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzam>;
						}
					}
				}
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
						export class zzan extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzan>;
						}
					}
				}
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
						export class zzao extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzao>;
						}
					}
				}
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
						export class zzap extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzap>;
						}
					}
				}
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
						export class zzaq extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzaq>;
						}
					}
				}
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
						export class zzar extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzar>;
						}
					}
				}
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
						export class zzas extends com.google.android.play.core.internal.zzah {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzas>;
						}
					}
				}
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
						export class zzat extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzat>;
						}
					}
				}
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
						export class zzau extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzau>;
						}
					}
				}
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
						export class zzav extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzav>;
						}
					}
				}
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
						export class zzaw extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzaw>;
						}
					}
				}
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
						export class zzax extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzax>;
						}
					}
				}
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
						export class zzay extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzay>;
						}
					}
				}
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
						export class zzaz extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzaz>;
						}
					}
				}
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
						export class zzb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzb>;
						}
					}
				}
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
						export class zzba extends com.google.android.play.core.splitinstall.zzbb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzba>;
						}
					}
				}
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
						export class zzbb extends com.google.android.play.core.internal.zzcb {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzbb>;
						}
					}
				}
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
						export class zzbc {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzbc>;
						}
					}
				}
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
						export class zzbd extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzbd>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzbe {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzbe>;
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
					export module splitinstall {
						export class zzbf extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzbf>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzbg {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzbg>;
						}
					}
				}
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
						export class zzc {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzc>;
						}
					}
				}
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
						export class zzd {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzd>;
						}
					}
				}
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
						export class zze extends com.google.android.play.core.splitinstall.zzp {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zze>;
						}
					}
				}
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
						export class zzf {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzf>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): void;
								zzb(param0: number): void;
								zzc(): void;
							});
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
					export module splitinstall {
						export class zzg {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzg>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): any /* com.google.android.play.core.splitinstall.zzh*/;
							});
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
					export module splitinstall {
						export class zzh {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzh>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzd(param0: java.util.List<any>, param1: any /* com.google.android.play.core.splitinstall.zzf*/): void;
							});
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
					export module splitinstall {
						export class zzi {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzi>;
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
					export module splitinstall {
						export class zzj {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzj>;
						}
					}
				}
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
						export class zzk {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzk>;
						}
					}
				}
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
						export class zzl extends com.google.android.play.core.splitinstall.SplitInstallManager {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzl>;
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
							public getInstalledLanguages(): java.util.Set<string>;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: globalAndroid.app.Activity, param2: number): boolean;
							public startConfirmationDialogForResult(param0: com.google.android.play.core.splitinstall.SplitInstallSessionState, param1: com.google.android.play.core.common.IntentSenderForResultStarter, param2: number): boolean;
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
						export class zzm extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzm>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/, param1: any /* com.google.android.play.core.internal.zzcs*/, param2: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzn {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzn>;
						}
					}
				}
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
						export class zzo implements com.google.android.play.core.splitinstall.zzg {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzo>;
							public static values(): any /* androidNative.Array<com.google.android.play.core.splitinstall.zzo>*/;
						}
					}
				}
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
						export class zzp {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzp>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): com.google.android.play.core.splitinstall.SplitInstallManager;
								zzb(): java.io.File;
							});
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
					export module splitinstall {
						export class zzq {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzq>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.splitinstall.zzq interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zza(): java.util.Set<any>;
							});
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
					export module splitinstall {
						export class zzr {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzr>;
						}
					}
				}
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
						export class zzs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzs>;
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
						export class zzt extends com.google.android.play.core.internal.zzcs {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzt>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzcs*/);
						}
					}
				}
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
						export class zzu {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzu>;
						}
					}
				}
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
						export class zzv extends com.google.android.play.core.splitinstall.zzf {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzv>;
						}
					}
				}
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
						export class zzw {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzw>;
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
						export class zzx extends com.google.android.play.core.listener.zzc {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzx>;
							public constructor(param0: any /* com.google.android.play.core.internal.zzag*/, param1: globalAndroid.content.IntentFilter, param2: globalAndroid.content.Context);
							public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.play.core.splitinstall.zzg*/);
						}
					}
				}
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
						export class zzy {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzy>;
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
						export class zzz extends com.google.android.play.core.common.IntentSenderForResultStarter {
							public static class: java.lang.Class<com.google.android.play.core.splitinstall.zzz>;
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
						export class RuntimeExecutionException extends com.google.android.play.core.tasks.zzj {
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
							public getResult(): ResultT;
							public constructor();
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
							public static await(param0: com.google.android.play.core.tasks.Task<any>): any;
							public static await(param0: com.google.android.play.core.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
							public static whenAll(param0: java.util.Collection<any>): com.google.android.play.core.tasks.Task<java.lang.Void>;
						}
					}
				}
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
						export class zza {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zza>;
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
						export class zzb extends com.google.android.play.core.tasks.zzg {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzb>;
							public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnCompleteListener<any>);
						}
					}
				}
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
						export class zzc {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzc>;
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
						export class zzd extends com.google.android.play.core.tasks.zzg {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzd>;
							public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnFailureListener);
						}
					}
				}
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
						export class zze {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zze>;
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
						export class zzf extends com.google.android.play.core.tasks.zzg {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzf>;
							public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnSuccessListener<any>);
						}
					}
				}
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
						export class zzg {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzg>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.tasks.zzg interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								zzc(param0: com.google.android.play.core.tasks.Task<any>): void;
							});
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
					export module tasks {
						export class zzh {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzh>;
						}
					}
				}
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
						export class zzi {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzi>;
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
					export module tasks {
						export abstract class zzj {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzj>;
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
						export class zzk {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzk>;
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
						export class zzl {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzl>;
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
						export class zzm<ResultT>  extends com.google.android.play.core.tasks.Task<any> {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzm<any>>;
							public addOnCompleteListener(param0: com.google.android.play.core.tasks.OnCompleteListener<any>): com.google.android.play.core.tasks.Task<any>;
							public isComplete(): boolean;
							public addOnSuccessListener(param0: com.google.android.play.core.tasks.OnSuccessListener<any>): com.google.android.play.core.tasks.Task<any>;
							public addOnFailureListener(param0: com.google.android.play.core.tasks.OnFailureListener): com.google.android.play.core.tasks.Task<any>;
							public isSuccessful(): boolean;
							public getResult(param0: java.lang.Class<any>): any;
							public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnCompleteListener<any>): com.google.android.play.core.tasks.Task<any>;
							public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnSuccessListener<any>): com.google.android.play.core.tasks.Task<any>;
							public getResult(): any;
							public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.play.core.tasks.OnFailureListener): com.google.android.play.core.tasks.Task<any>;
							public getException(): java.lang.Exception;
						}
					}
				}
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
						export class zzn {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzn>;
						}
					}
				}
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
						export class zzo extends com.google.android.play.core.tasks.zzp {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzo>;
							public onSuccess(param0: any): void;
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
						export class zzp implements com.google.android.play.core.tasks.OnSuccessListener<any>, com.google.android.play.core.tasks.OnFailureListener {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzp>;
							/**
							 * Constructs a new instance of the com.google.android.play.core.tasks.zzp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSuccess(param0: any): void;
								onFailure(param0: java.lang.Exception): void;
							});
							public constructor();
							public onSuccess(param0: any): void;
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
						export class zzq extends com.google.android.play.core.tasks.zzp {
							public static class: java.lang.Class<com.google.android.play.core.tasks.zzq>;
							public onSuccess(param0: any): void;
							public constructor(param0: number, param1: any /* com.google.android.play.core.tasks.zzm<any>*/);
							public onFailure(param0: java.lang.Exception): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.play.core.listener.StateUpdatedListener:1
//com.google.android.play.core.tasks.OnCompleteListener:1
//com.google.android.play.core.tasks.OnSuccessListener:1
//com.google.android.play.core.tasks.Task:1
//com.google.android.play.core.tasks.zzm:1

