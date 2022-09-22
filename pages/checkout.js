import {
  ArrowCircleRightIcon,
  BackspaceIcon,
  ChevronRightIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Address from '../components/Address/Address';
import Button from '../components/Button/Button';
import CalendarReservation from '../components/CalendarReservation/CalendarReservation';
import TotalSummary from '../components/TotalSummary/TotalSummary';
import Layout from '../components/Layout/Layout';
import PersonalDetails from '../components/PersonalDetails/PersonalDetails';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';

const Checkout = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const orders = useRecoilValue(orderState);

  const validate = (e, fieldName) => {
    if (!e.target.value) {
      setErrors([...errors, fieldName]);
    } else {
      setErrors([...errors.filter((item) => item !== fieldName)]);
    }
  };

  const handleBackToOrders = () => {
    router.push('/order');
  };

  const handleSubmitOrders = () => {
    router.push('/confirmation');
  };

  return (
    <Layout medium>
      <div className="p-4 md:p-4 flex justify-between">
        <Button
          variant="secondary"
          className="h-12 text-lg md:h-10 md:text-sm md:align-middle"
          onClick={handleBackToOrders}
        >
          <div className="flex gap-4 md:gap-2">
            <div className="w-8 md:w-6">
              <BackspaceIcon />
            </div>
            <div className="md:pt-1">Back to Orders</div>
          </div>
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmitOrders}
          disabled={!orders || orders.length === 0}
          className="md:text-sm md:h-10"
        >
          <div className="flex gap-2">
            <div className="text-right">Submit Order</div>
            <div className="w-8 md:w-6">
              <ArrowCircleRightIcon />
            </div>
          </div>
        </Button>
      </div>
      <div className=" text-white h-auto md:w-full text-center md:pl-5 md:pr-5 md:pb-2 pb-2">
        <div className="w-full text-left">
          <h5 className="font-bold text-sm">
            Note: As of now, we only accept GCASH as mode of payment.
          </h5>
        </div>
        <div className="grid grid-cols-2 gap-20 md:w-full min-h-0 overflow-auto h-auto md:h-auto">
          <div className="md:h-auto">
            <PersonalDetails
              className="md:w-full"
              validate={validate}
              errors={errors}
            />
            <Address
              className="md:w-full w-full"
              validate={validate}
              errors={errors}
            />
          </div>
          <div className="md:h-full">
            <TotalSummary className="md:w-full" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
