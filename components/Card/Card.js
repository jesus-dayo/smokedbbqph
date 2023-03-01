import PropTypes from 'prop-types';
import { convertToPHP } from '../../utils/util';
import Image from 'next/image';
import useOrders from '../../hooks/useOrders';
import { MAX_RIBS } from '../../common/staticConfigs';
import Button from '../Button/Button';
import Modal from 'react-modal';
import { useState } from 'react';
import QuantityOrder from '../Quantity/QuantityOrder';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

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
  reheat,
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
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isTagalog, setIsTagalog] = useState(false);

  const displayReheat = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleTagalog = () => {
    setIsTagalog(!isTagalog);
  };

  return (
    <div
      data-cy={`test-${label}-card`}
      className="bg-white w-full max-h-full h-full shadow-md flex-col md:h-full md:max-h-full"
    >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="text-right flex justify-between">
          <div>
            <strong>Instructions</strong>
          </div>
          <button onClick={closeModal} className={'text-white bg-red-500 p-2'}>
            Close
          </button>
        </div>
        <div>
          <div>
            <p className="whitespace-pre-line">
              {!isTagalog
                ? `
    1. Boil Reheating (Easy and Recommended)
    Do not cut open vacuum seal. Boil water and once boiling, turn off the heat. Put the entire vacuum sealed meat in the boiled water. Wait for 10 to 15 minutes. Remove the vacuum sealed ribs and ready to eat.
    2. Oven Reheating: Remove meat from vacuum seal, Oven wrap with foil, preheat 250-275 degrees. Put the meat inside the oven and lower to temperature 145 degrees. Wait for 15 to 20 minutes.`
                : `
    1. Pagpapainit sa Pagpapakuluan (Madali at Hinihikayat) 
    Huwag mo hiwain ang vacuum seal. Magpakulo ng tubig at Pagkumukulo na ay patayin mo na ang apoy.  Ilagay ang buong vacuum sealed na karne sa kumukulong tubig. Magantay ng 10 hanggang 15 minuto. Alisin ang vacuum sealed na ribs at handa na itong kainin.
    2. Pagpapainit sa Oven: Alisin ang karne mula sa vacuum seal, wrap sa foil para sa oven, preheat ng 250-275 degrees, ilagay ang karne at ibaba sa temperature na 145 degrees. Magantay ng 15 hanggang 20 minuto. Handa na itong kainin.
    `}
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={toggleTagalog}
              className={'text-white bg-slate-500 p-2'}
            >
              {isTagalog ? 'English Version' : 'Tagalog Version'}
            </button>
          </div>
        </div>
      </Modal>
      <div className="text-lg lg:text-sm xl:text-sm pl-1 pr-1 h-6">
        <strong>{label}</strong>
      </div>
      <div className="p-1 border-2 w-full  relative">
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={label}
            width={1000}
            height={1000}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
      </div>
      <div className="text-sm md:text-sm lg:text-xs xl:text-sm p-2 h-40 sm:h-44 md:h-56">
        {description}
        <div className="text-center p-2">
          {reheat && (
            <Button onClick={displayReheat}>Heating Instructions</Button>
          )}
        </div>
      </div>
      <div className="text-md text-center opacity-80 p-4">
        <p className="bg-slate-200 text-black ring-offset-2 ring-2">
          <strong>
            Price:{' '}
            <span className="text-green-900 text-lg ">
              {' '}
              {convertToPHP(price)}
            </span>
            <div
              data-cy={`test-${label}-quantity-avail-id`}
              className={
                'h-6 text-center text-sm md:text-sm text-orange-900 font-semibold animate-pulse'
              }
            >
              {availableQuantity !== 0 &&
                (isFrozen || max !== MAX_RIBS) &&
                `${availableQuantity} left`}
            </div>
          </strong>
        </p>
      </div>
      <div className="p-2 flex items-center justify-center">
        <QuantityOrder
          value={order.quantity}
          onAdd={handleAddQuantity}
          onMinus={handleMinusQuantity}
          id={label}
          notAvail={availableQuantity === 0 || (!isFrozen && max === MAX_RIBS)}
          isLoading={isQuantityLoading}
        />
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
