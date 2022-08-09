import Address from '../components/Address';
import CalendarReservation from '../components/CalendarReservation';
import PaymentOption from '../components/PaymentOption';
import TotalSummary from '../components/TotalSummary';

const { default: Layout } = require('../components/Layout');

const Checkout = () => {
  return (
    <Layout full>
      <div className="flex flex-wrap text-white h-full md:p-10">
        <div className="w-full">
          <TotalSummary className="md:w-full" />
        </div>

        <div className="w-full">
          <CalendarReservation className="md:w-full" />
        </div>
        <div className="w-full md:w-6/12">
          <Address className="w-full" />
        </div>
        <div className="w-full md:w-6/12">
          <PaymentOption className="w-full" />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
