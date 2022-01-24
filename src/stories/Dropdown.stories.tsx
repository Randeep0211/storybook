
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Drpdown from '../Dropdowns/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Drpdown,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Drpdown>;

const Template: ComponentStory<typeof Drpdown> = (args) => (
  <Drpdown {...args} />
);

const Text = ['Action','Another Action','Something Else','Important Links'];

export const simpleButton = Template.bind({});
simpleButton.args = {
  primary: true,
  label: 'Action',
  size: 'medium',
  text : Text
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  label: 'Action',
  size: 'medium',
  text: Text,
  backgroundColor: 'white',
  color: 'blue',
  border: '1px solid green',
};

export const lightButton = Template.bind({});
lightButton.args = {
  label: 'Action',
  size: 'medium',
  text: Text,
  backgroundColor: 'skyblue',
  color: 'black',
  border: '1px solid green',
  opacity: '0.4',
};

export const roundButton = Template.bind({});
roundButton.args = {
  label: 'Action',
  size: 'medium',
  text:Text,
  backgroundColor: 'orangered',
  color: 'green',
  borderRadius: '20px',
  border: '1px solid transparent',
};

