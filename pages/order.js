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
import { event } from 'nextjs-google-analytics';

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
    event('orders_page', {
      category: 'Orders',
    });
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
          if (prev.date < next.date) {
            return -1;
          } else if (prev.date > next.date) {
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
      label: 'Pork',
      click: () => handleFilter('pork'),
      props: {
        dataCy: 'test-category-pork-id',
      },
    },
    {
      label: 'Chicken',
      click: () => handleFilter('chicken'),
      props: {
        dataCy: 'test-category-chicken-id',
      },
    },
    {
      label: 'Seafood',
      click: () => handleFilter('fish'),
      props: {
        dataCy: 'test-category-fish-id',
      },
    },
    {
      label: 'Platter',
      click: () => handleFilter('platter'),
      props: {
        dataCy: 'test-category-platter-id',
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
      <div className="flex w-full border-gray-800  border-t-2 border-b-2 p-1">
        <div className="p-1 bg-gradient-to-r from-[#706f6f] to-[#888] w-full">
          <div className="flex flex-col md:flex-row gap-2 md:gap-2">
            <FilterGroup filters={filters} />
          </div>
        </div>
      </div>
      <div className="p-2 mb-10">
        {/* sm:grid-cols-4 md:grid-cols-4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  md:w-full lg:grid-cols-4 xl:grid-cols-4 justify-evenly md:justify-start bg-gradient-to-r from-[#706f6f] to-[#888] p-3 gap-2">
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
              reheat={item.reheat}
            />
          ))}
        </div>
      </div>
      {orders.length > 0 && (
        <div className="pt-1 pb-1 fixed -bottom-0 right-7 animate-bounce">
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
