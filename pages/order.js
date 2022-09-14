import React from 'react';
import Layout from '../components/Layout/Layout';
import FilterButton from '../components/FilterButton/FilterButton';
import Card from '../components/Card/Card';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { orderState } from '../states/orders';
import CheckoutButton from '../components/CheckoutButton/CheckoutButton';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify, API, Auth, withSSRContext } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { listProducts } from '../src/graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

export const getServerSideProps = async ({ req }) => {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({ query: listProducts });

  return {
    props: {
      products: response.data.listProducts.items,
    },
  };
};

const OrderPage = ({ products = [] }) => {
  console.log('products', products);
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
        <div className="bg-gradient-to-r from-[#706f6f] to-[#888] grow p-2 space-x-2 ">
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
        <div className="flex flex-wrap justify-evenly md:justify-start bg-gradient-to-r from-[#706f6f] to-[#888] p-3 gap-2">
          {products?.map((item) => (
            <Card
              key={`item-${item.id}`}
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
