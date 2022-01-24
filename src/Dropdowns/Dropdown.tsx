import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css';
import classNames from 'classnames';

interface dropBtnProps {
  primary: boolean;
  backgroundColor: string;
  size: 'medium' | 'small' | 'large';
  label: string;
  color: string;
  text: string[];
  border: string;
  opacity: string;
  borderRadius: string;
}

export const Drpdown = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  color,
  border,
  label,
  text,
  opacity,
  borderRadius,

  ...props
}: dropBtnProps) => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          className={classNames([
            'toggle_btn',
            size === 'small' && 'btn_small',
            size === 'large' && 'btn_large',
          ])}
          style={{ backgroundColor, color, border, borderRadius, opacity }}
        >
          {label}
        </Dropdown.Toggle>

        <Dropdown.Menu className="content">
          {text.map((data) => {
            return <Dropdown.Item>{data}</Dropdown.Item>;
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Drpdown;
