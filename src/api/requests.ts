import {
  baseUrl,
  sharedRequestConf,
  jsonRequestConf,
  parseHeaders,
  serializeHeaders,
} from '@/api/utils';
import { Parameter } from '@/types/parameter';
import RequestData from '@/types/request';
import Method from '@/types/method';

interface RequestType {
  url: string,
  method: string,
  body: string,
  headers: Parameter[],
}

interface ResponseType {
  headers: Parameter[],
  body: string,
}

async function makeRequest(request: RequestType): Promise<ResponseType> {
  const populatedHeaders = request.headers.filter((p) => p.key != null && p.value != null);
  const headers = serializeHeaders(populatedHeaders);
  const r = {
    ...request,
    headers,
  };
  const response = await fetch(`${baseUrl}/requests/bare/make/`, {
    method: 'POST',
    ...sharedRequestConf,
    ...jsonRequestConf({ request: r }),
  });
  const data = await response.json();
  const ret = {
    headers: parseHeaders(data.response.headers),
    body: data.response.body,
  };
  return ret;
}

async function getHistory(): Promise<RequestData[]> {
  const response = await fetch(`${baseUrl}/requests/history/`, {
    method: 'GET',
    ...sharedRequestConf,
  });
  const data = await response.json();
  // eslint-disable-next-line
  return data.history.map((entry: any) => ({
    id: entry.id,
    method: entry.request.method,
    date: Date.parse(entry.created_at),
    url: entry.request.url,
    headers: parseHeaders(entry.request.headers),
    body: entry.request.body,
  }));
}

async function deleteRequest(id: number): Promise<void> {
  await fetch(`${baseUrl}/requests/${id}/`, {
    method: 'DElETE',
    ...sharedRequestConf,
  });
}

interface RequestEntity {
  id: number | null,
  name: string,
  url: string,
  method: Method,
  body: string,
  headers: Parameter[],
}

async function updateRequest(id: number, request: RequestEntity): Promise<void> {
  await fetch(`${baseUrl}/requests/${id}/`, {
    method: 'PUT',
    ...sharedRequestConf,
    ...jsonRequestConf({
      name: request.name,
      request: {
        url: request.url,
        method: request.method,
        body: request.body,
        headers: serializeHeaders(request.headers),
      },
    }),
  });
}

async function listRequests(collectionId: number): Promise<RequestEntity[]> {
  const response = await fetch(`${baseUrl}/collections/${collectionId}/requests/`, {
    method: 'GET',
    ...sharedRequestConf,
  });
  console.log('hoh');
  const data = await response.json();
  // eslint-disable-next-line
  return data.map((req: any) => ({
    id: req.id,
    name: req.name,
    url: req.request.url,
    method: req.request.method,
    body: req.request.body,
    headers: parseHeaders(req.request.headers),
  }));
}

interface NewRequestEntity {
  name: string,
  url: string,
  method: Method,
  body: string,
  headers: Parameter[],
}

async function newRequest(collectionId: number, request: NewRequestEntity): Promise<RequestEntity> {
  console.log(request);
  const response = await fetch(`${baseUrl}/collections/${collectionId}/requests/`, {
    method: 'POST',
    ...sharedRequestConf,
    ...jsonRequestConf({
      name: request.name,
      request: {
        url: request.url,
        body: request.body,
        headers: serializeHeaders(request.headers),
        method: request.method,
      },
    }),
  });
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    url: data.request.url,
    method: data.request.method,
    body: data.request.body,
    headers: data.request.headers,
  };
}

async function getRequest(id: number): Promise<RequestEntity> {
  const response = await fetch(`${baseUrl}/requests/${id}/`, {
    method: 'GET',
    ...sharedRequestConf,
  });
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    url: data.request.url,
    method: data.request.method,
    body: data.request.body,
    headers: parseHeaders(data.request.headers),
  };
}

export {
  makeRequest,
  getHistory,
  newRequest,
  deleteRequest,
  updateRequest,
  listRequests,
  getRequest,

  RequestEntity,
  RequestData,
  RequestType,
};
