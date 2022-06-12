const FormInput = ({ label, placeholder, onChange }) => {
  return (
    <div className="mb-3">
      <label className="font-bold text-sm mb-2 ml-1">{label}</label>
      <div>
        <input
          className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
          placeholder={placeholder}
          type="text"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
