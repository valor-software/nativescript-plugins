import { installWebsocketPolyfill } from './websocket';

if (typeof global.WebSocket === 'undefined') {
  installWebsocketPolyfill();
}
