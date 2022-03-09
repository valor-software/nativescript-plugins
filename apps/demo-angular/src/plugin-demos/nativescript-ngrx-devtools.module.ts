import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { createAction, createReducer, createSelector, on, Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NativescriptNgrxDevtoolsModule } from '@valor/nativescript-ngrx-devtools';

interface CountState {
  count: number;
}

interface RootState {
  counter: CountState;
}

const increment = createAction('[Counter] Increment');
const decrement = createAction('[Counter] Decrement');
const initialize = createAction('[Counter] Initialize');

const initialState: CountState = { count: 0 };

const reducer = createReducer(
  {
    count: 0,
  },
  on(increment, (state) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state) => ({ ...state, count: state.count - 1 }))
);

const selectCounter = (state: RootState) => state.counter;

const selectCount = createSelector(selectCounter, (counter) => counter.count);

@Component({
  selector: 'nativescript-ngrx-devtools',
  template: `<StackLayout>
    <Label fontSize="30" [text]="count$ | async"></Label>
    <button (tap)="increment()" text="Increment"></button>
    <button (tap)="decrement()" text="Decrement"></button>
  </StackLayout>`,
})
export class NativeScriptNgrxDevtoolsComponent {
  count$ = this.store.select(selectCount);
  constructor(public store: Store<RootState>) {
    this.store.dispatch(initialize());
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild([{ path: '', component: NativeScriptNgrxDevtoolsComponent }]),
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
    StoreDevtoolsModule.instrument({ maxAge: 20 }),
    NativescriptNgrxDevtoolsModule.forRoot({}),
  ],
  declarations: [NativeScriptNgrxDevtoolsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptNgrxDevtoolsDemoModule {}
