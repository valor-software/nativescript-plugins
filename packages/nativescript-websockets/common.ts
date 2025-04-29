export type CloseEvent =
  | {
      code: number;
      reason: string;
      wasClean: boolean;
    }
  | ErrorEvent;

export type ErrorEvent = { message: string };

export type MessageEvent = { data: any };

export type WebSocketEventType = 'open' | 'close' | 'error' | 'message' | 'ping' | 'pong';

export type HeaderType = { headers: { [key: string]: unknown } };

export class WebSocketEvent {
  constructor(type: 'open');
  constructor(type: 'message', eventInitDict: MessageEvent);
  constructor(type: 'close', eventInitDict: CloseEvent);
  constructor(type: 'error', eventInitDict: ErrorEvent);
  constructor(public type: WebSocketEventType, eventInitDict?: CloseEvent | ErrorEvent | MessageEvent) {
    Object.assign(this, eventInitDict);
  }
}

export type CertificateValidation = 'system' | 'pins-only' | 'none';

export type PinnedPublicKey =
  | {
      type: 'pem';
      /** PEM certificate whose public key is pinned. */
      cert: string;
    }
  | {
      type: 'sha256';
      /** Base64 SHA-256 of the DER-encoded SubjectPublicKeyInfo. */
      hash: string;
    };

export interface WebSocketSslOptions {
  /**
   * - `'system'` (default): normal chain, hostname and expiry validation. With `pins`, at least one certificate of the validated chain must match a pin.
   * - `'pins-only'`: no chain, hostname or expiry validation; the server's leaf certificate must match one of `pins`.
   * - `'none'`: no validation at all.
   */
  validation?: CertificateValidation;
  pins?: PinnedPublicKey[];
  /** PEM root certificates that replace the system trust store. Only valid with `validation: 'system'`. */
  ca?: string | string[];
}

export interface ResolvedSslOptions {
  validation: CertificateValidation;
  /** Base64 SHA-256 hashes of SubjectPublicKeyInfo. */
  pinHashes: string[];
  /** Base64 DER certificates whose public key is pinned. */
  pinCertificates: string[];
  /** Base64 DER root certificates. */
  ca: string[];
}

const PEM_CERTIFICATE = /-----BEGIN CERTIFICATE-----([\s\S]*?)-----END CERTIFICATE-----/g;
const BASE64 = /^[A-Za-z0-9+/]+={0,2}$/;
const SHA256_BASE64 = /^[A-Za-z0-9+/]{43}=$/;

/** Returns the base64 DER body of every certificate in a PEM string. */
export function parsePemCertificates(pem: string): string[] {
  if (typeof pem !== 'string') {
    throw new TypeError('Expected a PEM certificate string');
  }
  const certificates: string[] = [];
  for (const match of pem.matchAll(PEM_CERTIFICATE)) {
    const body = match[1].replace(/\s+/g, '');
    if (!BASE64.test(body)) {
      throw new TypeError('Invalid PEM certificate');
    }
    certificates.push(body);
  }
  if (certificates.length === 0) {
    throw new TypeError('No PEM certificate found');
  }
  return certificates;
}

export function resolveSslOptions(url: string, ssl: WebSocketSslOptions | undefined): ResolvedSslOptions | undefined {
  if (!ssl) {
    return undefined;
  }
  const validation = ssl.validation ?? 'system';
  if (validation !== 'system' && validation !== 'pins-only' && validation !== 'none') {
    throw new TypeError(`Invalid ssl.validation '${validation}'`);
  }

  const resolved: ResolvedSslOptions = { validation, pinHashes: [], pinCertificates: [], ca: [] };
  for (const pin of ssl.pins ?? []) {
    if (pin?.type === 'sha256') {
      if (typeof pin.hash !== 'string' || !SHA256_BASE64.test(pin.hash)) {
        throw new TypeError(`Invalid sha256 pin '${pin.hash}': expected the base64 SHA-256 of a SubjectPublicKeyInfo`);
      }
      resolved.pinHashes.push(pin.hash);
    } else if (pin?.type === 'pem') {
      resolved.pinCertificates.push(...parsePemCertificates(pin.cert));
    } else {
      throw new TypeError(`Invalid pin type '${(pin as { type?: unknown })?.type}'`);
    }
  }
  for (const ca of ssl.ca === undefined ? [] : Array.isArray(ssl.ca) ? ssl.ca : [ssl.ca]) {
    resolved.ca.push(...parsePemCertificates(ca));
  }

  const hasPins = resolved.pinHashes.length + resolved.pinCertificates.length > 0;
  if (validation === 'none' && (hasPins || resolved.ca.length)) {
    throw new TypeError("ssl.pins and ssl.ca can't be used with validation 'none'");
  }
  if (validation === 'pins-only') {
    if (!hasPins) {
      throw new TypeError("validation 'pins-only' requires at least one entry in ssl.pins");
    }
    if (resolved.ca.length) {
      throw new TypeError("ssl.ca can't be used with validation 'pins-only'");
    }
  }
  if ((hasPins || resolved.ca.length) && !/^(wss|https):/i.test(url)) {
    throw new TypeError('ssl.pins and ssl.ca require a wss:// URL');
  }
  return resolved;
}
