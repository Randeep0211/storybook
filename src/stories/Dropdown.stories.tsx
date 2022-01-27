import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../Dropdowns/dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const List = ['Action', 'Another Action', 'Something Else', 'Important Links'];

export const simpleButton = Template.bind({});
simpleButton.args = {
  size: 'medium',
  menus: List,
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  size: 'medium',
  menus: List,
  variant: 'outline',
};

export const lightButton = Template.bind({});
lightButton.args = {
  size: 'medium',
  menus: List,
  variant: 'light',
};

export const roundButton = Template.bind({});
roundButton.args = {
  size: 'medium',
  menus: List,
  variant: 'round',
};
