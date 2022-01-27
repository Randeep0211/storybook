import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/button';

export default {
  title: 'Example/Button1',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const squareButton = Template.bind({});
squareButton.args = {
  size: 'medium',
};

export const buttonWithIcon = Template.bind({});
buttonWithIcon.args = {
  size: 'large',
  iconName: 'Search',
};

export const round = Template.bind({});
round.args = {
  size: 'large',
  variant: 'round',
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  size: 'large',
  variant: 'outline',
};

export const blockButton = Template.bind({});
blockButton.args = {
  size: 'large',
};

export const iconButton = Template.bind({});
iconButton.args = {
  size: 'large',
  iconName: 'Delete',
};

export const socialButton = Template.bind({});
socialButton.args = {
  size: 'large',
  iconName: 'Facebook',
};

export const lightButton = Template.bind({});
lightButton.args = {
  size: 'large',
};
