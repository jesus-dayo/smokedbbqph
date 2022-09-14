import { useRecoilValue } from 'recoil';
import { orderState } from '../../states/orders';
import { convertToPHP } from '../../utils';
import FormContainer from '../FormContainer/FormContainer';
import Quantity from '../Quantity/Quantity';
import Image from 'next/image';

const TotalSummary = ({ className }) => {
  const orders = useRecoilValue(orderState);
  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text:lg md:text-xl uppercase mb-2">
          Shopping Cart
        </h1>
      </div>
      <table border={2} className="table-auto md:table-fixed">
        <thead className="text-sm md:text-lg">
          <th className="text-left">Product</th>
          <th className="text-left"></th>
          <th className="text-center">Weight</th>
          <th className="text-center">Quantity</th>
          <th className="text-right p-2">Price</th>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={`order.label`} className="border-t-cyan-700 border-2">
              <td width={'20%'} className="p-2">
                <Image
                  src={order.picture}
                  alt={order.label}
                  width={100}
                  height={100}
                />
              </td>
              <td className="text-left" width={'20%'}>
                <div className="text-sm">{order.label}</div>
                <div className="text-xs md:block hidden">
                  {order.description}
                </div>
              </td>
              <td className="text-center text-sm" width={'20%'}>
                1 kilo
              </td>
              <td width={'10%'} className="text-center">
                <div>
                  <Quantity
                    value={order.quantity}
                    className="w-20 h-8 text-center"
                  />
                </div>
              </td>
              <td width={'20%'} className="text-right p-2 text-sm">
                {convertToPHP(order.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
    </FormContainer>
  );
};

export default TotalSummary;
