import RequestData from '@/types/request';
import Method from '@/types/method';
import { createDefaultParameterList } from '@/types/parameter';

const requestHistory: RequestData[] = [
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/api_1',
    headers: createDefaultParameterList(),
    body: 'qwe',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test',
    headers: createDefaultParameterList(),
    body: 'qwe1',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_2',
    headers: createDefaultParameterList(),
    body: 'qwe2',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_3',
    headers: createDefaultParameterList(),
    body: 'qwe3',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_4',
    headers: createDefaultParameterList(),
    body: 'qwe4',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_5',
    headers: createDefaultParameterList(),
    body: 'qwe5',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_6',
    headers: createDefaultParameterList(),
    body: 'qwe',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_7',
    headers: createDefaultParameterList(),
    body: 'qwe',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_8',
    headers: createDefaultParameterList(),
    body: 'qwe',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_9',
    headers: createDefaultParameterList(),
    body: 'qwe',
  },
  {
    method: Method.Get,
    date: Date.now(),
    url: 'http://localhost:8000/test_10',
    headers: createDefaultParameterList(),
    body: 'qwe',
  },
];

export default requestHistory;
