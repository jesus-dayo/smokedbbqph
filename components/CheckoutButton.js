import { ArrowSmRightIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import { convertToPHP } from '../utils';

const CheckoutButton = ({ onClick }) => {
  const orders = useRecoilValue(orderState);
  return (
    <div
      onClick={onClick}
      className="bg-violet-600 text-white text-sm w-80 rounded-lg ring-2"
    >
      <div className="flex justify-evenly">
        <div className="p-2 flex relative">
          <ShoppingCartIcon height={40} className="md:h-8" />
          <div className="rounded-full bg-red-500 absolute left-9 pb-4 h-5 md:left-7 md:h-4 md:w-4 w-6 text-md md:text-sm text-center">
            {orders.reduce((prev, curr) => prev + curr.quantity, 0)}
          </div>
        </div>
        <div className="pl-2 pt-4 md:pl-4 md:pt-2 text-lg flex-grow">
          {convertToPHP(
            orders.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
          )}
        </div>
        <div className="pl-2 pt-4 md:text-lg text-xl md:pl-4 md:pt-2">
          CHECKOUT
        </div>
        <div className="pl-1 pt-2 text-xl md:text-lg md:pl-2 md:pt-1">
          <ArrowSmRightIcon height={40} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;
