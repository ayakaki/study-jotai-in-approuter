'use client';

import { useTodo } from '@/hooks/useTodo';
import { type Todo } from '@/types/todo';
import { type FC } from 'react';

type Props = {
  id: number;
};

export const UserTodo: FC<Props> = (props: Props): JSX.Element => {
  const todo = useTodo<Todo>(props.id, 1);

  return (
    <div className="flex container mx-auto">
      <div>{todo != null ? `${todo.id}: ${todo.title}` : ''}</div>
    </div>
  );
};
