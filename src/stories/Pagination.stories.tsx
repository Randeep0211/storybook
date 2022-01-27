import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from '../Pagination/pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    backgroundColor: { color: 'control' },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Pagination
      {...args}
      onPageChange={setCurrentPage}
      currentPage={currentPage}
    />
  );
};

export const basic = Template.bind({});
basic.args = {
  currentPage: 2,
  next: 'next',
  onPageChange: () => {},
  perPageRecord: 20,
  preview: 'prev',
  totalRecord: 100,
};
