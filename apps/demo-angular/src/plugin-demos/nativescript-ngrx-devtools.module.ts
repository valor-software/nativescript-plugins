import { Component, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { Label } from '@nativescript/core';
import { Store } from '@ngrx/store';
import { decrement, increment, incrementWithDelay, RootState, selectCount, unserializableAction } from './nativescript-ngrx-devtools.ngrx';

@Component({
  selector: 'nativescript-ngrx-devtools',
  template: `<StackLayout>
    <Label fontSize="30" [text]="count$ | async"></Label>
    <button (tap)="increment()" text="Increment"></button>
    <button (tap)="decrement()" text="Decrement"></button>
    <button (tap)="incrementWithDelay(5000)" text="Increment in 5 seconds"></button>
    <button (tap)="unserializableAction()" text="Dispatch unserializable action"></button>
  </StackLayout>`,
  styles: [
    `
      button {
        font-size: 20;
      }
    `,
  ],
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

  incrementWithDelay(delay: number) {
    this.store.dispatch(incrementWithDelay(delay));
  }

  unserializableAction() {
    const label = new Label();
    this.store.dispatch(unserializableAction(label));
  }
}

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativeScriptNgRxDevtoolsComponent }])],
  declarations: [NativeScriptNgRxDevtoolsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativeScriptNgRxDevtoolsDemoModule {}
