import PropTypes from 'prop-types';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

const Quantity = ({ value = 0, onAdd, onMinus, className, id }) => {
  return (
    <div className={`flex bg-black rounded-md h-10 ${className}`}>
      <div className="w-8 text-white ">
        <PlusSmIcon
          onClick={onAdd}
          className="cursor-pointer"
          data-cy={`test-${id}-quantity-plus-id`}
        />
      </div>
      <div className="text-center text-black">
        <input
          type={'text'}
          value={value}
          data-cy={`test-${id}-quantity-input-id`}
          onChange={() => {}}
          className="w-8 h-full text-center border-t-2 border-b-2 border-black"
        />
      </div>
      <div className="w-8 text-white">
        <MinusSmIcon
          onClick={onMinus}
          className="cursor-pointer"
          data-cy={`test-${id}-quantity-minus-id`}
        />
      </div>
    </div>
  );
};

Quantity.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  onAdd: PropTypes.func,
  onMinus: PropTypes.func,
  value: PropTypes.number,
};

export default Quantity;
