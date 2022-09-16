import { DemoSharedBase } from '../utils';
import { BarcodeScanner } from '@valor/nativescript-barcodescanner';

export class DemoSharedNativescriptBarcodescanner extends DemoSharedBase {
  async testIt() {
    console.log('test nativescript-barcodescanner!');
    const scanner = new BarcodeScanner();

    const available = await scanner.available();
    console.log('IsAvailable', available);

    if (available) {
      let hasPermission = await scanner.hasCameraPermission();
      console.log('hasPermission', hasPermission);
      if (!hasPermission) {
        try {
          await scanner.requestCameraPermission();
          hasPermission = true;
          console.log('got permission!');
        } catch (e) {
          console.log('Failed getting permission', e);
          hasPermission = false;
        }
      }
      if (hasPermission) {
        const result = await scanner.scan({});
        console.log('scanned', result);
      }
    }
  }
}
