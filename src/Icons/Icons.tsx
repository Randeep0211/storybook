import React from 'react';
import './icons.css';
import { MdAccountCircle } from 'react-icons/md';
import 'bootstrap-icons/font/bootstrap-icons.css';
import classNames from 'classnames';

interface IconProps {
  primary: boolean;
  size: 'small' | 'large' | 'medium';
  label: string;
  text: string;
  onClick?: () => {};
}

export const Icons = ({
  primary = false,
  size = 'small',
  text,
  label,
}: IconProps) => {
  return (
    <div>
      <img
        className={classNames([
          'icon',
          text === 'hover' && 'set',
          size === 'small' && 'storybook-icon--small',
        ])}
        src="https://img.icons8.com/color/48/000000/gear.png"
      />
      {text === 'profile' && <MdAccountCircle />}
    </div>
  );
};

export default Icons;
