import Layout from '../../components/Layout/Layout';
import PurchaseSummary from '../../components/PurchaseSummary/PurchaseSummary';
import DeliveryConfirmation from '../../components/DeliveryConfirmation/DeliveryConfirmation';
import { convertToPHP } from '../../utils/util';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBill, getConfig } from '../../src/graphql/queries';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../../src/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const Confirmation = () => {
  const router = useRouter();
  const { cid } = router.query;
  const [currentBill, setCurrentBill] = useState({});
  const [currentConfig, setCurrentConfig] = useState({});

  useEffect(() => {
    const getBillAPI = async () => {
      const bill = await API.graphql({
        query: getBill,
        variables: {
          id: cid,
        },
      });
      const config = await API.graphql({
        query: getConfig,
        variables: {
          id: 'config',
        },
      });
      setCurrentConfig(config?.data?.getConfig);
      setCurrentBill(bill?.data?.getBill);
    };
    getBillAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout full>
      <div className="p-20 ">
        <div className="bg-slate-100 text-center rounded-md min-h-full p-2">
          <h5 className="font-medium text-xl">
            Your Order was Successful - {currentBill?.id}
          </h5>
          <div>
            <div className="p-5 text-xl">
              Please provide payment of{' '}
              <span className="font-bold">
                {' '}
                {convertToPHP(
                  currentBill?.orders?.items?.reduce(
                    (prev, curr) => prev + curr.price * curr.quantity,
                    0
                  )
                )}{' '}
                via GCASH {currentConfig.gcash} within 24hrs.
              </span>
            </div>
            <div className="p-2 text-xl">
              Thank you for your purchase. We will contact you for additional
              confirmation and delivery details.
            </div>
            <div className="grid grid-flow-row gap-4 justify-around">
              <div className="col-span-3 border-2 border-slate-400 h-auto p-2">
                <PurchaseSummary
                  orders={currentBill?.orders?.items}
                  shippingFee={currentConfig.shippingFee}
                />
              </div>
              <div className="col-span-3 border-2 border-slate-400 min-h-56 h-auto p-5">
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
      </div>
    </Layout>
  );
};

export default Confirmation;
