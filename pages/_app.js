import { RecoilRoot } from 'recoil';
import { makeServer } from '../mock/server';
import '../styles/globals.css';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

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

function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
