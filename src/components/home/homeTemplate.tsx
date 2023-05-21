import { Suspense } from 'react';
import { UserTodos } from './userTodos';

export const HomeTemplate: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>TODOリスト</h1>
      <Suspense fallback={<>ローディング中。。</>}>
        {/* @ts-expect-error Server Component */}
        <UserTodos />
      </Suspense>
    </div>
  );
};
