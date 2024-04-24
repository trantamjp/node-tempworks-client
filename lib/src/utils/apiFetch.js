'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.apiFetch = void 0;
const openapi_fetch_1 = __importDefault(require('openapi-fetch'));
const DEFAULT_API_TIMEOUT_MS = 60000; // 1 min in ms
const fetchFactory = (opts) =>
  async function fetchWithTimeout(...[input, init = {}]) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), opts.timeoutMs ?? DEFAULT_API_TIMEOUT_MS);
    const request = new Request(input, {
      ...init,
      signal: controller.signal,
    });
    const loggingHeaders = {};
    request.headers.forEach(
      (v, k) =>
        (loggingHeaders[k] = ['authorization', 'x-tw-token'].includes(k.toLowerCase()) ? '***' + v.slice(-3) : v),
    );
    const requestURL = new URL(request.url);
    const logger = opts.logger.child(
      {
        request: {
          method: request.method,
          origin: requestURL.origin,
          pathname: requestURL.pathname,
          headers: loggingHeaders,
          query: requestURL.search,
          body: await request.clone().text(),
        },
      },
      { msgPrefix: `${request.method} ${request.url} ` },
    );
    const response = await fetch(request);
    clearTimeout(id);
    const responseHeaders = {};
    for (const [k, v] of response.headers.entries()) {
      responseHeaders[k] = v;
    }
    if (!response.ok) {
      logger.error(
        {
          response: {
            status: response.status,
            body: await response.clone().text(),
            headers: responseHeaders,
          },
        },
        'Failed rest api request',
      );
    } else
      logger.info(
        {
          response: {
            status: response.status,
            body: await response.clone().text(),
            headers: responseHeaders,
          },
        },
        `Rest api response`,
      );
    return response;
  };
const apiFetch = (opts) => {
  const { baseUrl = 'https://api.ontempworks.com', timeoutMs, logger } = opts;
  const client = (0, openapi_fetch_1.default)({ baseUrl, fetch: fetchFactory({ timeoutMs, logger }) });
  client.use({
    async onRequest(request) {
      const auth = typeof opts.auth === 'function' ? await opts.auth() : opts.auth;
      let authHeader;
      switch (auth.type) {
        case 'Basic':
          authHeader = 'Basic ' + Buffer.from(`${auth.accountSID}:${auth.authToken}`).toString('base64');
          break;
        default: {
          logger.error({ ...auth, authToken: '***' + (auth.authToken ?? '').slice(-3) }, 'provided auth type invalid');
          throw new Error('provided auth type invalid');
        }
      }
      request.headers.set('Authorization', authHeader);
      return request;
    },
  });
  return client;
};
exports.apiFetch = apiFetch;
//# sourceMappingURL=apiFetch.js.map
