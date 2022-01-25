import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropdownComponent from '../Dropdowns/dropdown';

export default {
  title: 'Example/Dropdown',
  component: DropdownComponent,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof DropdownComponent>;

const Template: ComponentStory<typeof DropdownComponent> = (args) => (
  <DropdownComponent {...args} />
);

const List = ['Action', 'Another Action', 'Something Else', 'Important Links'];

export const simpleButton = Template.bind({});
simpleButton.args = {
  size: 'medium',
  list: List,
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  size: 'medium',
  list: List,
  name: 'outline',
};

export const lightButton = Template.bind({});
lightButton.args = {
  size: 'medium',
  list: List,
  name: 'light',
};

export const roundButton = Template.bind({});
roundButton.args = {
  size: 'medium',
  list: List,
  name: 'round',
};
