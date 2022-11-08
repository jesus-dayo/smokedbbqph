import { useRecoilState } from 'recoil';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import { personalState } from '../../states/personal';

const PersonalDetails = ({ className, validate, errors, disabled }) => {
  const [personal, setPersonal] = useRecoilState(personalState);

  const handleChange = (e, fieldName) => {
    setPersonal({
      ...personal,
      [fieldName]: e.target.value,
    });
    validate(e, fieldName);
  };

  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text-sm md:text-lg uppercase ">
          Personal Details
        </h1>
      </div>
      <div className="flex flex-col gap-1 md:gap-0 p-2 md:p-0">
        <FormInput
          label="Name"
          placeholder="Full name here"
          onChange={(e) => handleChange(e, 'name')}
          onBlur={(e) => validate(e, 'name')}
          testId="name"
          validationError={'name is a required field'}
          error={errors.includes('name')}
          maxLength={50}
          disabled={disabled}
          required
        />
        <FormInput
          label="Phone Number"
          placeholder="Phone number of contact person"
          testId="phone"
          validationError={'phone is a required field'}
          onChange={(e) => handleChange(e, 'phoneNumber')}
          onBlur={(e) => validate(e, 'phoneNumber')}
          error={errors.includes('phoneNumber')}
          maxLength={20}
          disabled={disabled}
          required
        />
        <FormInput
          label="Email"
          placeholder="Email here"
          validationError={'email is a required field'}
          onChange={(e) => handleChange(e, 'email')}
          onBlur={(e) => validate(e, 'email')}
          error={errors.includes('email')}
          maxLength={50}
          testId="email"
          type="email"
          disabled={disabled}
          required
        />
      </div>
    </FormContainer>
  );
};

export default PersonalDetails;
