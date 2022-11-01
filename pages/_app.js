import { RecoilRoot } from 'recoil';
import { makeServer } from '../mock/server';
import '../styles/globals.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Script from 'next/script';

makeServer(process.env.NEXT_PUBLIC_ENV);

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export const G_TRACKING_ID = 'G-H21XR297LE';

function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${G_TRACKING_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${G_TRACKING_ID}', {
            page_view: window.location.pathname,
            app_name: 'smokebbqgrillph'
          });
        `}
      </Script>
      <RecoilRoot>
        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
