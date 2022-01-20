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

export const simpleButton = Template.bind({});
simpleButton.args = {
  primary: true,
  label: 'Action',
  size: 'medium',
  text1: 'Action',
  text2: 'Another Action',
  text3: 'Something Else',
  text4: 'Links',
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  label: 'Action',
  size: 'medium',
  text1: 'Action',
  text2: 'Another Action',
  text3: 'Something Else',
  text4: 'Links',
  backgroundColor: 'white',
  color: 'blue',
  border: '1px solid green',
};

export const lightButton = Template.bind({});
lightButton.args = {
  label: 'Action',
  size: 'medium',
  text1: 'Action',
  text2: 'Another Action',
  text3: 'Something Else',
  text4: 'Links',
  backgroundColor: 'skyblue',
  color: 'black',
  border: '1px solid green',
  opacity: '0.4',
};

export const roundButton = Template.bind({});
roundButton.args = {
  label: 'Action',
  size: 'medium',
  text1: 'Action',
  text2: 'Another Action',
  text3: 'Something Else',
  text4: 'Links',
  backgroundColor: 'orangered',
  color: 'green',
  borderRadius: '20px',
  border: '1px solid transparent',
};
