import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'nativescript-barcodescanner',
    },
    {
      name: 'nativescript-feedback',
    },
    {
      name: 'nativescript-ngrx-devtools',
    },
    {
      name: 'nativescript-view-shot',
    },
    {
      name: 'nativescript-websockets',
    },
  ];
}
