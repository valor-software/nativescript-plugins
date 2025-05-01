import { Component } from '@angular/core';
import { DemoSharedNativescriptFeedback } from '@demo/shared';

@Component({
  selector: 'demo-nativescript-feedback',
  styleUrls: ['./nativescript-feedback.component.css'],
  templateUrl: 'nativescript-feedback.component.html',
  standalone: false,
})
export class NativescriptFeedbackComponent {
  demoShared: DemoSharedNativescriptFeedback;

  ngOnInit() {
    this.demoShared = new DemoSharedNativescriptFeedback();
  }
}
