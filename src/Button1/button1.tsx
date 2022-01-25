import React from 'react';
import './Button1.css';
import classNames from 'classnames';
import { MdSearch, MdDelete, MdFacebook } from 'react-icons/md';

interface ButtonProps {
  backgroundColor: string;
  size: 'medium' | 'small' | 'large';
  label: string;
  color: string;
  iconName: string;
  name: string;
  marginTop: number;
  onClick?: () => {};
}

export const Button1 = ({
  size = 'medium',
  backgroundColor,
  color,
  label,
  iconName,
  name,
  marginTop,
}: ButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className={classNames([
          'button',
          size === 'small' && 'button_small',
          size === 'large' && 'button_large',
          size === 'medium' && 'button_medium',
          name === 'round' && 'button_round',
          name === 'outline' && 'button_outline',
          name === 'block' && 'button_block',
          name === 'icon' && 'button_icon',
          name === 'light' && 'button_light',
        ])}
        style={{ backgroundColor, color , marginTop  }}
      >
        {iconName === 'search' && <MdSearch />}
        {iconName === 'delete' && <MdDelete />}
        {iconName === 'social' && <MdFacebook />}
        {label}
      </button>
    </div>
  );
};

export default Button1;
