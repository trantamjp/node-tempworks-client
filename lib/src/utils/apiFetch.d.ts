import type { Logger } from 'pino';

import type { paths } from '../model/tempworks';

export type TempWorksAuth = {
  type: 'Basic';
  accountSID: string;
  authToken: string;
};
export declare const apiFetch: (opts: {
  timeoutMs?: number;
  logger: Logger;
  baseUrl?: string;
  auth: TempWorksAuth | (() => Promise<TempWorksAuth>);
}) => {
  GET: import('openapi-fetch').ClientMethod<paths, 'get', `${string}/${string}`>;
  PUT: import('openapi-fetch').ClientMethod<paths, 'put', `${string}/${string}`>;
  POST: import('openapi-fetch').ClientMethod<paths, 'post', `${string}/${string}`>;
  DELETE: import('openapi-fetch').ClientMethod<paths, 'delete', `${string}/${string}`>;
  OPTIONS: import('openapi-fetch').ClientMethod<paths, 'options', `${string}/${string}`>;
  HEAD: import('openapi-fetch').ClientMethod<paths, 'head', `${string}/${string}`>;
  PATCH: import('openapi-fetch').ClientMethod<paths, 'patch', `${string}/${string}`>;
  TRACE: import('openapi-fetch').ClientMethod<paths, 'trace', `${string}/${string}`>;
  use(...middleware: import('openapi-fetch').Middleware[]): void;
  eject(...middleware: import('openapi-fetch').Middleware[]): void;
};
