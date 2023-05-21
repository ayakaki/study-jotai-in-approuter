'use client';

import { AppTrialBServerComponent } from '@/components/appTrialBServerComponent';
import type { NextPage } from 'next';

const AppTrialA: NextPage = (): JSX.Element => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <AppTrialBServerComponent />
    </>
  );
};

export default AppTrialA;
