const FormContainer = ({ children }) => {
  return (
    <div className="flex p-1">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
