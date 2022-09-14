import React from 'react';
import { RecoilRoot } from 'recoil';
import CheckoutButton from './CheckoutButton';

export default {
  title: 'Component/CheckoutButton',
  component: CheckoutButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => (
  <RecoilRoot>
    <CheckoutButton {...args} />
  </RecoilRoot>
);

export const Default = Template.bind({});
Default.args = {};
