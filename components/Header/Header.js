import { HomeIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { orderState } from '../../states/orders';
import { useAlert } from 'react-alert';

const Header = () => {
  const router = useRouter();
  const orders = useRecoilValue(orderState);
  const alert = useAlert();

  const routeToHomePage = () => {
    router.push('/');
  };

  const routeToCart = (e) => {
    e.preventDefault();
    if (orders?.length === 0) {
      alert.show('Your cart is empty.');
      return;
    }
    router.push('/checkout');
  };

  return (
    <div className="bg-gray-700 flex justify-between">
      <div
        className="flex justify-start shadow-md h-10 md:h-20 p-2 text-slate-50 cursor-pointer w-full"
        onClick={routeToHomePage}
      >
        <div className="w-12 h-14 md:w-32 md:h-24 relative ">
          <Image src={'/icon_trans_nobuf.png'} alt="logo" layout="fill" />
        </div>
        <div className="flex md:items-center md:justify-center">
          <div className="pl-6">
            <h3 className="font-serif text-sm md:text-xl">
              PJ Smoke and Grill
            </h3>
            <h4 className="font-serif text-xs md:text-xs text-center">
              Usok Pa Lang Ulam Na
            </h4>
          </div>
        </div>
      </div>
      <div className="w-full text-right">
        <div className="pr-10 pt-2 gap-2 md:gap-10 w-full flex justify-end items-center">
          <h2 className="hover:font-bold text-slate-50 text-center">
            <div onClick={routeToHomePage} className="cursor-pointer">
              <HomeIcon className="h-7 md:h-10" />
              Home
            </div>
          </h2>
          <h2 className="hover:font-bold text-slate-50 text-center">
            <div onClick={routeToCart} className="cursor-pointer">
              <div className="flex flex-col justify-evenly">
                <div className="flex flex-col relative">
                  <ShoppingCartIcon className="h-7 md:h-10" />
                  <div
                    data-cy={'test-checkout-quantity-id'}
                    className="rounded-full bg-red-500 absolute left-6 pb-4 h-5 md:left-7 md:h-5 md:w-5 w-6 text-md md:text-sm text-center"
                  >
                    {orders.reduce((prev, curr) => prev + curr.quantity, 0)}
                  </div>
                </div>
                <div>Cart</div>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
