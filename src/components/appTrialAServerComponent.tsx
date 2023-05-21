import { AppTrialAClientComponent } from './appTrialAClientComponent';

export const AppTrialAServerComponent = async (): Promise<JSX.Element> => {
  return (
    <>
      <div>AppTrialA（この行はサーバーコンポーネント）</div>
      <AppTrialAClientComponent />
    </>
  );
};
