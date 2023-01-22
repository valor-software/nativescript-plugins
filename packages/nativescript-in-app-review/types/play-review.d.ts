/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export class ReviewException {
							public static class: java.lang.Class<com.google.android.play.core.review.ReviewException>;
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
								launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.gms.tasks.Task<java.lang.Void>;
								requestReviewFlow(): com.google.android.gms.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
							});
							public constructor();
							public requestReviewFlow(): com.google.android.gms.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
							public launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.gms.tasks.Task<java.lang.Void>;
						}
					}
				}
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
						export module internal {
							export class zza {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zza>;
								public constructor(param0: globalAndroid.os.IBinder, param1: string);
								public asBinder(): globalAndroid.os.IBinder;
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
						export module internal {
							export class zzb {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzb>;
								public constructor(param0: string);
								public asBinder(): globalAndroid.os.IBinder;
								public onTransact(param0: number, param1: globalAndroid.os.Parcel, param2: globalAndroid.os.Parcel, param3: number): boolean;
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
						export module internal {
							export class zzc {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzc>;
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
						export module internal {
							export class zzd extends com.google.android.play.core.review.internal.zza implements com.google.android.play.core.review.internal.zzf {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzd>;
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
						export module internal {
							export abstract class zze extends com.google.android.play.core.review.internal.zzb implements com.google.android.play.core.review.internal.zzf {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zze>;
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
						export module internal {
							export class zzf {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzf>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.review.internal.zzf interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									zzc(param0: string, param1: globalAndroid.os.Bundle, param2: any /* com.google.android.play.core.review.internal.zzh*/): void;
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
					export module review {
						export module internal {
							export abstract class zzg extends com.google.android.play.core.review.internal.zzb implements com.google.android.play.core.review.internal.zzh {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzg>;
								public constructor();
								public constructor(param0: string);
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
						export module internal {
							export class zzh {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzh>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.review.internal.zzh interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module core {
					export module review {
						export module internal {
							export class zzi {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzi>;
								public constructor(param0: string);
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
						export module internal {
							export abstract class zzj {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzj>;
								public constructor(param0: com.google.android.gms.tasks.TaskCompletionSource);
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
					export module review {
						export module internal {
							export class zzk {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzk>;
								public onComplete(param0: com.google.android.gms.tasks.Task): void;
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
						export module internal {
							export class zzl {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzl>;
								public binderDied(): void;
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
						export module internal {
							export class zzm extends com.google.android.play.core.review.internal.zzj {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzm>;
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
						export module internal {
							export class zzn extends com.google.android.play.core.review.internal.zzj {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzn>;
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
						export module internal {
							export class zzo {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzo>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.review.internal.zzo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export module review {
						export module internal {
							export class zzp extends com.google.android.play.core.review.internal.zzj {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzp>;
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
						export module internal {
							export class zzq extends com.google.android.play.core.review.internal.zzj {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzq>;
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
						export module internal {
							export class zzr {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzr>;
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
						export module internal {
							export class zzs {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzs>;
								public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
								public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
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
						export module internal {
							export class zzt {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzt>;
								public constructor(param0: globalAndroid.content.Context, param1: any /* com.google.android.play.core.review.internal.zzi*/, param2: string, param3: globalAndroid.content.Intent, param4: any /* com.google.android.play.core.review.zze*/, param5: any /* com.google.android.play.core.review.internal.zzo*/, param6: androidNative.Array<number>);
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
						export module internal {
							export class zzu {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzu>;
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
					export module review {
						export module internal {
							export class zzv {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzv>;
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
						export module internal {
							export class zzw {
								public static class: java.lang.Class<com.google.android.play.core.review.internal.zzw>;
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
							export class ReviewErrorCode {
								public static class: java.lang.Class<com.google.android.play.core.review.model.ReviewErrorCode>;
								/**
								 * Constructs a new instance of the com.google.android.play.core.review.model.ReviewErrorCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
								});
								public constructor();
								public static PLAY_STORE_NOT_FOUND: number;
								public static INTERNAL_ERROR: number;
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
								public requestReviewFlow(): com.google.android.gms.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
								public constructor(param0: globalAndroid.content.Context);
								public launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.gms.tasks.Task<java.lang.Void>;
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
							public requestReviewFlow(): com.google.android.gms.tasks.Task<com.google.android.play.core.review.ReviewInfo>;
							public launchReviewFlow(param0: globalAndroid.app.Activity, param1: com.google.android.play.core.review.ReviewInfo): com.google.android.gms.tasks.Task<java.lang.Void>;
						}
					}
				}
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
						export class zze {
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
						export class zzf extends com.google.android.play.core.review.internal.zzj {
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
						export class zzg extends com.google.android.play.core.review.internal.zzg {
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
					export module review {
						export class zzj {
							public static class: java.lang.Class<com.google.android.play.core.review.zzj>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module play {
				export module review {
					export class R {
						public static class: java.lang.Class<com.google.android.play.review.R>;
					}
				}
			}
		}
	}
}

//Generics information:

