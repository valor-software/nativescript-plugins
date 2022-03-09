export interface RemoteDevToolsProxyOptions {
  realtime?: boolean;
  hostname?: string;
  port?: number;
  autoReconnect?: boolean;
  connectTimeout?: number;
  ackTimeout?: number;
  secure?: boolean;
  defaultHosts?: string[];
}
