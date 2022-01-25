import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarComponent from '../Avatars/avatar';

export default {
  title: 'Example/Avatars',
  component: AvatarComponent,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => <AvatarComponent {...args} />;

export const squareAvatar = Template.bind({});
squareAvatar.args = {
  avatar: 'https://i.pravatar.cc/300',
};

