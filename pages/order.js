import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import CheckoutButton from '../components/CheckoutButton/CheckoutButton';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import FilterGroup from '../components/FilterGroup/FilterGroup';
import CalendarReservation from '../components/CalendarReservation/CalendarReservation';
import uniqBy from 'lodash/uniqBy';
import flatMap from 'lodash/flatMap';
import { scheduleState } from '../states/schedule';
import { listProductsWithAvailability } from '../src/graphql/custom_queries';
import { productState } from '../states/product';
import moment from 'moment';
import useMaxOrders from '../hooks/useMaxOrders';
import { MAX_RIBS } from '../common/staticConfigs';
import { uiState } from '../states/uiState';
import { CITY } from '../common/city';

Amplify.configure({ ...awsExports, ssr: false });

const OrderPage = () => {
  const [filter, setFilter] = useState();
  const [recommended, setRecommended] = useState(true);
  const selectedSchedule = useRecoilValue(scheduleState);
  const [products, setProducts] = useState([]);
  const [_, setProductValue] = useRecoilState(productState);
  const max = useMaxOrders(selectedSchedule?.id);
  const ui = useRecoilValue(uiState);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availabilities, setAvailabilities] = useState([]);
  const router = useRouter();
  const orders = useRecoilValue(orderState);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    if (process?.env?.ENV === 'prod') {
      window.gtag('event', 'screen_view', { screen_name: 'Orders' });
    }
    const fetchProducts = async () => {
      const response = await API.graphql({
        query: listProductsWithAvailability,
      });
      let responseData = response.data.listProducts.items;
      if (responseData) {
        responseData = responseData?.sort((prev, next) => {
          if (prev.name > next.name) {
            return -1;
          } else if (prev.name < next.name) {
            return 1;
          }
          return 0;
        });
      }
      setProducts(responseData);
      setProductValue(responseData);
      const uniqAvail = uniqBy(
        flatMap(responseData.map((product) => product.availability.items)),
        'date'
      )
        .filter(
          (avail) =>
            moment(avail.date, 'DD MMM YYYY').toDate() > moment().toDate()
        )
        .sort((prev, next) => {
          if (prev.date > next.date) {
            return -1;
          } else if (prev.date < next.date) {
            return 1;
          }
          return 0;
        });
      setAvailabilities(uniqAvail);
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const filterProducts = () => {
      if (recommended) {
        return products.filter((prod) => prod.isRecommended);
      }
      if (filter) {
        return products.filter((prod) => prod.category === filter);
      }
    };
    setFilteredProducts(filterProducts());
  }, [products, recommended, filter, selectedSchedule?.id]);

  const routeToCheckoutPage = async () => {
    setInProgress(true);
    if (max > MAX_RIBS) {
      return;
    }
    if (orders?.length) {
      router.push('/checkout');
    }
  };

  const handleFilter = (category) => {
    setRecommended(false);
    setFilter(category);
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
    if (avail) {
      return avail.quantity;
    }
    return 0;
  };
  return (
    <Layout>
      <div className="p-2">
        <div className="flex justify-start bg-slate-500">
          <div className="p-5 text-white">
            We currently deliver to these places{' '}
            <span className="text-zinc-200 font-bold">
              {CITY.map((c) => c.name).join(', ')}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-start md:justify-start bg-gradient-to-r from-[#706f6f] to-[#888] p-3 gap-2">
          <CalendarReservation
            className="md:w-full"
            availabilities={availabilities}
            products={products}
          />
        </div>
        <div className="flex p-2 text-white font-serif">
          Placing of orders closes 8hrs before the selected delivery date.
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
        <div className="grid grid-cols-1 md:grid-cols-5 md:w-full lg:grid-cols-6 xl:grid-cols-5 justify-evenly md:justify-start bg-gradient-to-r from-[#706f6f] to-[#888] p-3 gap-2">
          {filteredProducts.map((item) => (
            <Card
              key={`item-${item.name}`}
              label={item.name}
              imgSrc={item.picture?.web}
              description={item.description}
              price={item.price}
              availableQuantity={getQuantityBaseOnSchedule(
                item.availability?.items
              )}
              originalPrice={item.originalPrice}
              productId={item.id}
              max={max}
              isQuantityLoading={ui.isQuantityLoading}
              isFrozen={item.isFrozen}
            />
          ))}
        </div>
      </div>
      {orders.length > 0 && (
        <div className="pt-1 pb-4 fixed -bottom-4 right-7 animate-bounce">
          <CheckoutButton
            onClick={routeToCheckoutPage}
            inProgress={inProgress}
          />
        </div>
      )}
    </Layout>
  );
};

export default OrderPage;
