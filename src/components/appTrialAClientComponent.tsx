'use client';

import { globalNumAtom } from '@/stores/globalNumAtom';
import { useAtom } from 'jotai';
import Link from 'next/link';

export const AppTrialAClientComponent = (): JSX.Element => {
  const [globalNum, setGlobalNum] = useAtom(globalNumAtom);

  const handlePlus = (): void => {
    setGlobalNum((value: number) => value + 1);
  };

  const handleMinus = (): void => {
    setGlobalNum((value: number) => value - 1);
  };

  return (
    <div className="pl-4">
      <h2>以下はクライアントコンポーネント</h2>
      <div>globalNum: {globalNum}</div>
      <div>
        <button onClick={handlePlus}>インクリメント</button>
      </div>
      <div>
        <button onClick={handleMinus}>デクリメント</button>
      </div>
      <Link href="/app-trial-b">/app-trial-bへ遷移</Link>
    </div>
  );
};
