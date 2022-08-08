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
      <div className="flex flex-col">
        <Section>
          <div className="w-full h-screen md:h-full m-0 bg-slate-700 block bg-no-repeat bg-contain md:bg-cover md:bg-center bg-[url('/beef_brisket.jpg')]">
            <div className="p-2 flex md:p-10">
              <div className="flex-column w-9/12">
                <div
                  className="h-28 md:w-12/12 shadow-lg shadow-inner  
                    md:text-black text-center font-serif text-xl md:text-5xl "
                >
                  <p className="text-white shadow-md">
                    The Best Smoked Barbeque Beef Brisket in Town
                  </p>
                </div>
                <div className="h-28 text-xl md:w-12/12  text-white text-center font-serif text-md md:text-5xl">
                  <p className="shadow-md">
                    Smoked Grilled for 20hrs to Perfection
                  </p>
                </div>
              </div>
              <div className="h-14 md:h-14 flex justify-end  text-xs md:w-12/12 text-white md:text-black text-center font-serif text-md md:text-2xl">
                <Button onClick={routeToOrderPage}>Order Now</Button>
              </div>
            </div>
          </div>
        </Section>
        <Section>
          <div className="bg-gradient-to-r from-[#fff] to-[#888] text-black h-full flex flex-row justify-evenly p-2 md:p-10">
            <div className="w-full">
              <div className="opacity-70 p-2">
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
              <div className="opacity-70 p-2">
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
        <Section>
          <div className="text-white text-sm md:text-2xl font-serif p-2 md:p-10 h-full">
            <p>What Our Clients Tell About Us</p>
            <div className="flex-column space-y-2 text-xs md:text-2xl">
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
          <div className="bg-gradient-to-r from-[#fff] to-[#888] text-black text-center h-full md:text-2xl text-sm font-serif">
            <p className=" text-gray-700 text-md font-bold">Contact Us</p>
            <form className="bg-gradient-to-r grid flex-col justify-center from-[#fff] to-[#888] shadow-md rounded px-8 pt-2 pb-8 mb-2">
              <div className="p-2 grid justify-center md:w-full">
                <label
                  className=" text-gray-700 text-xs font-normal md:text-2xl"
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
              <div className="p-2  grid justify-center">
                <label
                  className=" text-gray-700 text-xs font-normal md:text-2xl"
                  for="massage"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border md:w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder=""
                  rows={5}
                />
              </div>
              <div className="p-2 flex flex-row justify-center">
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
