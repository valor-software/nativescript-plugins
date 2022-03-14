import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Store } from '@ngrx/store';
import { decrement, increment, RootState, selectCount } from './nativescript-ngrx-devtools.ngrx';

@Component({
  selector: 'nativescript-ngrx-devtools',
  template: `<StackLayout>
    <Label fontSize="30" [text]="count$ | async"></Label>
    <button (tap)="increment()" text="Increment"></button>
    <button (tap)="decrement()" text="Decrement"></button>
  </StackLayout>`,
})
export class NativeScriptNgRxDevtoolsComponent {
  count$ = this.store.select(selectCount);
  constructor(public store: Store<RootState>) {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativeScriptNgRxDevtoolsComponent }])],
  declarations: [NativeScriptNgRxDevtoolsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptNgRxDevtoolsDemoModule {}
