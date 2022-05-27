import Header from './Header';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </>
  );
}
