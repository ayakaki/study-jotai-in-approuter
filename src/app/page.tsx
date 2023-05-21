import { HomeTemplate } from '@/components/home/homeTemplate';
import type { NextPage } from 'next';

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      {/* TODO タイトルやメタディスクリプション(13.4の新機能がある) */}
      <HomeTemplate />
    </>
  );
};

export default HomePage;
