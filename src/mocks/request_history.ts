import RequestData from '@/types/request';
import Method from '@/types/method';
import { createDefaultParameterList } from '@/types/parameter';

const requestHistory: RequestData[] = [
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/api_1',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_2',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_3',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_4',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_5',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_6',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_7',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_8',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_9',
    headers: createDefaultParameterList(),
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_10',
    headers: createDefaultParameterList(),
  },
];

export default requestHistory;
