export interface RemoteDevToolsProxyOptions {
  hostname?: string;
  port?: number;
  autoReconnect?: boolean;
  connectTimeout?: number;
  ackTimeout?: number;
  secure?: boolean;
  defaultHosts?: string[];
}
