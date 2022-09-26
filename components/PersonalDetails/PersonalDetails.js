import { useRecoilState } from 'recoil';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import { personalState } from '../../states/personal';

const PersonalDetails = ({ className, validate, errors }) => {
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
        <h1 className="text-left font-bold text:lg uppercase ">
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
        />
      </div>
    </FormContainer>
  );
};

export default PersonalDetails;
