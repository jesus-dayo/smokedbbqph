import PropTypes from 'prop-types';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

const Quantity = ({ value = 0, onAdd, onMinus, className, id, notAvail }) => {
  if (notAvail) {
    return (
      <div
        data-cy={`test-${id}-quantity-id`}
        className="h-full md:h-6 w-28 md:w-full flex justify-center text-align-center-center align-middle "
      >
        Sold Out
      </div>
    );
  }

  return (
    <div
      className={`flex bg-black rounded-md  pr-1 text-white h-full md:h-6 w-20 md:w-20 ${className}`}
      data-cy={`test-${id}-quantity-id`}
    >
      {!notAvail && (
        <div className="flex flex-row justify-around h-6 md:h-6 w-full">
          <div className="w-4 md:w-4 flex justify-center">
            <MinusSmIcon
              onClick={onMinus}
              className="cursor-pointer md:h-6"
              data-cy={`test-${id}-quantity-minus-id`}
            />
          </div>
          <div className="text-center text-black">
            <input
              type={'text'}
              value={value}
              data-cy={`test-${id}-quantity-input-id`}
              onChange={() => {}}
              className="w-6 md:w-6 h-full md:h-6 text-center border-t-2 border-b-2 border-black"
            />
          </div>
          <div className="w-4 md:w-4 flex justify-center">
            <PlusSmIcon
              onClick={onAdd}
              className="cursor-pointer md:h-6"
              data-cy={`test-${id}-quantity-plus-id`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

Quantity.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onAdd: PropTypes.func,
  onMinus: PropTypes.func,
  value: PropTypes.number,
  notAvail: PropTypes.bool,
};

export default Quantity;
