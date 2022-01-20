import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '../ImageAvatars/Image';

export default {
  title: 'Example/Image-Avatars',
  component: Image,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);


export const simple = Template.bind({});
simple.args = {
  primary:true,
  size: 'small' ,
  src:'https://i.pravatar.cc/300',
  alt: 'Bob Marley',
  

}