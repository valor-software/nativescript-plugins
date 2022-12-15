import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptInAppReviewComponent } from './nativescript-in-app-review.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptInAppReviewComponent }])],
  declarations: [NativescriptInAppReviewComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptInAppReviewModule {}
