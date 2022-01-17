import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button1 from './Button1';


export default {
  title:'Example/Button1',
  component: Button1,
  argTypes:{
    backgroundColor:{color : 'control'}
  }
} as ComponentMeta<typeof Button1>

const Template: ComponentStory<typeof Button1> = (args) => <Button1 {...args} />;



export const squareButton = Template.bind({});
squareButton.args = {
  primary: true,
  label: 'Button',
};

export const roundButton = Template.bind({});
roundButton.args = {
  label:'round',
  backgroundColor: 'black'
}

export const Signup = Template.bind({});
Signup.args = {
  label:'signup',
  backgroundColor: 'green'
}
