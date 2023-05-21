import { AppTrialAServerComponent } from '@/components/appTrialAServerComponent';
import type { NextPage } from 'next';

const AppTrialA: NextPage = (): JSX.Element => {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <AppTrialAServerComponent />
    </>
  );
};

export default AppTrialA;
