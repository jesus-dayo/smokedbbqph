import Header from '../Header/Header';
import Head from 'next/head';

export default function Layout({ medium, children }) {
  return (
    <div className={'h-full'}>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/icon.png'} />
      </Head>
      <Header />
      <main className={`${medium ? 'max-h-auto h-auto' : 'h-full'} box-border`}>
        <div
          className={`${medium ? 'max-h-auto h-auto' : 'h-full'} box-border`}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
