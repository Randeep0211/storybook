import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.css';

interface PagiProps {
  primary: boolean;
  size: 'medium' | 'small' | 'large';
  color: string;
  width: string;
  padding: string;
  backgroundColor?: string;
}

export const Pagin = ({
  primary = false,
  size = 'medium',
  color,
  width,
  padding,
  backgroundColor,
}: PagiProps) => {
  return (
    <div>
      <div style={{ display: 'block', borderRadius: 10 }}>
        <Pagination style={{ width, padding }}>
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default Pagin;
