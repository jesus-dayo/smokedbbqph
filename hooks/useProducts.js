import React, { useState, useEffect } from 'react';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { listProductsWithAvailability } from '../src/graphql/custom_queries';

Amplify.configure({ ...awsExports, ssr: false });

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
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
    };
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return products;
};

export default useProducts;
