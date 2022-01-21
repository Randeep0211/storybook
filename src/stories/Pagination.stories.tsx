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

const Template: ComponentStory<typeof Pagin> = (args) => <Pagin {...args} />;

export const basic = Template.bind({});
basic.args = {
  primary: true,
  width: '70',
  padding: '30',
  color: 'white',
  backgroundColor: 'green',
};
