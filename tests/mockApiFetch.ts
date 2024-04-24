import nock from 'nock';
import pino from 'pino';

import { apiFetch, type TempWorksAuth } from '../src/utils/apiFetch';

const NOCK_OFF = process.env['NOCK_OFF'] == 'true';

export const logger = pino({
  level: 'trace',
});

if (NOCK_OFF) {
  if ((process.env['TEMPWORKS_ACCOUNT_SID'] ?? '') === '')
    throw new Error('Please set TEMPWORKS_ACCOUNT_SID if NOCK_OFF=true');
  if ((process.env['TEMPWORKS_AUTH_TOKEN'] ?? '') === '')
    throw new Error('Please set TEMPWORKS_AUTH_TOKEN if NOCK_OFF=true');
}

process.env['TEMPWORKS_ACCOUNT_SID'] ??= 'accountSid';
process.env['TEMPWORKS_AUTH_TOKEN'] ??= 'authToken';

export const auth: TempWorksAuth = {
  type: 'Basic',
  accountSID: process.env['TEMPWORKS_ACCOUNT_SID'],
  authToken: process.env['TEMPWORKS_AUTH_TOKEN'],
};

if (process.stdout.isTTY) {
  console.log('authToken: ', {
    auth,
  });
}

export const restClient = apiFetch({
  logger,
  auth,
});

nock.disableNetConnect();
