import Address from '../components/Address';
import CalendarReservation from '../components/CalendarReservation';
import PaymentOption from '../components/PaymentOption';
import TotalSummary from '../components/TotalSummary';

const { default: Layout } = require('../components/Layout');

const Checkout = () => {
  return (
    <Layout full>
      <div className="flex flex-col justify-between md:justify-center gap-5 p-1 md:p-10 text-white">
        <Address />
        <TotalSummary />
        <CalendarReservation />
        <PaymentOption />
      </div>
    </Layout>
  );
};

export default Checkout;
