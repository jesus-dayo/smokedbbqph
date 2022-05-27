import React from 'react';
import Layout from '../components/Layout';
import FilterButton from '../components/FilterButton';
import Card from '../components/Card';
import Button from '../components/Button';

const OrderPage = () => {
  return (
    <Layout>
      <div>
        <div className="flex p-2 space-x-2 border-gray-800 border-2">
          <FilterButton>Recommended</FilterButton>
          <FilterButton>Beef</FilterButton>
          <FilterButton>Pork</FilterButton>
          <FilterButton>Seafood</FilterButton>
          <FilterButton>Rubs</FilterButton>
        </div>
      </div>
      <div className="p-2">
        <div className="flex flex-wrap justify-evenly bg-black p-3 gap-2">
          <Card
            label={'Beef Brisket'}
            imgSrc={'/sliced_beef_brisket.jpg'}
            description={`Smoked barbecued for 12hrs until tender with our secret rub. 
              Best partnered with your favorite wine or whisky.
              Prices are per 1kg.`}
            price={'1,800'}
          />
          <Card
            label={'Pork Ribs'}
            imgSrc={'/pork_ribs.jpg'}
            description={
              'Smoked barbecued for 8hrs until tender with our secret rub. Warning: Very Addictive. Prices are per 1kg.'
            }
            price={'1,200'}
          />
          <Card
            label={'Blood Sausage'}
            imgSrc={'/blood_sausage.jpg'}
            description={`Try our homemade blood sausages and you wont regret trying it. 
               Best combined with your favorite rice.
               Prices are per 1kg.`}
            price={'800'}
          />
          <Card
            label={'Angus Beef'}
            imgSrc={'/angus_beef.jpg'}
            description={`Angus Beef is a crowd favorite. 
            Smoked for 8hrs, this precious piece of meat is taste tested.
             Prices are per 1kg.`}
            price={'1,000'}
          />
        </div>
      </div>
      <div className="text-center">
        <Button>Checkout</Button>
      </div>
    </Layout>
  );
};

export default OrderPage;
