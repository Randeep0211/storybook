import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../Avatars/Avatar';

export default {
  title: 'Example/Avatars',
  component: Avatar,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const assignment = Template.bind({});
assignment.args = {
  primary: true,
  label: 'H',
  backgroundColor: 'green',
};

export const pageView = Template.bind({});
pageView.args = {
  size: 'large',
  label: 'PV',
  backgroundColor: 'orangered',
};

export const mail = Template.bind({});
mail.args = {
  // primary: true,
  size: 'large',
  label: 'Mail',
  backgroundColor: 'blue',
};