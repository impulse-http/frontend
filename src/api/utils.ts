import { Parameter } from '@/types/parameter';

const baseUrl = 'http://localhost:8090';

const sharedRequestConf: RequestInit = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
};

/* eslint-disable-next-line */
function jsonRequestConf(body: any): RequestInit {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  };
}

function parseHeaders(headers: { string: string[] } | null): Parameter[] {
  if (!headers) {
    return [];
  }
  return Object
    .entries(headers)
    .map(([key, values]) => values.map((value) => ({
      key,
      value,
      uniqueId: Math.random(),
    })))
    .flat();
}

function serializeHeaders(headers: Parameter[]): { string: string[] } {
  const entries = headers
    .filter((it) => it.key)
    .map((header) => ([header.key, [header.value]]));
  return Object.fromEntries(entries);
}

export {
  baseUrl,
  sharedRequestConf,
  jsonRequestConf,
  parseHeaders,
  serializeHeaders,
};
