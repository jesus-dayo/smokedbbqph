import React from 'react';
import Layout from '../components/Layout';
import FilterButton from '../components/FilterButton';
import Card from '../components/Card';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import CheckoutButton from '../components/CheckoutButton';

const OrderPage = () => {
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
        <div className=" grow p-2 space-x-2 ">
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
          <Card
            id={1}
            label={'Beef Brisket'}
            imgSrc={'/sliced_beef_brisket.jpg'}
            description={`Smoked barbecued for 12hrs until tender with our secret rub. 
              Best partnered with your favorite wine or whisky.
              Prices are per 1kg.`}
            price={1800}
          />
          <Card
            id={2}
            label={'Pork Ribs'}
            imgSrc={'/pork_ribs.jpg'}
            description={
              'Smoked barbecued for 8hrs until tender with our secret rub. Warning: Very Addictive. Prices are per 1kg.'
            }
            price={1200}
          />
          <Card
            id={3}
            label={'Blood Sausage'}
            imgSrc={'/blood_sausage.jpg'}
            description={`Try our homemade blood sausages and you wont regret trying it. 
               Best combined with your favorite rice.
               Prices are per 1kg.`}
            price={800}
          />
          <Card
            id={4}
            label={'Angus Beef'}
            imgSrc={'/angus_beef.jpg'}
            description={`Angus Beef is a crowd favorite. 
            Smoked for 8hrs, this precious piece of meat is taste tested.
             Prices are per 1kg.`}
            price={1000}
          />
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
