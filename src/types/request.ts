import Method from '@/types/method';
import { Parameter } from '@/types/parameter';

interface RequestData {
  method: Method,
  date: number,
  url: string,
  headers: Parameter[] | null,
}

export default RequestData;
