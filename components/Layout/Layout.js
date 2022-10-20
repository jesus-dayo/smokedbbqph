import Header from '../Header/Header';
import Head from 'next/head';

export default function Layout({ medium, children }) {
  return (
    <div className={'h-full'}>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/iconOnly.png'} />
        <meta
          name="google-site-verification"
          content="mtTiWMy_eswEz02jbwbsDYG6bCjY6mfenTvfD_m1zIc"
        />
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
