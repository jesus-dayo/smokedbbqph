import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import CheckoutButton from '../components/CheckoutButton/CheckoutButton';
import { Amplify, withSSRContext } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import FilterGroup from '../components/FilterGroup/FilterGroup';
import CalendarReservation from '../components/CalendarReservation/CalendarReservation';
import uniqBy from 'lodash/uniqBy';
import flatMap from 'lodash/flatMap';
import { scheduleState } from '../states/schedule';
import { listProductsWithAvailability } from '../src/graphql/custom_queries';

Amplify.configure({ ...awsExports, ssr: true });

export const getServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({
    query: listProductsWithAvailability,
  });
  console.log('response', response);
  return {
    props: {
      products: response.data.listProducts.items,
    },
  };
};

const OrderPage = ({ products = [] }) => {
  console.log('products', products);
  const [filter, setFilter] = useState();
  const [recommended, setRecommended] = useState(true);
  const selectedSchedule = useRecoilValue(scheduleState);

  const availabilities = uniqBy(
    flatMap(products.map((product) => product.availability.items)),
    'date'
  );
  const router = useRouter();
  const orders = useRecoilValue(orderState);

  const routeToCheckoutPage = () => {
    if (orders.length) {
      router.push('/checkout');
    }
  };

  const handleFilter = (category) => {
    setRecommended(false);
    setFilter(category);
  };

  const filteredProducts = () => {
    if (recommended) {
      return products.filter((prod) => prod.isRecommended);
    }
    if (filter) {
      return products.filter((prod) => prod.category === filter);
    }
  };

  const filters = [
    {
      label: 'Recommended',
      click: () => setRecommended(true),
      props: {
        dataCy: 'test-category-recommended-id',
      },
    },
    {
      label: 'Beef',
      click: () => handleFilter('beef'),
      props: {
        dataCy: 'test-category-beef-id',
      },
    },
    {
      label: 'Pork',
      click: () => handleFilter('pork'),
      props: {
        dataCy: 'test-category-pork-id',
      },
    },
    {
      label: 'Seafood',
      click: () => handleFilter('seafood'),
      props: {
        dataCy: 'test-category-seafood-id',
      },
    },
    {
      label: 'Rubs',
      click: () => handleFilter('rubs'),
      props: {
        dataCy: 'test-category-rubs-id',
      },
    },
  ];

  const getQuantityBaseOnSchedule = (availability) => {
    if (!availability) {
      return 0;
    }
    const avail = availability.find(
      (avail) => avail.date === selectedSchedule.date
    );
    console.log('getQuantityBaseOnSchedule', avail);
    if (avail) {
      return avail.quantity;
    }
    return 0;
  };

  return (
    <Layout>
      <div className="p-2">
        <div className="flex flex-wrap justify-evenly md:justify-start bg-gradient-to-r from-[#706f6f] to-[#888] p-3 gap-2">
          <CalendarReservation
            className="md:w-full"
            availabilities={availabilities}
            products={products}
          />
        </div>
      </div>
      <div className="flex border-gray-800 border-t-2 border-b-2 p-2">
        <div className="bg-gradient-to-r from-[#706f6f] to-[#888] grow p-2 space-x-2 ">
          <div className="grid grid-flow-col gap-2 md:w-8/12 md:gap-5">
            <FilterGroup filters={filters} />
          </div>
        </div>
      </div>
      <div className="p-2 mb-10">
        <div className="flex flex-wrap justify-evenly md:justify-start bg-gradient-to-r from-[#706f6f] to-[#888] p-3 gap-2">
          {filteredProducts().map((item) => (
            <Card
              key={`item-${item.name}`}
              label={item.name}
              imgSrc={item.picture?.web}
              description={item.description}
              price={item.price}
              availableQuantity={getQuantityBaseOnSchedule(
                item.availability?.items
              )}
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
