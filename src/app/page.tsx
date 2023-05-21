import type { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = (): JSX.Element => {
  return (
    <>
      <h2>AppRouter</h2>
      <ul className="pl-4">
        <li>
          <Link href="/app-trial-a">/app-trial-a</Link>
        </li>
        <li>
          <Link href="/app-trial-b">/app-trial-b</Link>
        </li>
      </ul>
      <h2>PagesRouter</h2>
      <ul className="pl-4">
        <li>
          <Link href="/page-trial-a">/page-trial-a</Link>
        </li>
        <li>
          <Link href="/page-trial-b">/page-trial-b</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
