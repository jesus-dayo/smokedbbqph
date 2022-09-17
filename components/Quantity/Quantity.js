import PropTypes from 'prop-types';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

const Quantity = ({ value = 0, onAdd, onMinus, className, id, notAvail }) => {
  return (
    <div
      className={`flex bg-black rounded-md p-2 text-white h-full ${className}`}
      data-cy={`test-${id}-quantity-id`}
    >
      {notAvail && (
        <div className="h-8 flex justify-center text-align-center-center align-middle ">
          Not Available
        </div>
      )}
      {!notAvail && (
        <div className="flex flex-row gap-3 w-full h-8">
          <div className="w-8">
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
          <div className="w-8">
            <MinusSmIcon
              onClick={onMinus}
              className="cursor-pointer"
              data-cy={`test-${id}-quantity-minus-id`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

Quantity.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  onAdd: PropTypes.func,
  onMinus: PropTypes.func,
  value: PropTypes.number,
  notAvail: PropTypes.bool,
};

export default Quantity;
