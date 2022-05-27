import Quantity from './Quantity';
import { useState } from 'react';

const Card = ({ label, price, imgSrc, description, notAvailable }) => {
  const [quantity, setQuantity] = useState(0);

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
          <strong>₱{price}</strong>
        </p>
      </div>
      <div className="p-2 flex items-center justify-center">
        <Quantity
          value={quantity}
          onAdd={() => setQuantity(quantity + 1)}
          onMinus={() => {
            if (quantity > 0) setQuantity(quantity - 1);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
