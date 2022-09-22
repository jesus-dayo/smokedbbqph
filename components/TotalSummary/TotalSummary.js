import { useRecoilValue } from 'recoil';
import { orderState } from '../../states/orders';
import { convertToPHP } from '../../utils';
import Quantity from '../Quantity/Quantity';
import Image from 'next/image';
import useOrders from '../../hooks/useOrders';

const Row = ({
  quantity,
  label,
  price,
  imgSrc,
  description,
  availableQuantity,
}) => {
  console.log('Row', quantity);
  const { order, handleAddQuantity, handleMinusQuantity } = useOrders({
    quantity,
    label,
    price,
    imgSrc,
    description,
    availableQuantity,
  });
  return (
    <tr key={order.label} className="border-t-cyan-700 border-2">
      <td width={'20%'} className="p-2">
        {order.picture && (
          <Image
            src={order.picture}
            alt={order.label}
            width={100}
            height={100}
          />
        )}
      </td>
      <td className="text-left" width={'20%'}>
        <div className="text-sm">{order.label}</div>
        <div className="text-xs md:block hidden">{order.description}</div>
      </td>
      <td className="text-center text-sm" width={'20%'}>
        1 kilo
      </td>
      <td width={'10%'} className="text-center">
        <div>
          <Quantity
            value={order.quantity}
            onAdd={handleAddQuantity}
            onMinus={handleMinusQuantity}
            id={order.label}
          />
        </div>
      </td>
      <td width={'20%'} className="text-right p-2 text-sm">
        {convertToPHP(order.price)}
      </td>
    </tr>
  );
};

const TotalSummary = ({ className }) => {
  const orders = useRecoilValue(orderState);
  console.log('summary', orders);
  return (
    <div className="p-1 h-full">
      <div className="h-full rounded-lg bg-white shadow-lg md:p-4 p-4 text-gray-700">
        <div>
          <h1 className="text-left font-bold text:lg uppercase">
            Shopping Cart
          </h1>
        </div>
        <table border={2} className="table-auto md:table-fixed">
          <thead className="text-sm">
            <th className="text-left">Product</th>
            <th className="text-left"></th>
            <th className="text-center">Weight</th>
            <th className="text-center">Quantity</th>
            <th className="text-right p-2">Price</th>
          </thead>
          <tbody>
            {orders &&
              orders?.map((order, index) => (
                <Row {...order} key={`order-${index}`} />
              ))}
            {(!orders || orders.length === 0) && (
              <tr>
                <td colSpan={5}>
                  Nothing on the cart. Please return to order page to re-order.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {orders && orders.length > 0 && (
          <div className="flex flex-col justify-end">
            <div className="text-sm bg-white flex justify-end w-full">
              <div className="p-2">Sub Total:</div>
              <div className="p-2">
                {convertToPHP(
                  orders.reduce(
                    (prev, curr) => prev + curr.price * curr.quantity,
                    0
                  )
                )}
              </div>
            </div>
            <div className="text-sm bg-white flex justify-end">
              <div className="p-2 ">Shipping:</div>
              <div className="p-2 font-bold">Free</div>
            </div>
            <div className="text-xl bg-white flex gap-2 items-end justify-items-end justify-end">
              <div className="p-2 font-bold text-sm">Total:</div>
              <div className="p-2 text-sm">
                {convertToPHP(
                  orders.reduce(
                    (prev, curr) => prev + curr.price * curr.quantity,
                    0
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalSummary;
