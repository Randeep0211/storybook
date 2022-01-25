import React from 'react';
import './avatar.css';
import classNames from 'classnames';

interface AvatarProps {
  size: 'small' | 'large' | 'medium';
  avatar: string;
}

export const AvatarComponent = ({ size = 'medium', avatar }: AvatarProps) => {
  return (
    <div>
      <img
        src={avatar}
        className={classNames([
          size === 'small' && 'small',
          size === 'medium' && 'medium',
          size === 'large' && 'large',
        ])}
        alt="image"
      />
    </div>
  );
};
export default AvatarComponent;
