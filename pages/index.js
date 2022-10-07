import Section from '../components/Section/Section';
import Image from 'next/image';
import Button from '../components/Button/Button';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
// import ContactUs from '../sections/contact-us/ContactUs';

const HomePage = () => {
  const router = useRouter();

  const routeToOrderPage = () => {
    router.push('/order');
  };

  return (
    <Layout full>
      <div className="flex flex-col text-slate-50 text-opacity-100">
        <Section>
          <div className="w-full h-64 md:h-96 p-4 md:p-10 m-0 bg-slate-700 block bg-no-repeat bg-cover md:bg-cover md:bg-center bg-[url('/ribs2.jpg')]">
            <div className="p-4 w-full flex gap-9 justify-between md:justify-around md:p-5">
              <div className="p-5 md:p-14 bg-slate-200 opacity-70">
                <div
                  className="h-20 md:h-28 md:w-full
                    text-center font-serif"
                >
                  <p className="text-slate-900 text-sm md:text-5xl font-extrabold font-serif ">
                    The Best Smoked Barbeque Ribs in Town
                  </p>
                  <p className="text-slate-800 text-sm text-opacity-100 md:text-4xl font-serif">
                    Smoked Grilled to Perfection
                  </p>
                </div>
              </div>
              <div className="h-14 md:h-14 flex justify-end  text-xs md:w-6/12 text-white md:text-black text-center font-serif text-md md:text-2xl">
                <Button onClick={routeToOrderPage}>Order Now</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="bg-gradient-to-r from-[#706f6f] to-[#888] h-full flex flex-col md:flex-row justify-evenly p-2 md:p-10">
            <div className="w-full">
              <div className="p-2">
                <p className="text-xs md:text-2xl font-serif">
                  We use <strong>Quality Charcoal and Maple Wood</strong> to
                  provide the Best Smoky Flavour to Our Meat
                </p>
                <Image
                  src={'/charcoal_wood.jpg'}
                  alt="charcoal_wood"
                  height={'400'}
                  width={'700'}
                />
              </div>
            </div>
            <div className="h-full w-full">
              <div className="p-2">
                <Image
                  src={'/sliced_beef_brisket.jpg'}
                  alt="sliced_beef_brisket"
                  height={'400'}
                  width={'700'}
                />
                <p className="text-xs font-serif md:text-2xl">
                  The <strong>taste and the tenderness of the meat</strong> will
                  definitely pamper your taste buds
                </p>
              </div>
            </div>
          </div>
        </Section>
        {/* <Section>
          <div className="text-white text-lg md:text-2xl font-serif p-2 md:p-10 h-full">
            <p>What Our Clients Tell About Us</p>
            <div className="flex-column space-y-2 text-xs md:text-2xl">
              <div className="flex space-x-2 italic">
                <div className="bg-gradient-to-r from-[#706f6f] to-[#888]  font-thin p-2">
                  <p>
                    "The beef brisket just made my stressful day into the best
                    day of my life. :)"
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#706f6f] to-[#888]   font-thin p-2">
                  <p>
                    "I wished I could just marry the beef brisket and eat it
                    forever till my last dying day!"
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 italic">
                <div className="bg-gradient-to-r from-[#706f6f] to-[#888]  font-thin p-2">
                  <p>"The woody flavour really made it super special!"</p>
                </div>
                <div className="bg-gradient-to-r from-[#706f6f] to-[#888]  font-thin p-2">
                  <p>
                    "The quality was still at the top, even after it was
                    delivered to my place here in Rizal!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section> */}
        {/* <Section>
          <div className="bg-gradient-to-r from-[#706f6f] to-[#888]  text-center h-full md:text-2xl text-sm font-serif">
            <div className="flex flex-wrap justify-evenly gap-2">
              <ContactUs />
            </div>
          </div>
        </Section> */}
      </div>
    </Layout>
  );
};

export default HomePage;
