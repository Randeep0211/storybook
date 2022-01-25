import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PaginationComponent from '../Pagination/pagination';

export default {
  title: 'Example/Pagination',
  component: PaginationComponent,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof PaginationComponent>;

const num = [1, 2, 3, 4, 5, 6, 7];

const Template: ComponentStory<typeof PaginationComponent> = (args) => (
  <PaginationComponent {...args} />
);

export const basic = Template.bind({});
basic.args = {
  list: num,
};
