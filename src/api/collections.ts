import { baseUrl, jsonRequestConf, sharedRequestConf } from '@/api/utils';

interface Collection {
  name: string
}

interface StoredCollection {
  id: number,
  name: string,
}

interface ListCollection {
  id: number,
  name: string,
  requests: number,
}

async function getCollection(id: number): Promise<StoredCollection> {
  const response = await fetch(`${baseUrl}/collections/${id}/`, {
    method: 'GET',
    ...sharedRequestConf,
  });
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
  };
}

async function createCollection(collection: Collection): Promise<StoredCollection> {
  const response = await fetch(`${baseUrl}/collections/`, {
    method: 'POST',
    ...sharedRequestConf,
    ...jsonRequestConf({
      name: collection.name,
    }),
  });
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
  };
}

async function deleteCollection(id: number): Promise<void> {
  await fetch(`${baseUrl}/collections/${id}/`, {
    method: 'DELETE',
    ...sharedRequestConf,
  });
}

async function updateCollection(id: number, collection: Collection): Promise<StoredCollection> {
  const response = await fetch(`${baseUrl}/collections/${id}/`, {
    method: 'PUT',
    ...sharedRequestConf,
    ...jsonRequestConf({
      name: collection.name,
    }),
  });
  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
  };
}

async function listCollections(): Promise<ListCollection> {
  const response = await fetch(`${baseUrl}/collections/`, {
    method: 'GET',
    ...sharedRequestConf,
  });
  const data = await response.json();
  // eslint-disable-next-line
  return data.map((c: any) => ({
    id: c.id,
    name: c.name,
    requests: c.requests,
  }));
}

export {
  getCollection,
  listCollections,
  createCollection,
  updateCollection,
  deleteCollection,
};
