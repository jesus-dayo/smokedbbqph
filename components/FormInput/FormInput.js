const FormInput = ({ label, placeholder, onChange }) => {
  return (
    <div className="mb-3 text-left">
      <label className="font-bold text-sm text-left">{label}</label>
      <div className="p-1">
        <input
          className="w-full px-3 py-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder={placeholder}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
