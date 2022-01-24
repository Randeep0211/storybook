import React from 'react';
import Avatar from '@mui/material/Avatar';
import './Image.css';
import classNames from 'classnames';

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
      <Avatar
        className={classNames([
          size === 'large' && 'css-1wlk0hk-MuiAvatar-root',
          size === 'small' && 'css-1wlk0hk-MuiAvatar-root_small',
          size === 'medium' && 'css-1wlk0hk-MuiAvatar-root_medium'
        ])}
        alt={alt}
        src={src}
      ></Avatar>
    </div>
  );
};

export default Image;
