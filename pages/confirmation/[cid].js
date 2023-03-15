import Layout from '../../components/Layout/Layout';
import PurchaseSummary from '../../components/PurchaseSummary/PurchaseSummary';
import DeliveryConfirmation from '../../components/DeliveryConfirmation/DeliveryConfirmation';
import { convertToPHP } from '../../utils/util';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getConfig, getDiscountCode } from '../../src/graphql/queries';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../../src/aws-exports';
import { getBillWithAvail } from '../../src/graphql/custom_queries';
import Image from "next/legacy/image";
import { event } from 'nextjs-google-analytics';
import ContactUs from '../../sections/contact-us/ContactUs';

Amplify.configure({ ...awsExports, ssr: true });

const Confirmation = () => {
  const router = useRouter();
  const { cid } = router.query;
  const [currentBill, setCurrentBill] = useState({});
  const [currentConfig, setCurrentConfig] = useState({});
  const [discountPercentage, setDiscountPercentage] = useState();

  useEffect(() => {
    event('confirmation', {
      category: 'Confirmation',
    });
    const getBillAPI = async () => {
      const bill = await API.graphql({
        query: getBillWithAvail,
        variables: {
          id: cid,
        },
      });
      const billResponse = bill?.data?.getBill;
      if (billResponse && billResponse.discountCode) {
        const discountResponse = await API.graphql({
          query: getDiscountCode,
          variables: {
            id: billResponse.discountCode,
          },
        });
        const discountCode = discountResponse?.data?.getDiscountCode;
        setDiscountPercentage(discountCode?.percentage);
      }
      const config = await API.graphql({
        query: getConfig,
        variables: {
          id: 'config',
        },
      });
      setCurrentConfig(config?.data?.getConfig);
      setCurrentBill(billResponse);
    };
    if (cid) {
      getBillAPI();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cid]);

  const getTotal = () => {
    const total = currentBill?.orders?.items?.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      currentBill.shippingFee
    );
    if (discountPercentage > 0) {
      return total - total * discountPercentage;
    }
    return total;
  };

  return (
    <Layout full>
      <div className="p-5 md:p-20 ">
        <div className="bg-slate-100 text-center min-h-full p-2">
          <h5 className="font-medium text-sm md:text-xl">
            Your Order was Successful - {currentBill?.id}
          </h5>
          <div>
            <div className="p-5 text-sm md:text-xl flex flex-col justify-center w-full">
              <div className="font-bold">
                Please provide payment of {convertToPHP(getTotal())} via{' '}
                {currentBill?.paymentOption?.option === 'gcash' ? (
                  <div>
                    <span>GCASH {currentConfig.gcash} within 24hrs.</span>
                  </div>
                ) : (
                  <span>Cash on Delivery.</span>
                )}
              </div>
              <div className="flex justify-center">
                {currentBill?.paymentOption?.option === 'gcash' && (
                  <div className="relative h-96 w-72 ">
                    <Image
                      src={'/qr_code.jpeg'}
                      alt={'qr-code'}
                      objectFit="fill"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="p-2 text-sm md:text-xl">
              Thank you for your purchase. We will contact you for additional
              confirmation and delivery details.
            </div>
            <div className="grid grid-flow-row gap-4 justify-around">
              <div className="col-span-3 border-2 border-slate-400 h-auto p-2 md:text-lg text-sm">
                <PurchaseSummary
                  orders={currentBill?.orders?.items}
                  discountPercentage={discountPercentage}
                  shippingFee={currentBill?.shippingFee}
                />
              </div>
              <div className="col-span-3 border-2 border-slate-400 min-h-56 h-auto md:p-5 ">
                <DeliveryConfirmation
                  personal={currentBill?.client}
                  address={currentBill?.address}
                  schedule={currentBill?.delivery}
                  supportPhone={currentConfig.phoneNumber}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-md">
          <ContactUs overrides={'bg-white'} />
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
