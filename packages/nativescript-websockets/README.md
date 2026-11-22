# @valor/nativescript-websockets

```javascript
ns plugin add @valor/nativescript-websockets
```

## Usage

### As a global polyfill

Add this to your `polyfills.ts` on angular (before importing zone.js) or on your entrypoint (app.ts, main.ts) on other flavors:

```ts
import '@valor/nativescript-websockets';
```

This installs the plugin as `global.WebSocket`, unless a `WebSocket` implementation already exists. To replace an existing one, call `installWebsocketPolyfill()` yourself:

```ts
import { installWebsocketPolyfill } from '@valor/nativescript-websockets/websocket';

installWebsocketPolyfill();
```

Beware that import order matters! If needed you can also add the plugin to your bundle directly with webpack.

### Without the polyfill

Import the class directly. Nothing global is touched:

```ts
import { WebSocket } from '@valor/nativescript-websockets/websocket';

const ws = new WebSocket('wss://example.com/socket');
```

Prefer this when you use the `ssl` options below. With the polyfill, nothing guarantees that `global.WebSocket` is this plugin (another library may have installed its own), and an implementation that ignores `ssl` would connect without your pins.

## Options

The constructor takes an optional third argument:

```ts
new WebSocket(url, protocols, {
  headers: { Authorization: 'Bearer ...' },
  ssl: { ... },
});
```

The DOM `WebSocket` type has no third argument, so import `WebSocket` (and the `WebSocketOptions` type) from `@valor/nativescript-websockets/websocket` to get it typed.

## TLS: certificate validation, pinning and custom CAs

```ts
ssl?: {
  validation?: 'system' | 'pins-only' | 'none'; // default 'system'
  pins?: Array<{ type: 'pem'; cert: string } | { type: 'sha256'; hash: string }>;
  ca?: string | string[]; // PEM
}
```

| `validation`         | Certificate checks                                                                                   | `pins`                                                                                                 | `ca`        |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ----------- |
| `'system'` (default) | Chain, hostname and expiry are validated against the system trust store, or against `ca` when given. | Optional. At least one certificate of the **validated** chain (leaf, intermediate or root) must match. | Optional    |
| `'pins-only'`        | None. The chain, hostname and expiry are not checked.                                                | Required. The server's **leaf** certificate must match.                                                | Not allowed |
| `'none'`             | None. Any server is accepted, which makes the connection open to man-in-the-middle attacks.          | Not allowed                                                                                            | Not allowed |

Pins match a certificate's **public key** (the SHA-256 of its SubjectPublicKeyInfo, the same format as OkHttp's `CertificatePinner` and HPKP). Renewing a certificate with the same key keeps the pin valid. A pin can be given as:

- `{ type: 'pem', cert }`: the plugin pins the public key of the given certificate.
- `{ type: 'sha256', hash }`: the base64 hash, which you can compute with:

  ```sh
  openssl x509 -in server.pem -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | base64
  ```

Invalid or contradictory options throw from the constructor, as does `pins` or `ca` on a `ws://` URL.

### Pinning a public server

Keep the normal validation and pin your CA's intermediate (or your own key), plus a backup, so routine renewals don't lock the app out:

```ts
new WebSocket('wss://api.example.com', [], {
  ssl: {
    pins: [
      { type: 'sha256', hash: 'primary...=' },
      { type: 'sha256', hash: 'backup...=' },
    ],
  },
});
```

### Private CA

Trust only your CA instead of the system store. Hostname and expiry are still validated, so the server certificate must list the host (or IP address) you connect to in its subjectAltName:

```ts
new WebSocket('wss://internal.example.com', [], { ssl: { ca: CA_PEM } });
```

### Self-signed certificate (including servers reached by IP address)

Accept exactly one server key, and nothing else. Since only the key is checked, this works for self-signed certificates without a subjectAltName, for IP addresses, and for long-lived certificates that iOS would otherwise reject:

```ts
new WebSocket('wss://192.168.0.10:8443', [], {
  ssl: { validation: 'pins-only', pins: [{ type: 'pem', cert: SERVER_PEM }] },
});
```

### Platform notes

`ssl` applies only to the socket it is passed to. On Android, no app configuration (such as `network_security_config.xml`) is needed.

On Android, a pin mismatch with `validation: 'pins-only'` is reported as OkHttp's `Hostname <host> not verified` error.

## License

Apache License Version 2.0
