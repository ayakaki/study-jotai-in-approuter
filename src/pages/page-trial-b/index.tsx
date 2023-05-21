import { globalNumAtom } from '@/stores/globalNumAtom';
import { useAtom } from 'jotai';
import type { NextPage } from 'next';
import Link from 'next/link';

const PageTrialA: NextPage = (): JSX.Element => {
  const [globalNum, setGlobalNum] = useAtom(globalNumAtom);

  const handlePlus = (): void => {
    setGlobalNum((value: number) => value + 1);
  };

  const handleMinus = (): void => {
    setGlobalNum((value: number) => value - 1);
  };

  return (
    <div className="pl-4">
      <h2>page-trial-b</h2>
      <div>globalNum: {globalNum}</div>
      <div>
        <button onClick={handlePlus}>インクリメント</button>
      </div>
      <div>
        <button onClick={handleMinus}>デクリメント</button>
      </div>
      <Link href="/page-trial-a">/page-trial-aへ遷移</Link>
    </div>
  );
};

export default PageTrialA;
