# nativescript-ngrx-devtools

This plugin allows you to use NgRx devtools with NativeScript.

## Installation

Firstly, run:

```bash
npm i @valor/nativescript-ngrx-devtools
```

Import `@valor/nativescript-websockets` in your `polyfills.ts`:

```ts
/**
 * NativeScript Polyfills
 */

// Install @nativescript/core polyfills (XHR, setTimeout, requestAnimationFrame)
import '@nativescript/core/globals';

import '@valor/nativescript-websockets'; // add this line!

// Install @nativescript/angular specific polyfills
import '@nativescript/angular/polyfills';

/**
 * Zone.js and patches
 */
// Add pre-zone.js patches needed for the NativeScript platform
import '@nativescript/zone-js/dist/pre-zone-polyfills';

// Zone JS is required by default for Angular itself
import 'zone.js';

// Add NativeScript specific Zone JS patches
import '@nativescript/zone-js';
```

Then add `NativeScriptNgRxDevtoolsModule.forRoot()` to your `AppModule` imports:

```typescript
@NgModule({
  imports: [
    StoreModule.forRoot(...),
    StoreDevtoolsModule.instrument(),
    NativeScriptNgRxDevtoolsModule.forRoot(),
  ],
  exports: [StoreModule],
})
export class AppModule {}
```

By default the plugin will try to connect to the devtools on port 8000 on the default IPs provided by NativeScript (`__NS_DEV_HOST_IPS__`), but this can be configured by passing an options object to `NativeScriptNgRxDevtoolsModule.forRoot()`.

To start debugging install the latest `@redux-devtools/cli`:

```bash
npm i -g @redux-devtools/cli
```

Then open them:

```bash
redux-devtools --open
```

