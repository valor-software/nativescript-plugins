import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptViewShotComponent } from './nativescript-view-shot.component';

@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptViewShotComponent }]), NativeScriptFormsModule],
  declarations: [NativescriptViewShotComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptViewShotModule {}
