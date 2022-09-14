import Layout from '../components/Layout/Layout';
import PurchaseSummary from '../components/PurchaseSummary/PurchaseSummary';
import DeliveryConfirmation from '../components/DeliveryConfirmation/DeliveryConfirmation';
import { useRecoilValue } from 'recoil';
import { convertToPHP } from '../utils';
import { orderState } from '../states/orders';

const Confirmation = () => {
  const orders = useRecoilValue(orderState);
  return (
    <Layout full>
      <div className="p-20 ">
        <div className="bg-slate-100 text-center rounded-md min-h-full p-2">
          <h5 className="font-medium text-xl">
            Your Order was Successful - 123456
          </h5>
          <div>
            <div className="p-5 text-xl">
              Please provide payment of{' '}
              <span className="font-bold">
                {' '}
                {convertToPHP(
                  orders.reduce(
                    (prev, curr) => prev + curr.price * curr.quantity,
                    0
                  )
                )}{' '}
                via GCASH +63919238456 within 24hrs.
              </span>
            </div>
            <div className="p-2 text-xl">
              Thank you for your purchase. We will contact you for additional
              confirmation and delivery details.
            </div>
            <div className="grid grid-flow-row gap-4 justify-around">
              <div className="col-span-3 border-2 border-slate-400 h-auto p-2">
                <PurchaseSummary />
              </div>
              <div className="col-span-3 border-2 border-slate-400 min-h-56 h-auto p-5">
                <DeliveryConfirmation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Confirmation;
