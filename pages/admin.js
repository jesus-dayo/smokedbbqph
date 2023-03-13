import { Authenticator, Heading, Text } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import '@aws-amplify/ui-react/styles.css';
import Button from '../components/Button/Button';
import Bill from '../components/Bill/Bill';
import { useState } from 'react';
import Availability from '../components/Availability/Availability';

Amplify.configure({ ...awsExports, ssr: true });

const formFields = {
  confirmVerifyUser: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

const components = {
  VerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },

  ConfirmVerifyUser: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const Admin = () => {
  const [display, setDisplay] = useState('default');

  const choices = {
    availability: <Availability />,
    bills: <Bill />,
    default: <Bill />,
  };

  const changeDisplay = (route) => {
    setDisplay(route);
  };

  return (
    <Authenticator
      formFields={formFields}
      components={components}
      hideSignUp={true}
    >
      {({ signOut, user }) => (
        <div className="flex flex-col">
          <div className="flex bg-white">
            <div className="grow" />
            <div className="p-2">
              <h2>Hello {user.attributes.email}</h2>
            </div>
            <div className="p-2">
              <Button onClick={signOut}>Sign out</Button>
            </div>
          </div>
          <div className="bg-slate-200">
            <div className="h-screen">
              <div className="flex p-2 gap-2">
                <div
                  onClick={() => changeDisplay('bills')}
                  className="p-2 bg-zinc-800 text-white rounded-lg h-20 w-32 cursor-pointer text-center align-middle"
                >
                  <h2 className="text-2xl">Bills</h2>
                </div>
                <div
                  onClick={() => changeDisplay('availability')}
                  className="p-2 bg-zinc-800 text-white rounded-lg h-20 w-32 cursor-pointer text-center align-middle"
                >
                  <h2 className="text-2xl">Availability</h2>
                </div>
              </div>
              <div className="bg-black h-2"></div>
              <div className="p-2 bg-slate-500 text-white h-screen">
                <div className="h-screen">{choices[display]}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
};

export default Admin;
