import { NgModule } from '@angular/core';
import { createAction, createReducer, createSelector, on, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NativeScriptNgRxDevtoolsModule } from '@valor/nativescript-ngrx-devtools';

export interface CountState {
  count: number;
}

export interface RootState {
  counter: CountState;
}

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');

export const initialState: CountState = { count: 0 };

export const reducer = createReducer(
  {
    count: 0,
  },
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);

export const selectCounter = (state: RootState) => state.counter;

export const selectCount = createSelector(selectCounter, (counter) => counter.count);

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
      }
    ),
    ...(__DEV__ ? [StoreDevtoolsModule.instrument({ maxAge: 20 }), NativeScriptNgRxDevtoolsModule.forRoot()] : []),
  ],
  exports: [StoreModule],
})
export class AppNgRxModule {}
