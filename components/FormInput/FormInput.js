import PropTypes from 'prop-types';

const FormInput = ({
  label,
  placeholder,
  onChange,
  onBlur,
  testId,
  validationError,
  error,
  maxLength,
  required,
  type = 'text',
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
        <input
          className="w-full md:w-4/5 md:h-8 px-3 py-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          data-cy={`test-${testId}-input`}
          maxLength={maxLength}
        />
        {error && <div className="text-red-500 text-sm">{validationError}</div>}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  error: PropTypes.bool,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  testId: PropTypes.string,
  validationError: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default FormInput;
