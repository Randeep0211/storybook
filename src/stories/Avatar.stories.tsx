import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../Avatars/avatar';

export default {
  title: 'Example/Avatars',
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const squareAvatar = Template.bind({});
squareAvatar.args = {
  avatar: 'https://i.pravatar.cc/300',
};
