import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RecoilRoot } from 'recoil';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

const renderWithProviders = ({ children }) => {
  return (
    <RecoilRoot>
      <AlertProvider template={AlertTemplate} {...options}>
        {children}
      </AlertProvider>
    </RecoilRoot>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: renderWithProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
