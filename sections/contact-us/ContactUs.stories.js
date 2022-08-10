import React from 'react';
import ContactUs from './ContactUs';

export default {
  title: 'Component/ContactUs',
  component: ContactUs,
};

const Template = (args) => <ContactUs {...args} />;

export const Default = Template.bind({});
Default.args = {};
