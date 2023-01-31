/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module android {
			export module gms {
				export module internal {
					export module tasks {
						export class zza {
							public static class: java.lang.Class<com.google.android.gms.internal.tasks.zza>;
							public constructor();
							public constructor(param0: globalAndroid.os.Looper);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export abstract class CancellationToken {
						public static class: java.lang.Class<com.google.android.gms.tasks.CancellationToken>;
						public constructor();
						public isCancellationRequested(): boolean;
						public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class CancellationTokenSource {
						public static class: java.lang.Class<com.google.android.gms.tasks.CancellationTokenSource>;
						public constructor();
						public cancel(): void;
						public getToken(): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class Continuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.Continuation<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
						});
						public constructor();
						public then(param0: com.google.android.gms.tasks.Task<TResult>): TContinuationResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class DuplicateTaskCompletionException {
						public static class: java.lang.Class<com.google.android.gms.tasks.DuplicateTaskCompletionException>;
						public static of(param0: com.google.android.gms.tasks.Task<any>): java.lang.IllegalStateException;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class NativeOnCompleteListener extends com.google.android.gms.tasks.OnCompleteListener<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.NativeOnCompleteListener>;
						public static createAndAddCallback(param0: com.google.android.gms.tasks.Task<any>, param1: number): void;
						public constructor(param0: number);
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public nativeOnComplete(param0: number, param1: any, param2: boolean, param3: boolean, param4: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnCanceledListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnCompleteListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnCompleteListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
						});
						public constructor();
						public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnFailureListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnFailureListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnSuccessListener<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnSuccessListener<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: TResult): void;
						});
						public constructor();
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class OnTokenCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.OnTokenCanceledListener>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.OnTokenCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onCanceled(): void;
						});
						public constructor();
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class R {
						public static class: java.lang.Class<com.google.android.gms.tasks.R>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class RuntimeExecutionException {
						public static class: java.lang.Class<com.google.android.gms.tasks.RuntimeExecutionException>;
						public constructor(param0: java.lang.Throwable);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class SuccessContinuation<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.SuccessContinuation<any,any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.SuccessContinuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
						});
						public constructor();
						public then(param0: TResult): com.google.android.gms.tasks.Task<TContinuationResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export abstract class Task<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.Task<any>>;
						public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<TResult>;
						public continueWith(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public isSuccessful(): boolean;
						public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<TResult>;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public constructor();
						public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<TResult>): com.google.android.gms.tasks.Task<TResult>;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<TResult>;
						public getResult(): TResult;
						public isComplete(): boolean;
						public getResult(param0: java.lang.Class<any>): any;
						public isCanceled(): boolean;
						public getException(): java.lang.Exception;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class TaskCompletionSource<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.TaskCompletionSource<any>>;
						public trySetResult(param0: TResult): boolean;
						public getTask(): com.google.android.gms.tasks.Task<TResult>;
						public constructor();
						public constructor(param0: com.google.android.gms.tasks.CancellationToken);
						public trySetException(param0: java.lang.Exception): boolean;
						public setException(param0: java.lang.Exception): void;
						public setResult(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class TaskExecutors {
						public static class: java.lang.Class<com.google.android.gms.tasks.TaskExecutors>;
						public static MAIN_THREAD: java.util.concurrent.Executor;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class Tasks {
						public static class: java.lang.Class<com.google.android.gms.tasks.Tasks>;
						public static await(param0: com.google.android.gms.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): any;
						public static forResult(param0: any): com.google.android.gms.tasks.Task<any>;
						public static whenAllSuccess(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<any>;
						/** @deprecated */
						public static call(param0: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task<any>;
						public static whenAll(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static forException(param0: java.lang.Exception): com.google.android.gms.tasks.Task<any>;
						public static await(param0: com.google.android.gms.tasks.Task<any>): any;
						public static withTimeout(param0: com.google.android.gms.tasks.Task<any>, param1: number, param2: java.util.concurrent.TimeUnit): com.google.android.gms.tasks.Task<any>;
						public static whenAllComplete(param0: java.util.Collection<any>): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
						/** @deprecated */
						public static call(param0: java.util.concurrent.Executor, param1: java.util.concurrent.Callable<any>): com.google.android.gms.tasks.Task<any>;
						public static forCanceled(): com.google.android.gms.tasks.Task<any>;
						public static whenAllComplete(param0: androidNative.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.util.List<com.google.android.gms.tasks.Task<any>>>;
						public static whenAll(param0: androidNative.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static whenAllSuccess(param0: androidNative.Array<com.google.android.gms.tasks.Task<any>>): com.google.android.gms.tasks.Task<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zza extends com.google.android.gms.tasks.OnSuccessListener<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zza>;
						public onSuccess(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzaa extends com.google.android.gms.tasks.Continuation<any,any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzaa>;
						public then(param0: com.google.android.gms.tasks.Task<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzab extends com.google.android.gms.tasks.Continuation<any,any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzab>;
						public then(param0: com.google.android.gms.tasks.Task<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzac {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzac>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzad<T>  extends java.lang.Object /* com.google.android.gms.tasks.zzae<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzad<any>>;
						public onFailure(param0: java.lang.Exception): void;
						public onSuccess(param0: any): void;
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzae<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzae<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.zzae<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: any): void;
							onFailure(param0: java.lang.Exception): void;
							onCanceled(): void;
						});
						public constructor();
						public onSuccess(param0: any): void;
						public onFailure(param0: java.lang.Exception): void;
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzaf<T>  extends java.lang.Object /* com.google.android.gms.tasks.zzae<any>*/ {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzaf<any>>;
						public onFailure(param0: java.lang.Exception): void;
						public onSuccess(param0: any): void;
						public onCanceled(): void;
						public constructor(param0: number, param1: any /* com.google.android.gms.tasks.zzw<any>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzb extends com.google.android.gms.tasks.CancellationToken {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzb>;
						public isCancellationRequested(): boolean;
						public onCanceledRequested(param0: com.google.android.gms.tasks.OnTokenCanceledListener): com.google.android.gms.tasks.CancellationToken;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzc {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzc>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzd extends com.google.android.gms.tasks.zzq<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzd>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>, param2: any /* com.google.android.gms.tasks.zzw<any>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zze {
						public static class: java.lang.Class<com.google.android.gms.tasks.zze>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzf<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzf<any,any>>;
						public onFailure(param0: java.lang.Exception): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>, param2: any /* com.google.android.gms.tasks.zzw<any>*/);
						public onCanceled(): void;
						public onSuccess(param0: TContinuationResult): void;
						public onSuccess(param0: TResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzg {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzg>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzh extends com.google.android.gms.tasks.zzq<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzh>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzi {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzi>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzj extends com.google.android.gms.tasks.zzq<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzj>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzk {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzk>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzl extends com.google.android.gms.tasks.zzq<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzl>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzm {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzm>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzn extends com.google.android.gms.tasks.zzq<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzn>;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzo {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzo>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzp<TResult, TContinuationResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzp<any,any>>;
						public onFailure(param0: java.lang.Exception): void;
						public onCanceled(): void;
						public onSuccess(param0: TContinuationResult): void;
						public onSuccess(param0: TResult): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>, param2: any /* com.google.android.gms.tasks.zzw<any>*/);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzq<TResult>  extends java.lang.Object {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzq<any>>;
						/**
						 * Constructs a new instance of the com.google.android.gms.tasks.zzq<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							zzc(): void;
							zzd(param0: com.google.android.gms.tasks.Task<any>): void;
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzr {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzr>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzs extends com.google.android.gms.tasks.OnTokenCanceledListener {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzs>;
						public onCanceled(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzt {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzt>;
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzu {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzu>;
						public constructor();
						public execute(param0: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzv {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzv>;
						public onStop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzw<TResult>  extends com.google.android.gms.tasks.Task<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzw<any>>;
						public onSuccessTask(param0: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
						public addOnCompleteListener(param0: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnSuccessListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
						public continueWithTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public onSuccessTask(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.SuccessContinuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public getResult(): any;
						public continueWithTask(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public continueWith(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.Continuation<any,any>): com.google.android.gms.tasks.Task<any>;
						public addOnCanceledListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
						public isSuccessful(): boolean;
						public isComplete(): boolean;
						public getResult(param0: java.lang.Class<any>): any;
						public isCanceled(): boolean;
						public addOnCompleteListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
						public addOnSuccessListener(param0: java.util.concurrent.Executor, param1: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
						public getException(): java.lang.Exception;
						public addOnCanceledListener(param0: com.google.android.gms.tasks.OnCanceledListener): com.google.android.gms.tasks.Task<any>;
						public addOnCompleteListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnCompleteListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnSuccessListener(param0: com.google.android.gms.tasks.OnSuccessListener<any>): com.google.android.gms.tasks.Task<any>;
						public addOnFailureListener(param0: globalAndroid.app.Activity, param1: com.google.android.gms.tasks.OnFailureListener): com.google.android.gms.tasks.Task<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzx {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzx>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzy extends com.google.android.gms.tasks.OnCompleteListener<any> {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzy>;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
						public onComplete(param0: com.google.android.gms.tasks.Task<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module android {
			export module gms {
				export module tasks {
					export class zzz {
						public static class: java.lang.Class<com.google.android.gms.tasks.zzz>;
						public run(): void;
					}
				}
			}
		}
	}
}

//Generics information:
//com.google.android.gms.tasks.Continuation:2
//com.google.android.gms.tasks.OnCompleteListener:1
//com.google.android.gms.tasks.OnSuccessListener:1
//com.google.android.gms.tasks.SuccessContinuation:2
//com.google.android.gms.tasks.Task:1
//com.google.android.gms.tasks.TaskCompletionSource:1
//com.google.android.gms.tasks.zzad:1
//com.google.android.gms.tasks.zzae:1
//com.google.android.gms.tasks.zzaf:1
//com.google.android.gms.tasks.zzf:2
//com.google.android.gms.tasks.zzp:2
//com.google.android.gms.tasks.zzq:1
//com.google.android.gms.tasks.zzw:1

