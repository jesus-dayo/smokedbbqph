import PropTypes from 'prop-types';
import Quantity from '../Quantity/Quantity';
import { useEffect } from 'react';
import { convertToPHP } from '../../utils/index';
import Image from 'next/image';
import useOrders from '../../hooks/useOrders';

const Card = ({ label, price, imgSrc, description, availableQuantity }) => {
  const { order, handleAddQuantity, handleMinusQuantity } = useOrders({
    label,
    price,
    imgSrc,
    description,
    availableQuantity,
  });
  console.log('order card', order);
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
          value={order.quantity}
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
