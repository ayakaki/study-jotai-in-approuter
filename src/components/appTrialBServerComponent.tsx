import { AppTrialBClientComponent } from './appTrialBClientComponent';

export const AppTrialBServerComponent = async (): Promise<JSX.Element> => {
  return (
    <>
      <div>AppTrialB（この行はサーバーコンポーネント）</div>
      <AppTrialBClientComponent />
    </>
  );
};
