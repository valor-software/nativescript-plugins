import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFeedbackComponent } from './nativescript-feedback.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFeedbackComponent }])],
  declarations: [NativescriptFeedbackComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFeedbackModule {}
