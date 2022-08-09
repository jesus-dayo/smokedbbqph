import React from 'react';
import Layout from '../components/Layout';
import FilterButton from '../components/FilterButton/FilterButton';
import Card from '../components/Card';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import CheckoutButton from '../components/CheckoutButton';
import useSWR from 'swr';

const OrderPage = () => {
  const { data } = useSWR('/api/products', (...args) =>
    fetch(...args).then((res) => {
      console.log('res', res);
      return res.json();
    })
  );
  console.log('data', data);
  const router = useRouter();
  const orders = useRecoilValue(orderState);

  const routeToCheckoutPage = () => {
    if (orders.length) {
      router.push('/checkout');
    }
  };

  return (
    <Layout>
      <div className="flex border-gray-800 border-t-2 border-b-2 p-2">
        <div className="grow p-2 space-x-2 ">
          <div className="grid grid-flow-col gap-2 md:w-8/12 md:gap-5">
            <FilterButton>Recommended</FilterButton>
            <FilterButton>Beef</FilterButton>
            <FilterButton>Pork</FilterButton>
            <FilterButton>Seafood</FilterButton>
            <FilterButton>Rubs</FilterButton>
          </div>
        </div>
      </div>
      <div className="p-2 mb-10">
        <div className="flex flex-wrap justify-evenly md:justify-start bg-black p-3 gap-2">
          {data?.products?.map((item) => (
            <Card
              id={item.id}
              label={item.name}
              imgSrc={item.picture?.web}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
      {orders.length > 0 && (
        <div className="pt-1 pb-4 fixed -bottom-4 right-7 animate-bounce">
          <CheckoutButton onClick={routeToCheckoutPage} />
        </div>
      )}
    </Layout>
  );
};

export default OrderPage;
