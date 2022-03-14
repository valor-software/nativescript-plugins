import { DemoSharedBase } from '../utils';
import '@valor/nativescript-websockets';
import { isAndroid } from '@nativescript/core';

export class DemoSharedNativescriptWebsockets extends DemoSharedBase {
  testIt() {
    let wsSrc = 'ws://localhost:9898';
    if (isAndroid) {
      wsSrc = 'ws://10.0.2.2:9898';
    }
    console.log('test nativescript-websockets!');
    const ws = new WebSocket(wsSrc);
    ws.onopen = (ev) => {
      console.log('onopen', ev);
      ws.send('what');
      const enc = new TextEncoder();
      ws.send(enc.encode('this is an arraybuffer'));
    };
    ws.onmessage = (ev) => {
      console.log('MESSAGE RECEIVED!', ev.data);
      console.log(ev.data.constructor?.name, ev.data.getClass?.()?.getSimpleName(), typeof ev.data);
      if (ev.data instanceof ArrayBuffer) {
        console.log('ArrayBuffer', Array.from(new Uint8Array(ev.data)));
      }
    };
    ws.onclose = (ev) => {
      console.log('onclose', ev);
    };
    ws.onerror = (ev) => {
      console.log('onerror', ev);
    };
  }
}
