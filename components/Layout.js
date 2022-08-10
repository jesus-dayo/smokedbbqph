import Header from './Header/Header';
import Head from 'next/head';

export default function Layout({ full, children }) {
  return (
    <div className={'h-full'}>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <Header />
      <main className={'h-full'}>
        <div>{children}</div>
      </main>
    </div>
  );
}
