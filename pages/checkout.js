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

const Checkout = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);

  const handleChange = (e, fieldName) => {
    validate(e, fieldName);
  };

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
    <Layout full>
      <div className="p-4">
        <Button
          variant="secondary"
          className="h-12"
          onClick={handleBackToOrders}
        >
          <div className="flex gap-4">
            <div className="w-8">
              <BackspaceIcon />
            </div>
            <div className="text-lg">Back to Orders</div>
          </div>
        </Button>
      </div>
      <div className=" text-white h-full md:w-full text-center md:pl-10 md:pr-10 md:pb-4 pb-2">
        <div className="w-full text-left">
          <h5 className="font-bold text-lg">
            Note: As of now, we only accept GCASH as mode of payment.
          </h5>
        </div>
        <div className="grid grid-cols-2 md:w-full">
          <div className="md:h-full">
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
      <div className="pb-4 w-full text-center animate-pulse">
        <Button variant="primary" onClick={handleSubmitOrders}>
          <div className="flex gap-2">
            <div className="text-right text-lg">Submit Order</div>
            <div className="w-8">
              <ArrowCircleRightIcon />
            </div>
          </div>
        </Button>
      </div>
    </Layout>
  );
};

export default Checkout;
