import React from 'react';
import Avatar from '@mui/material/Avatar';
import classNames from 'classnames';
import './Image.css'
import clsx from  'clsx';

interface imgProps {
  primary: boolean;
  size: 'small' | 'medium' | 'large';
  label: string;
  src: string;
  alt: string;
}


export const Image = ({
  primary = true,
  label,
  size = 'medium',
  src,
  alt,
}: imgProps) => {
  return (
    <div>
      <Avatar className={clsx()}  alt={alt} src={src}></Avatar>
    </div>
  );
};

export default Image;
