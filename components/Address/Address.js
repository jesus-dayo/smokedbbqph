import { useRecoilState } from 'recoil';
import { CITY } from '../../common/city';
import { addressState } from '../../states/address';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import SelectInput from '../SelectInput/SelectInput';

const Address = ({ className, validate, errors = [] }) => {
  const [address, setAddress] = useRecoilState(addressState);

  const handleChange = (e, fieldName) => {
    setAddress({
      ...address,
      [fieldName]: e.target.value,
    });
    validate(e, fieldName);
  };

  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text-sm md:text-lg uppercase ">
          Delivery Address
        </h1>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <FormInput
          label="House No"
          placeholder="House No"
          testId="houseNo"
          value={address.houseNo}
          validationError={'house number is a required field'}
          onChange={(e) => handleChange(e, 'houseNo')}
          onBlur={(e) => validate(e, 'houseNo')}
          error={errors.includes('houseNo')}
          maxLength={50}
          required
        />
        <FormInput
          label="Street Address"
          placeholder="Street Address"
          testId="streetAddress"
          value={address.street}
          validationError={'street address is a required field'}
          onChange={(e) => handleChange(e, 'street')}
          onBlur={(e) => validate(e, 'street')}
          error={errors.includes('street')}
          maxLength={50}
          required
        />
        <FormInput
          label="Barangay"
          value={address.barangay}
          placeholder="Barangay"
          testId="barangay"
          onChange={(e) => handleChange(e, 'barangay')}
        />
        <SelectInput
          label="City"
          value={address.city}
          options={CITY}
          placeholder="City"
          testId="city"
          validationError={'city is a required field'}
          onChange={(e) => handleChange(e, 'city')}
          onBlur={(e) => validate(e, 'city')}
          error={errors.includes('city')}
          maxLength={50}
          required
        />
        <FormInput
          value={address.postalCode}
          label="Postal Code"
          placeholder="Postal"
          onChange={(e) => handleChange(e, 'postalCode')}
          testId="postal"
        />
      </div>
    </FormContainer>
  );
};

export default Address;
