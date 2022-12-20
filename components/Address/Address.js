import { useRecoilState } from 'recoil';
import { CITY } from '../../common/city';
import { addressState } from '../../states/address';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import SelectInput from '../SelectInput/SelectInput';

const Address = ({ className, validate, errors = [], disabled }) => {
  const [address, setAddress] = useRecoilState(addressState);

  const handleChange = (e, fieldName) => {
    setAddress({
      ...address,
      [fieldName]: e.target.value,
    });
    validate(e, fieldName);
  };
  console.log('address.city', address.city);
  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text-sm md:text-lg uppercase ">
          Delivery Address
        </h1>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <FormInput
          name={'houseNumber'}
          type="address-line1"
          label="House No"
          placeholder="House No"
          testId="houseNo"
          value={address.houseNo}
          validationError={'house number is a required field'}
          onChange={(e) => handleChange(e, 'houseNo')}
          onBlur={(e) => validate(e, 'houseNo')}
          error={errors.includes('houseNo')}
          maxLength={50}
          disabled={disabled}
          required
        />
        <FormInput
          name="street"
          type="street-address"
          label="Street Address"
          placeholder="Street Address"
          testId="streetAddress"
          value={address.street}
          validationError={'street address is a required field'}
          onChange={(e) => handleChange(e, 'street')}
          onBlur={(e) => validate(e, 'street')}
          error={errors.includes('street')}
          maxLength={50}
          disabled={disabled}
          required
        />
        <FormInput
          name="barangay"
          type="address-level1"
          label="Barangay"
          value={address.barangay}
          placeholder="Barangay"
          testId="barangay"
          disabled={disabled}
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
          disabled={disabled}
          required
        />
        {address.city === 'Shipping Handled By Buyer' && (
          <div className="text-left text-sm text-green-500">
            You agree to arrange your own lalamove/grab/foodpanda to pickup item
            once ready.
          </div>
        )}
        <FormInput
          type="postal-code"
          value={address.postalCode}
          label="Postal Code"
          placeholder="Postal"
          onChange={(e) => handleChange(e, 'postalCode')}
          disabled={disabled}
          testId="postal"
        />
      </div>
    </FormContainer>
  );
};

export default Address;
