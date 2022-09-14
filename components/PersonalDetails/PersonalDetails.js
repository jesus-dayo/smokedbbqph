import { useRecoilState } from 'recoil';
import FormContainer from '../FormContainer/FormContainer';
import FormInput from '../FormInput/FormInput';
import { personalState } from '../../states/personal';

const PersonalDetails = ({ className }) => {
  const [personal, setPersonal] = useRecoilState(personalState);

  const handleNameChange = (e) => {
    setPersonal({
      ...personal,
      name: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setPersonal({
      ...personal,
      phoneNumber: e.target.value,
    });
  };

  const handleEmailChange = (e) => {
    setPersonal({
      ...personal,
      email: e.target.value,
    });
  };

  return (
    <FormContainer className={className}>
      <div>
        <h1 className="text-left font-bold text:lg md:text-xl uppercase ">
          Personal Details
        </h1>
      </div>
      <div className="flex flex-col gap-1 p-2">
        <FormInput
          label="Name"
          placeholder="Full name here"
          onChange={handleNameChange}
        />
        <FormInput
          label="Phone Number"
          placeholder="Phone number of contact person"
          onChange={handlePhoneChange}
        />
        <FormInput
          label="Email"
          placeholder="Email here"
          onChange={handleEmailChange}
        />
      </div>
    </FormContainer>
  );
};

export default PersonalDetails;
