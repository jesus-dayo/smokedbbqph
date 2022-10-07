import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useRecoilState } from 'recoil';
import { orderState } from '../states/orders';
import { removeItemAtIndex, replaceItemAtIndex } from '../utils/util';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { getConfig } from '../src/graphql/queries';

Amplify.configure({ ...awsExports, ssr: true });

const useOrders = ({
  label,
  description,
  price,
  imgSrc,
  availableQuantity,
  productId,
}) => {
  const [orders, setOrders] = useRecoilState(orderState);
  const [currentConfig, setCurrentConfig] = useState();
  const getQuantity = () => {
    const foundOrder = orders.find((order) => order.label === label);
    return foundOrder?.quantity || 0;
  };
  const [order, setOrder] = useState({
    label,
    quantity: getQuantity(),
    description,
    price,
    imgSrc,
    availableQuantity,
    productId,
  });
  const alert = useAlert();

  useEffect(() => {
    const fetchConfig = async () => {
      const config = await API.graphql({
        query: getConfig,
        variables: {
          id: 'config',
        },
      });
      setCurrentConfig(config?.data?.getConfig);
    };
    fetchConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const foundOrder = orders.find((order) => order.label === label);
    if (foundOrder) {
      setOrder({
        ...foundOrder,
      });
    } else {
      setOrder({
        label,
        quantity: 0,
        description,
        price,
        imgSrc,
        availableQuantity,
        productId,
      });
    }
  }, [orders]);

  const updateOrders = (newQuantity) => {
    const foundOrderIndex = orders.findIndex((order) => order.label === label);
    if (newQuantity === 0) {
      setOrders(removeItemAtIndex(orders, foundOrderIndex));
    } else {
      if (foundOrderIndex === -1) {
        setOrders([
          ...orders,
          {
            label,
            description,
            price,
            quantity: newQuantity,
            picture: imgSrc,
            availableQuantity,
            productId,
          },
        ]);
      } else {
        setOrders(
          replaceItemAtIndex(orders, foundOrderIndex, {
            label,
            description,
            price,
            quantity: newQuantity,
            picture: imgSrc,
            availableQuantity,
            productId,
          })
        );
      }
      setOrder({
        label,
        description,
        price,
        quantity: newQuantity,
        picture: imgSrc,
        availableQuantity,
        productId,
      });
    }
  };

  const handleAddQuantity = () => {
    alert.removeAll();
    const totalQuantity = orders.reduce(
      (prev, current) => prev + current.quantity,
      1
    );
    console.log('totalQuantity', totalQuantity);
    if (totalQuantity > 10) {
      alert.show(`Sorry, but as of now our grills can only accomodate total 10. 
      If you need more for an event, please contact our hotline ${currentConfig?.phoneNumber} 
      and we can discuss on our event packages.`);
      return;
    }

    const newQuantity = getQuantity() + 1;
    if (newQuantity > availableQuantity) {
      alert.show('Max exceeded');
    } else {
      updateOrders(newQuantity);
    }
  };

  const handleMinusQuantity = () => {
    alert.removeAll();
    if (getQuantity() > 0) {
      updateOrders(getQuantity() - 1);
    }
  };

  return {
    order,
    handleAddQuantity,
    handleMinusQuantity,
  };
};

export default useOrders;
