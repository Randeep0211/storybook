import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icons from '../Icons/Icons';

export default {
  title: 'Example/Icons',
  component: Icons,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;

export const gearIcon = Template.bind({});
gearIcon.args = {
  primary: true,
  label: 'icon',
};

export const hoverIcon = Template.bind({});
hoverIcon.args = {
  size: 'small',
  label: 'set',
  text:'hover'
};

export const profileIcon = Template.bind({});
profileIcon.args = {
  size: 'small',
  label : 'profile',
  text : 'profile'
}
