import { ArrowSmRightIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useRecoilValue } from 'recoil';
import { orderState } from '../../states/orders';
import { convertToPHP } from '../../utils/util';

const CheckoutButton = ({ onClick, inProgress }) => {
  const orders = useRecoilValue(orderState);

  const handleClick = () => {
    if (inProgress) {
      return;
    }
    onClick();
  };

  return (
    <div
      data-cy={'test-checkout-id'}
      onClick={handleClick}
      className={` text-white text-sm w-70 rounded-lg ring-2 ring-black ${
        inProgress
          ? 'cursor-wait bg-gradient-to-r from-[#aaa8a8ee] to-[#aaa7a7]'
          : 'cursor-pointer bg-gradient-to-r from-[#706f6f] to-[#888]'
      }`}
    >
      <div className="flex justify-evenly h-12">
        <div className="p-3 flex relative">
          <ShoppingCartIcon height={25} className="md:h-8" />
          <div
            data-cy={'test-checkout-quantity-id'}
            className="rounded-full bg-red-500 absolute left-6 pb-2 h-5 md:left-7 md:h-4 md:w-4 w-6 text-md md:text-sm text-center"
          >
            {orders.reduce((prev, curr) => prev + curr.quantity, 0)}
          </div>
        </div>
        <div
          data-cy={'test-checkout-total-id'}
          className="pl-2 pt-3 md:pl-4 md:pt-2 text-lg flex-grow"
        >
          {convertToPHP(
            orders.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
          )}
        </div>
        <div className="pl-2 pt-3 md:text-lg text-xl md:pl-4 md:pt-2">
          CHECKOUT
        </div>
        <div className="pl-1 pt-2 text-xl md:text-lg md:pl-2 md:pt-1">
          {!inProgress && <ArrowSmRightIcon height={40} />}
          {inProgress && (
            <svg className="animate-spin h-9 w-5 mr-2" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutButton;
