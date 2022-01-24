import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagin from '../Pagination/Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagin,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Pagin>;

const num = [1 , 2 , 3 , 4];

const Template: ComponentStory<typeof Pagin> = (args) => <Pagin {...args} />;

export const basic = Template.bind({});
basic.args = {
 
  width: '70',
  padding: '30',
  color: 'white',
  backgroundColor: 'green',
  text: num,
  page: 1,
  totalPage: 4,
};
