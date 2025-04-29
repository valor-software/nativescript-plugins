import { Injectable, NgModule } from '@angular/core';
import { createAction, createReducer, createSelector, on, Store, StoreModule } from '@ngrx/store';
import { Actions, createEffect, EffectsModule, ofType } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NativeScriptNgRxDevtoolsModule } from '@valor/nativescript-ngrx-devtools';
import { mapTo, mergeMap } from 'rxjs/operators';
import { timer } from 'rxjs';

export interface CountState {
  count: number;
}

export interface RootState {
  counter: CountState;
}

export const increment = createAction('[Counter] Increment', (amount = 1) => ({ amount }));
export const decrement = createAction('[Counter] Decrement', (amount = 1) => ({ amount }));

export const incrementWithDelay = createAction('[Counter] Increment with Delay', (delay: number, amount = 1) => ({ delay, amount }));
export const unserializableAction = createAction('[Counter] Unserializable action', (obj: unknown) => ({ obj }));

export const initialState: CountState = { count: 0 };

export const reducer = createReducer(
  {
    count: 0,
  },
  on(increment, (state, action) => ({ ...state, count: state.count + action.amount })),
  on(decrement, (state, action) => ({ ...state, count: state.count - action.amount })),
);

export const selectCounter = (state: RootState) => state.counter;

export const selectCount = createSelector(selectCounter, (counter) => counter.count);

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  increment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(incrementWithDelay),
      mergeMap((action) => timer(action.delay).pipe(mapTo(increment(action.amount)))),
    ),
  );
}

@NgModule({
  imports: [
    StoreModule.forRoot(
      {
        counter: reducer,
      },
      {
        initialState: {
          counter: initialState,
        },
        runtimeChecks: {
          strictActionImmutability: false, // prevent crash on unserializableAction
        },
      },
    ),
    EffectsModule.forRoot([CounterEffects]),
    ...(__DEV__
      ? [
          StoreDevtoolsModule.instrument({
            maxAge: 20,
            actionSanitizer: (action, id) => {
              if (action.type === unserializableAction.type) {
                return { ...action, obj: '<sanitized object>' };
              }
              return action;
            },
            connectInZone: true,
          }),
          NativeScriptNgRxDevtoolsModule.forRoot(),
        ]
      : []),
  ],
  exports: [StoreModule],
})
export class AppNgRxModule {}
