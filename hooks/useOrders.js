import { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useRecoilState } from 'recoil';
import { orderState } from '../states/orders';
import { removeItemAtIndex, replaceItemAtIndex } from '../utils';

const useOrders = ({
  label,
  description,
  price,
  imgSrc,
  availableQuantity,
}) => {
  const [orders, setOrders] = useRecoilState(orderState);
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
  });
  const alert = useAlert();

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
      });
    }
  }, [orders]);

  const updateOrders = (newQuantity) => {
    const foundOrderIndex = orders.findIndex((order) => order.label === label);
    if (newQuantity === 0) {
      console.log('newQuantity is 0 removing', foundOrderIndex);
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
          })
        );
      }
      console.log('newQuantity', newQuantity);
      setOrder({
        label,
        description,
        price,
        quantity: newQuantity,
        picture: imgSrc,
        availableQuantity,
      });
    }
  };

  const handleAddQuantity = () => {
    alert.removeAll();
    const newQuantity = getQuantity() + 1;
    if (newQuantity > availableQuantity) {
      alert.show('Max exceeded');
    } else {
      updateOrders(newQuantity);
    }
  };

  const handleMinusQuantity = () => {
    alert.removeAll();
    console.log('try to minus 1', getQuantity());
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
