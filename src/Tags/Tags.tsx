import React from 'react';
import './tags.css';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';

interface TagProps {
  primary: boolean;
  size: 'small' | 'medium' | 'large';
  label: 'string';
  tags: string[];
  editable: boolean;
  onClick?: () => {};
}

export const Tags = ({
  primary = false,
  size = 'medium',
  tags,
  editable,
  onClick,
}: TagProps) => {
  return <div></div>;
};

export default Tags;
