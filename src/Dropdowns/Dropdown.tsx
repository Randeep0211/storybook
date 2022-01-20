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
  text1: string;
  text2: string;
  text3: string;
  text4: string;
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
  text1,
  text2,
  text3,
  text4,
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
          <Dropdown.Item>{text1}</Dropdown.Item>
          <Dropdown.Item>{text2}</Dropdown.Item>
          <Dropdown.Item>{text3}</Dropdown.Item>
          <hr></hr>
          <Dropdown.Item>{text4}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Drpdown;
