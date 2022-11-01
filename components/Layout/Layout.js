import Header from '../Header/Header';
import Head from 'next/head';
import Script from 'next/script';
import { G_TRACKING_ID } from '../../pages/_app';

export default function Layout({ medium, children }) {
  return (
    <div className={'h-full'}>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${G_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${G_TRACKING_ID}');
        `}
      </Script>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/favicon.png'} />
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
