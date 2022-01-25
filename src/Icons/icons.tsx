import React from 'react';
import './icons.css';
import classNames from 'classnames';

interface IconProps {
  size: 'small' | 'large' | 'medium';
  effect: string;
  onClick?: () => {};
}

const icon = 'https://img.icons8.com/color/48/000000/gear.png';

export const Icons = ({ size = 'small', effect }: IconProps) => {
  return (
    <div>
      <img
        className={classNames([
          'icon',
          effect === 'hover' && 'icon_change',
          size === 'small' && 'icon_small',
          size === 'medium' && 'icon_medium',
          size === 'large' && 'icon_large',
        ])}
        src={icon}
      />
    </div>
  );
};

export default Icons;
