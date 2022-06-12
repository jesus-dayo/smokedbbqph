import Header from './Header';
import Head from 'next/head';

export default function Layout({ full, children }) {
  return (
    <>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <Header />
      <main className={`${full ? 'h-screen' : ''}`}>
        <div className={`${full ? 'h-screen' : ''}`}>{children}</div>
      </main>
    </>
  );
}
