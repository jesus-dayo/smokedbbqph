import Head from 'next/head';
import Header from '../components/Header';
import Section from '../components/Section';
import ImageGallery from '../components/ImageGallery';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>SmokedBBQ</title>
        <link rel={'icon'} href={'/favicon.ico'} />
      </Head>
      <div>
        <Header />
        <Section>
          <div className="animate-pulse bg-slate-200 sm:text-sm md:text-lg p-2">
            Now Accepting Orders within Muntinlupa
          </div>
        </Section>
        <Section>
          <ImageGallery
            images={[
              {
                img: '/charcoal_wood.jpg',
                name: 'charcoalWoodGriller',
                title: 'Smoked for hours with charcoal and maple wood.',
              },
              {
                img: '/beef_brisket.jpg',
                name: 'beefBrisket',
                title: 'Smoked Beef Brisket for 20hrs',
              },
            ]}
          />
        </Section>
      </div>
    </div>
  );
};

export default HomePage;
