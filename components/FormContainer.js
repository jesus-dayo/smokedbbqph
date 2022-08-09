const FormContainer = ({ children, className }) => {
  return (
    <div className="flex p-1 w-full">
      <div
        className={`w-full rounded-lg bg-white shadow-lg p-10 text-gray-700 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
