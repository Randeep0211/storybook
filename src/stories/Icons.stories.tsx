import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Icons from '../Icons/icons';

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
  size: 'small'
  
};

export const hoverIcon = Template.bind({});
hoverIcon.args = {
  size: 'small',
  effect:'hover'
};

