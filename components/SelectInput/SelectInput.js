import PropTypes from 'prop-types';

const SelectInput = ({
  label,
  value,
  options,
  placeholder,
  onChange,
  onBlur,
  testId,
  validationError,
  error,
  required,
  disabled,
}) => {
  return (
    <div
      className="mb-3 md:mb-0 text-left"
      data-cy={`test-${testId}-input-container`}
    >
      <label className="font-bold text-sm text-left">
        {required && <span className="text-red-500">*</span>}
        {label}
      </label>
      <div className="p-1">
        <select
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          data-cy={`test-${testId}-input`}
          disabled={disabled}
          className='className="w-full md:w-4/5 md:h-8 px-3 py-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"'
        >
          {options.map((option) => (
            <option key={option.label} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <div className="text-red-500 text-sm">{validationError}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  value: PropTypes.object,
  options: PropTypes.array,
  error: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  validationError: PropTypes.string,
  required: PropTypes.bool,
};

export default SelectInput;
