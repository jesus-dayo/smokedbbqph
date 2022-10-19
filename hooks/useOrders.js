import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useRecoilState } from 'recoil';
import { orderState } from '../states/orders';
import { removeItemAtIndex, replaceItemAtIndex } from '../utils/util';
import { Amplify, API } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { getConfig } from '../src/graphql/queries';
import { MAX_RIBS } from '../common/staticConfigs';

Amplify.configure({ ...awsExports, ssr: true });

const useOrders = ({
  label,
  description,
  price,
  imgSrc,
  availableQuantity,
  productId,
  isFrozen,
  max = 0,
}) => {
  console.log('isFrozen', isFrozen);
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
        isFrozen,
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
            isFrozen,
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
            isFrozen,
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
        isFrozen,
      });
    }
  };

  const handleAddQuantity = () => {
    alert.removeAll();
    if (!validateMaxLimit()) {
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

  const validateMaxLimit = () => {
    alert.removeAll();
    const totalQuantity = orders
      .filter((order) => !order.isFrozen)
      .reduce((prev, current) => prev + current.quantity, 1);
    console.log('orders', orders);
    if (totalQuantity + max > MAX_RIBS) {
      alert.show(`Sorry, as of now, we have max 10 limit in our smokers 
        and someone has ordered alongside with you. 
        Currenty, we have ${
          MAX_RIBS - max
        } available space for ribs in our smoker.`);
      return false;
    }
    return true;
  };

  return {
    order,
    handleAddQuantity,
    handleMinusQuantity,
    validateMaxLimit,
  };
};

export default useOrders;
