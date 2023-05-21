import { axiosFetcher } from '@/libs/axiosFetcher';
import { type Todo } from '@/types/todo';

export const fetchTodos = async (): Promise<Todo[]> =>
  await axiosFetcher('/todos');
