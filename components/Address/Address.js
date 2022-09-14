import { useRecoilState } from 'recoil';
import { addressState } from '../../states/address';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';

const Address = ({ className }) => {
  const [address, setAddress] = useRecoilState(addressState);

  const handleHouseNo = (e) => {
    setAddress({
      ...address,
      houseNo: e.target.value,
    });
  };

  const handleStreetAddress = (e) => {
    setAddress({
      ...address,
      street: e.target.value,
    });
  };

  const handleBarangay = (e) => {
    setAddress({
      ...address,
      barangay: e.target.value,
    });
  };

  const handleCity = (e) => {
    setAddress({
      ...address,
      city: e.target.value,
    });
  };

  const handlePostal = (e) => {
    setAddress({
      ...address,
      postalCode: e.target.value,
    });
  };

  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text:lg md:text-xl uppercase ">
          Delivery Address
        </h1>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <FormInput
          label="House No"
          placeholder="House No"
          onChange={handleHouseNo}
        />
        <FormInput
          label="Street Address"
          placeholder="Street Address"
          onChange={handleStreetAddress}
        />
        <FormInput
          label="Barangay"
          placeholder="Barangay"
          onChange={handleBarangay}
        />
        <FormInput label="City" placeholder="City" onChange={handleCity} />
        <FormInput
          label="Postal Code"
          placeholder="Postal"
          onChange={handlePostal}
        />
      </div>
    </FormContainer>
  );
};

export default Address;
