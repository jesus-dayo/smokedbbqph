import Head from 'next/head';
import Header from '../components/Header';
import Section from '../components/Section';
import Image from 'next/image';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const HomePage = () => {
  const router = useRouter();

  const routeToOrderPage = () => {
    router.push('/order');
  };

  return (
    <Layout>
      <div className="flex-col">
        <Section>
          <div className="w-full h-screen m-0 bg-slate-700 block bg-no-repeat bg-contain md:bg-cover md:bg-center bg-[url('/beef_brisket.jpg')]">
            <div className="p-2 flex">
              <div className="flex-column">
                <div
                  className="h-28 md:w-9/12 md:bg-white md:opacity-50 shadow-lg shadow-inner text-white 
                    md:text-black text-center font-serif text-md md:text-6xl"
                >
                  <p className="">
                    The Best Smoked Barbeque Beef Brisket in Town
                  </p>
                </div>
                <div className="h-28 text-xs w-5/12 md:bg-white md:opacity-50 shadow-lg shadow-inner text-white md:text-black text-center font-serif text-md md:text-6xl">
                  <p>Smoked Grilled for 20hrs to Perfection</p>
                </div>
              </div>
              <div className="h-28 text-xs w-5/12 md:bg-white md:opacity-50 shadow-lg shadow-inner text-white md:text-black text-center font-serif text-md md:text-6xl">
                <Button onClick={routeToOrderPage}>Order Now</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="bg-gradient-to-r from-[#fff] to-[#888] text-black h-full flex p-2">
            <div className="w-full">
              <div className="shadow bg-slate-50 opacity-70 mr-2 p-2">
                <p className="text-xs font-serif h-16">
                  We use <strong>Quality Charcoal and Maple Wood</strong> to
                  provide the Best Smoky Flavour to Our Meat
                </p>
                <Image
                  src={'/charcoal_wood.jpg'}
                  alt="charcoal_wood"
                  height={'500'}
                  width={'700'}
                />
              </div>
            </div>
            <div className="h-full w-full">
              <div className="shadow bg-slate-50 opacity-70 mr-2 p-2">
                <Image
                  src={'/sliced_beef_brisket.jpg'}
                  alt="sliced_beef_brisket"
                  height={'500'}
                  width={'700'}
                />
                <p className="text-xs font-serif h-16">
                  The <strong>taste and the tenderness of the meat</strong> will
                  definitely pamper your taste buds
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="text-white text-sm font-serif p-2 h-full">
            <p>What Our Clients Tell About Us</p>
            <div className="flex-column space-y-2 text-xs">
              <div className="flex space-x-2 italic">
                <div className="bg-gradient-to-r from-[#fff] to-[#888] opacity-70 text-black font-thin p-2">
                  <p>
                    "The beef brisket just made my stressful day into the best
                    day of my life. :)"
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#fff] to-[#888] opacity-70 text-black font-thin p-2">
                  <p>
                    "I wished I could just marry the beef brisket and eat it
                    forever till my last dying day!"
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 italic">
                <div className="bg-gradient-to-r from-[#fff] to-[#888] opacity-70 text-black font-thin p-2">
                  <p>"The woody flavour really made it super special!"</p>
                </div>
                <div className="bg-gradient-to-r from-[#fff] to-[#888] opacity-70 text-black font-thin p-2">
                  <p>
                    "The quality was still at the top, even after it was
                    delivered to my place here in Rizal!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="bg-gradient-to-r from-[#fff] to-[#888] text-black text-center h-full text-sm font-serif">
            <form className="bg-gradient-to-r from-[#fff] to-[#888] shadow-md rounded px-8 pt-2 pb-8 mb-2">
              <p className="text-center text-gray-700 text-md font-bold">
                Contact Us
              </p>
              <div className="flex space-x-2 mt-2">
                <label
                  className=" text-gray-700 text-xs font-bold w-20"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="flex space-x-2 mt-1">
                <label
                  className=" text-gray-700 text-xs font-bold w-20"
                  for="massage"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder=""
                  rows={3}
                />
              </div>
              <div className="mt-2">
                <Button>Submit</Button>
              </div>
            </form>
          </div>
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;
