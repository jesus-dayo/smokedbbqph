import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { orderState } from '../../states/orders';
import { convertToPHP } from '../../utils';

const PurchaseSummary = () => {
  const orders = useRecoilValue(orderState);

  return (
    <div>
      <table border={2} className="table-auto w-full">
        <tbody>
          {orders?.map((order) => (
            <tr key={`order.label`}>
              <td>
                <Image
                  src={order.picture}
                  alt={order.label}
                  width={100}
                  height={100}
                />
              </td>
              <td className="p-2">
                <div>
                  (x{order.quantity}){order.label}
                </div>
              </td>
              <td>
                <div>1-2kg</div>
              </td>
              <td>
                <div>{convertToPHP(order.price)}</div>
              </td>
            </tr>
          ))}
          <tr className="border-t-slate-400-200 border-t-2 font-medium">
            <td></td>
            <td></td>
            <td>
              <div className="p-2">Sub Total</div>
            </td>
            <td>
              <div className="p-2 underline">
                {convertToPHP(
                  orders.reduce(
                    (prev, curr) => prev + curr.price * curr.quantity,
                    0
                  )
                )}
              </div>
            </td>
          </tr>
          <tr className="font-medium">
            <td></td>
            <td></td>
            <td>
              <div className="p-2">Shipping</div>
            </td>
            <td>
              <div className="p-2 underline">Free</div>
            </td>
          </tr>
          <tr className="font-medium">
            <td></td>
            <td></td>
            <td>
              <div className="p-2">Total</div>
            </td>
            <td>
              <div className="p-2 underline">
                {convertToPHP(
                  orders.reduce(
                    (prev, curr) => prev + curr.price * curr.quantity,
                    0
                  )
                )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseSummary;
