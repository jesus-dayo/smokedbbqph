import Head from 'next/head';
import Header from '../components/Header';

function HomePage() {
  return (
    <div>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default HomePage;
