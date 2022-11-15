import PropTypes from 'prop-types';
import Quantity from '../Quantity/Quantity';
import { convertToPHP } from '../../utils/util';
import Image from 'next/image';
import useOrders from '../../hooks/useOrders';
import { MAX_RIBS } from '../../common/staticConfigs';

const Card = ({
  label,
  originalPrice,
  price,
  imgSrc,
  description,
  availableQuantity,
  productId,
  isFrozen,
  max,
  isQuantityLoading,
}) => {
  const { order, handleAddQuantity, handleMinusQuantity } = useOrders({
    label,
    price,
    imgSrc,
    description,
    availableQuantity,
    productId,
    isFrozen,
    max,
  });
  return (
    <div
      data-cy={`test-${label}-card`}
      className="bg-white w-full max-h-full h-full shadow-md flex-col md:h-full md:max-h-full"
    >
      <div className="text-sm pl-2 pr-2">
        <strong>{label}</strong>
      </div>
      <div className="p-1 border-2 h-52 w-full relative">
        {imgSrc && (
          <Image src={imgSrc} alt={label} objectFit="fill" layout="fill" />
        )}
      </div>
      <div className="text-sm md:text-xs xl:text-xs p-2 h-36">
        {description}
      </div>
      {/* <div className="text-md text-center opacity-80 p-2">
        <p className="bg-red-600 text-white ring-offset-2 ring-2">
          <strong className="line-through">
            Original Price: {convertToPHP(originalPrice)}
          </strong>
        </p>
      </div> */}
      <div className="text-md text-center opacity-80 p-2">
        <p className="bg-green-600 text-white ring-offset-2 ring-2">
          <strong>
            Today's Price: <strikethrough>{convertToPHP(price)}</strikethrough>
          </strong>
        </p>
      </div>
      <div className="p-2 flex items-center justify-center">
        <Quantity
          value={order.quantity}
          onAdd={handleAddQuantity}
          onMinus={handleMinusQuantity}
          id={label}
          notAvail={availableQuantity === 0 || (!isFrozen && max === MAX_RIBS)}
          isLoading={isQuantityLoading}
        />
      </div>
      <div
        data-cy={`test-${label}-quantity-avail-id`}
        className={
          'h-8 text-center text-lg md:text-sm text-red-400 font-semibold'
        }
      >
        {availableQuantity !== 0 &&
          (isFrozen || max !== MAX_RIBS) &&
          `${availableQuantity} left`}
      </div>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  imgSrc: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.number,
  quantityCount: PropTypes.number,
  availableQuantity: PropTypes.number,
  isFrozen: PropTypes.bool,
};

export default Card;
