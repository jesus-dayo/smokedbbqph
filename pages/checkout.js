import { useRecoilValue } from 'recoil';
import Quantity from '../components/Quantity';
import { orderState } from '../states/orders';

const { default: Layout } = require('../components/Layout');

const Checkout = () => {
  const orders = useRecoilValue(orderState);

  return (
    <Layout>
      {orders?.map((order) => (
        <div className="flex">
          <div>{order.label}</div>
          <div>{order.price}</div>
          <div>{order.quantity}</div>
          <div>{order.quantity * order.price}</div>
          <Quantity value={order.quantity} />
        </div>
      ))}
    </Layout>
  );
};

export default Checkout;
