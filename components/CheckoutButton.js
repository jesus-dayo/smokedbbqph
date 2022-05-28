import { ArrowSmRightIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import { convertToPHP } from '../utils';

const CheckoutButton = ({ onClick }) => {
  const orders = useRecoilValue(orderState);
  return (
    <div
      onClick={onClick}
      className="bg-slate-800 text-white text-sm w-80 rounded-lg ring-2"
    >
      <div className="flex justify-evenly">
        <div className="p-2 flex relative">
          <ShoppingCartIcon height={40} />
          <div className="rounded-full bg-red-500 absolute left-9 pb-4 h-5 w-6 text-md text-center">
            {orders.reduce((prev, curr) => prev + curr.quantity, 0)}
          </div>
        </div>
        <div className="pl-2 pt-4 text-lg flex-grow">
          {convertToPHP(
            orders.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
          )}
        </div>
        <div className="pl-2 pt-4 text-xl">CHECKOUT</div>
        <div className="pl-1 pt-2">
          <ArrowSmRightIcon height={40} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;
