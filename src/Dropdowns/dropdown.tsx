import React from 'react';
import './dropdown.css';
import classNames from 'classnames';

interface DropdownProps {
  size: 'medium' | 'small' | 'large';
  list: string[];
  name: 'simple' | 'outline' | 'light' | 'round';
}

export const DropdownComponent = ({
  size = 'medium',
  list,
  name,
}: DropdownProps) => {
  return (
    <div>
      <select
        className={classNames([
          'toggle_button',
          size === 'small' && 'button_small',
          size === 'large' && 'button_large',
          name === 'outline' && 'button_outline',
          name === 'round' && 'button_round',
          name === 'light' && 'button_light',
        ])}
      >
        {list.map((data) => {
          return <option value={data}>{data}</option>;
        })}
      </select>
    </div>
  );
};

export default DropdownComponent;
