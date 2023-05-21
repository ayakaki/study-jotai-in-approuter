import { isString } from '@/features/common/typeGuards';
import axios from 'axios';

export const axiosFetcher = async <T>(pathname: string): Promise<T> => {
  const hostname: string | undefined = process.env.NEXT_PUBLIC_API_HOST;

  // ホスト名が文字列でない場合は例外を投げる
  if (!isString(hostname)) throw new Error('hostname is not string');

  const endpoint = hostname + pathname;

  return await axios.get(endpoint).then((res) => res.data as T);
};
