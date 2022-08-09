import React from 'react';
import FilterButton from './FilterButton';

export default {
  title: 'Component/FilterButton',
  component: FilterButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <FilterButton {...args}>Filter Button</FilterButton>;

export const Default = Template.bind({});
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
