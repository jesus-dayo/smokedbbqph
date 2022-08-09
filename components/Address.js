import FormContainer from './FormContainer';
import FormInput from './FormInput';

const Address = ({ className }) => {
  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-center font-bold text-xl uppercase mb-2">
          Delivery Address
        </h1>
      </div>
      <div className="flex flex-col gap-1">
        <FormInput label="Street Address" placeholder="Street Address" />
        <FormInput label="Barangay" placeholder="Barangay" />
        <FormInput label="City" placeholder="City" />
        <FormInput label="Postal Code" placeholder="Postal" />
      </div>
    </FormContainer>
  );
};

export default Address;
