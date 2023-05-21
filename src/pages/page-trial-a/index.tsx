import { globalNumAtom } from '@/stores/globalNumAtom';
import { useAtom } from 'jotai';
import type { NextPage } from 'next';
import Link from 'next/link';

const pageTrialA: NextPage = (): JSX.Element => {
  const [globalNum, setGlobalNum] = useAtom(globalNumAtom);

  const handlePlus = (): void => {
    setGlobalNum((value: number) => value + 1);
  };

  const handleMinus = (): void => {
    setGlobalNum((value: number) => value + 1);
  };

  return (
    <div className="pl-4">
      <h2>page-trial-a</h2>
      <div>globalNum: {globalNum}</div>
      <div>
        <button onClick={handlePlus}>インクリメント</button>
      </div>
      <div>
        <button onClick={handleMinus}>デクリメント</button>
      </div>
      <Link href="/page-trial-b">/page-trial-aへ遷移</Link>
    </div>
  );
};

export default pageTrialA;
