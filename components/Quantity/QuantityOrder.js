import PropTypes from 'prop-types';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/outline';

const QuantityOrder = ({
  value = 0,
  onAdd,
  onMinus,
  className,
  id,
  notAvail,
  isLoading,
  disabled,
}) => {
  if (isLoading) {
    return (
      <div
        data-cy={`test-${id}-quantity-id`}
        className="h-full md:h-6 w-28 md:w-full flex justify-center text-align-center-center align-middle "
      >
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

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
      className={`flex bg-black rounded-md  pr-1 text-white h-full w-44 ${className}`}
      data-cy={`test-${id}-quantity-id`}
    >
      {!notAvail && (
        <div className="flex flex-row justify-around w-full">
          <div className="w-8 md:w-8 flex justify-center text-white">
            {!disabled && (
              <MinusSmIcon
                onClick={onMinus}
                className="cursor-pointer text-white"
                data-cy={`test-${id}-quantity-minus-id`}
              />
            )}
            {disabled && (
              <MinusSmIcon
                className=" text-white"
                data-cy={`test-${id}-quantity-minus-id`}
              />
            )}
          </div>
          <div className="text-center text-black">
            <input
              type={'text'}
              value={value}
              data-cy={`test-${id}-quantity-input-id`}
              disabled={disabled}
              className="w-14 h-full text-center border-t-2 border-b-2 border-black"
            />
          </div>
          <div className="w-8 md:w-8 flex justify-center text-white">
            {!disabled && (
              <PlusSmIcon
                onClick={onAdd}
                className="cursor-pointer text-white"
                data-cy={`test-${id}-quantity-plus-id`}
              />
            )}
            {disabled && (
              <PlusSmIcon
                className=" text-white"
                data-cy={`test-${id}-quantity-plus-id`}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

QuantityOrder.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  onAdd: PropTypes.func,
  onMinus: PropTypes.func,
  value: PropTypes.number,
  notAvail: PropTypes.bool,
};

export default QuantityOrder;
