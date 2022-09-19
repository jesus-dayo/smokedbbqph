import PropTypes from 'prop-types';
import Quantity from '../Quantity/Quantity';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { orderState } from '../../states/orders';
import {
  removeItemAtIndex,
  convertToPHP,
  replaceItemAtIndex,
} from '../../utils/index';
import Image from 'next/image';
import { useAlert } from 'react-alert';

const Card = ({
  label,
  price,
  imgSrc,
  description,
  quantityCount = 0,
  availableQuantity,
}) => {
  const [quantity, setQuantity] = useState(quantityCount);
  const [orders, setOrders] = useRecoilState(orderState);
  const alert = useAlert();

  useEffect(() => {
    const foundOrder = orders.find((order) => order.label === label);
    if (foundOrder) {
      setQuantity(foundOrder.quantity);
    }
  }, []);

  useEffect(() => {
    console.log('availableQuantity', label, availableQuantity);
    if (!availableQuantity) {
      setQuantity(0);
    }
  }, [availableQuantity]);

  useEffect(
    () => {
      const updateOrders = () => {
        const foundOrderIndex = orders.findIndex(
          (order) => order.label === label
        );
        if (quantity === 0) {
          setOrders(removeItemAtIndex(orders, foundOrderIndex));
        } else {
          if (foundOrderIndex === -1) {
            setOrders([
              ...orders,
              {
                label,
                description,
                price,
                quantity,
                picture: imgSrc,
              },
            ]);
          } else {
            setOrders(
              replaceItemAtIndex(orders, foundOrderIndex, {
                label,
                description,
                price,
                quantity,
                picture: imgSrc,
              })
            );
          }
        }
      };
      updateOrders();
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [quantity]
  );

  const handleAddQuantity = () => {
    alert.removeAll();
    const newQuantity = quantity + 1;
    if (newQuantity > availableQuantity) {
      alert.show('Max exceeded');
    } else {
      setQuantity(newQuantity);
    }
  };

  const handleMinusQuantity = () => {
    alert.removeAll();
    if (quantity > 0) {
      console.log('quantity', quantity);
      setQuantity(quantity - 1);
    }
  };
  return (
    <div
      data-cy={`test-${label}-card`}
      className="bg-white w-full max-h-full h-full shadow-md flex-col md:w-2/12 md:h-full md:max-h-full"
    >
      <div className="text-sm pl-2 pr-2">
        <strong>{label}</strong>
      </div>
      <div className="p-1 border-2 h-36 w-full relative">
        {imgSrc && (
          <Image src={imgSrc} alt={label} layout="fill" objectFit="contain" />
        )}
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
          id={label}
          notAvail={availableQuantity === 0}
        />
      </div>
      <div
        data-cy={`test-${label}-quantity-avail-id`}
        className={
          'h-8 text-center text-lg md:text-sm text-red-400 font-semibold'
        }
      >
        {availableQuantity !== 0 && `${availableQuantity} left`}
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.string,
  quantityCount: PropTypes.number,
  availableQuantity: PropTypes.number,
};

export default Card;
