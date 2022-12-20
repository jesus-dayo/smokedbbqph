import Image from 'next/image';
import { convertToPHP } from '../../utils/util';

const PurchaseSummary = ({ orders = [], shippingFee, discountPercentage }) => {
  const getTotal = () =>
    orders.reduce(
      (prev, curr) => prev + curr.price * curr.quantity,
      shippingFee
    );
  return (
    <div>
      <table border={2} className="table-auto w-full">
        <tbody>
          {orders?.map((order) => (
            <tr key={`order.label`}>
              <td>
                {order.picture && (
                  <Image
                    src={order.picture}
                    alt={order.label}
                    width={100}
                    height={100}
                  />
                )}
              </td>
              <td className="p-2">
                <div>
                  (x{order.quantity}){order.label}
                </div>
              </td>
              <td>
                <div>{convertToPHP(order.price)}</div>
              </td>
            </tr>
          ))}
          <tr className="border-t-slate-400-200 border-t-2 font-medium">
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
            <td>
              <div className="p-2">Shipping Fee</div>
            </td>
            <td>
              <div className="p-2 underline">{convertToPHP(shippingFee)}</div>
            </td>
          </tr>
          <tr className="font-medium">
            <td></td>
            <td>
              <div className="p-2">Total</div>
            </td>
            <td>
              <div
                className={`p-2 underline ${
                  discountPercentage > 0 ? 'line-through' : ''
                }`}
              >
                {convertToPHP(getTotal())}
              </div>
            </td>
          </tr>
          {discountPercentage > 0 && (
            <tr className="font-medium">
              <td></td>
              <td>
                <div className="p-2">Discount</div>
              </td>
              <td>
                <div className="p-2 underline">
                  {convertToPHP(getTotal() * discountPercentage)}
                </div>
              </td>
            </tr>
          )}
          {discountPercentage > 0 && (
            <tr className="font-medium">
              <td></td>
              <td>
                <div className="p-2">Discounted Total</div>
              </td>
              <td>
                <div className="p-2 underline">
                  {convertToPHP(getTotal() - getTotal() * discountPercentage)}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseSummary;
