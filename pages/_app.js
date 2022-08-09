import { RecoilRoot } from 'recoil';
import { makeServer } from '../mock/server';
import '../styles/globals.css';

makeServer(process.env.NEXT_PUBLIC_ENV);

function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default App;
