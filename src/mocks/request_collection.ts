import { ref } from 'vue';
import Method from '@/types/method';
import { createDefaultParameterList } from '@/types/parameter';

const requestCollection = ref([
  {
    method: 'get',
    name: 'Get products list',
    request: {
      method: Method.Get,
      date: Date.now(),
      url: 'http://localhost:8000/test_8',
      headers: createDefaultParameterList(),
    },
  },
  {
    method: 'post',
    name: 'Create a new product',
    request: {
      method: Method.Get,
      date: Date.now(),
      url: 'http://localhost:8000/test_8',
      headers: createDefaultParameterList(),
    },
  },
  {
    name: 'Garbage',
    collection: true,
    items: [
      {
        method: 'get',
        name: 'Get products list',
        request: {
          method: Method.Get,
          date: Date.now(),
          url: 'http://localhost:8000/test_8',
          headers: createDefaultParameterList(),
        },
      },
      {
        method: 'post',
        name: 'Create a new product',
        request: {
          method: Method.Get,
          date: Date.now(),
          url: 'http://localhost:8000/test_8',
          headers: createDefaultParameterList(),
        },
      },
      {
        name: 'Garbage',
        collection: true,
        items: [
          {
            method: 'get',
            name: 'Get products list',
            request: {
              method: Method.Get,
              date: Date.now(),
              url: 'http://localhost:8000/test_8',
              headers: createDefaultParameterList(),
            },
          },
          {
            method: 'post',
            name: 'Create a new product',
            request: {
              method: Method.Get,
              date: Date.now(),
              url: 'http://localhost:8000/test_8',
              headers: createDefaultParameterList(),
            },
          },
        ],
      },
    ],
  },
]);

export default requestCollection;
