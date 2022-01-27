import React from 'react';
import styles from './button.module.css';
import classNames from 'classnames';
import Icons from '../icons/icons';
import { IconMap } from '../icons/icons';

interface ButtonProps {
  size: 'medium' | 'small' | 'large';
  color: 'primary' | 'secondary';
  iconName: keyof typeof IconMap;
  variant: 'round' | 'outline';
  marginTop: number;
  onClick?: () => {};
}

export const Button: React.FC<ButtonProps> = ({
  size,
  iconName,
  variant,
  children,
  onClick,
  color,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={classNames([
        styles.button,
        size === 'small' && styles.buttonSmall,
        size === 'large' && styles.buttonLarge,
        size === 'medium' && styles.buttonMedium,
        variant === 'round' && styles.buttonRound,
        variant === 'outline' && styles.buttonOutline,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
      ])}
    >
      <Icons iconName={iconName} />

      {children}
    </button>
  );
};

export default Button;
