import React from 'react';
import styles from './avatar.module.css';
import classNames from 'classnames';

interface AvatarProps {
  size: 'small' | 'large' | 'medium';
  avatar: string;
}

export const Avatar: React.FC<AvatarProps> = ({ size = 'medium', avatar }) => {
  return (
    <img
      src={avatar}
      className={classNames([
        size === 'small' && styles.small,
        size === 'medium' && styles.medium,
        size === 'large' && styles.large,
      ])}
      alt="image"
    />
  );
};
export default Avatar;
