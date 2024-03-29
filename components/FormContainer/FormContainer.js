const FormContainer = ({ children, className }) => {
  return (
    <div className="flex p-1 w-full">
      <div
        className={`w-full rounded-lg bg-white shadow-lg p-4 md:p-2 text-gray-700 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
