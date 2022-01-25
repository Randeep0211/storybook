import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button1 from '../Button1/button1';


export default {
  title: 'Example/Button1',
  component: Button1,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Button1>;

const Template: ComponentStory<typeof Button1> = (args) => (
  <Button1 {...args} />
);

export const squareButton = Template.bind({});
squareButton.args = {
  
  label: 'button',
  size: 'medium',
};

export const buttonWithIcon = Template.bind({});
buttonWithIcon.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: 'orangered',
  color: 'white',
  iconName: 'search',
  marginTop: 4
};

export const round = Template.bind({});
round.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: 'aqua',
  color: 'black',
  name: 'round',
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  size: 'large',
  label: 'Success',
  name: 'outline',
};

export const blockButton = Template.bind({});
blockButton.args = {
  size: 'large',
  label: 'Block Button',
  name: 'block',
};

export const iconButton = Template.bind({});
iconButton.args = {
  size: 'large',
  iconName: 'delete',
  backgroundColor: 'orangered',
  color: 'white',
};

export const socialButton = Template.bind({});
socialButton.args = {
  size: 'large',
  iconName: 'social',
  backgroundColor: 'darkblue',
  color: 'white',
};

export const lightButton = Template.bind({});
lightButton.args = {
  size: 'large',
  label: 'info',
  backgroundColor: 'skyblue',
  color: 'green',
  name: 'light',
};
