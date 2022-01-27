import React from 'react';
import styles from './dropdown.module.css';
import classNames from 'classnames';

interface DropdownProps {
  size: 'medium' | 'small' | 'large';
  menus: string[];
  variant: 'simple' | 'outline' | 'light' | 'round';
  color: 'primary' | 'secondary';
}

export const Dropdown: React.FC<DropdownProps> = ({
  size = 'medium',
  menus,
  variant,
  color,
}) => {
  return (
    <select
      className={classNames([
        styles.button,
        size === 'small' && styles.buttonSmall,
        size === 'large' && styles.buttonLarge,
        variant === 'outline' && styles.buttonOutline,
        variant === 'round' && styles.buttonRound,
        variant === 'light' && styles.buttonLight,
        color === 'primary' && styles.primary,
        color === 'secondary' && styles.secondary,
      ])}
    >
      {menus.map((el) => {
        return (
          <option value={el} key={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
