import Quantity from './Quantity';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from '../states/orders';
import {
  removeItemAtIndex,
  convertToPHP,
  replaceItemAtIndex,
} from '../utils/index';

const Card = ({
  id,
  label,
  price,
  imgSrc,
  description,
  quantityCount = 0,
  notAvailable,
}) => {
  const [quantity, setQuantity] = useState(quantityCount);
  const [orders, setOrders] = useRecoilState(orderState);

  useEffect(() => {
    const updateOrders = () => {
      const foundOrderIndex = orders.findIndex((order) => order.id === id);
      if (quantity === 0) {
        setOrders(removeItemAtIndex(orders, foundOrderIndex));
      } else {
        if (foundOrderIndex === -1) {
          setOrders([
            ...orders,
            {
              id,
              label,
              price,
              quantity,
            },
          ]);
        } else {
          setOrders(
            replaceItemAtIndex(orders, foundOrderIndex, {
              id,
              label,
              price,
              quantity,
            })
          );
        }
      }
    };
    updateOrders();
  }, [quantity]);

  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const handleMinusQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <div className="bg-white w-40 max-h-96 h-96 shadow-md flex-col">
      <div className="text-sm pl-2 pr-2">
        <strong>{label}</strong>
      </div>
      <div className="p-1 border-2 h-36">
        <img src={imgSrc} className="h-32 w-full" />
      </div>
      <div className="text-xs p-2 h-28">{description}</div>
      <div className="text-md text-center opacity-80 p-2">
        <p className="bg-gray-900 text-white ring-offset-2 ring-2">
          <strong>{convertToPHP(price)}</strong>
        </p>
      </div>
      <div className="p-2 flex items-center justify-center">
        <Quantity
          value={quantity}
          onAdd={handleAddQuantity}
          onMinus={handleMinusQuantity}
        />
      </div>
    </div>
  );
};

export default Card;
