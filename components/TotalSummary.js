import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import { convertToPHP } from '../utils';
import FormH1 from './FormH1';
import FormContainer from './FormContainer';
import Quantity from './Quantity';

const TotalSummary = ({ className }) => {
  const orders = useRecoilValue(orderState);

  return (
    <FormContainer className={className}>
      <FormH1>Order Summary</FormH1>
      <div className="flex flex-row gap-2 mb-2 text-md font-bold justify-between">
        <div>Name</div>
        <div>Price</div>
        <div>Quantity</div>
      </div>
      {orders?.map((order) => (
        <div
          key={`${order.id}`}
          className="flex flex-row gap-2 text-md justify-between"
        >
          <div className="w-30">{order.label}</div>
          <div className="w-30">{convertToPHP(order.price)}</div>
          <div className="w-30 h-8">
            <Quantity value={order.quantity} />
          </div>
        </div>
      ))}
      <div className="mt-4 text-xl bg-white p-2 flex gap-2 items-end justify-items-end justify-end">
        <div className="p-2 font-bold ">Total:</div>
        <div className="p-2 ">
          {convertToPHP(
            orders.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
          )}
        </div>
      </div>
    </FormContainer>
  );
};

export default TotalSummary;
