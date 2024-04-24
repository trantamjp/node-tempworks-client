import nock, { ReplyHeaders } from 'nock';

export function createNockScopes(
  opts: {
    request: {
      method: string;
      origin: string;
      pathname: string;
      headers?: Record<string, unknown>;
      query?: string | URLSearchParams;
      body?: string | object;
    };
    response: {
      status: number;
      body?: string | Record<string, unknown>;
      headers?: ReplyHeaders;
    };
  }[],
) {
  return opts.map(({ request, response }) => {
    const intercept = nock(request.origin).intercept(
      request.pathname ?? '',
      request.method,
      typeof request.body === 'string' ? request.body : JSON.stringify(request.body),
    );
    if (request.query)
      intercept.query(request.query instanceof URLSearchParams ? request.query : new URLSearchParams(request.query));

    return intercept.reply(response.status, response.body, response.headers);
  });
}
