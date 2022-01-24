import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.css';

interface PagiProps {
  size: 'medium' | 'small' | 'large';
  color: string;
  width: string;
  padding: string;
  backgroundColor?: string;
  text: number[];
  page: number;
  totalPage: number
}

export const Pagin = ({
  size = 'medium',
  color,
  width,
  padding,
  text,
  backgroundColor,
  page,
  totalPage,
}: PagiProps) => {
  return (
    <div>
      <div style={{ display: 'block', borderRadius: 10 }}>
        <Pagination style={{ width, padding }}>

          {text.map((data: number) => {
            return (
              <>
                <Pagination.Item>{data}</Pagination.Item>
              </>
            );
          })}
          <span>Next</span>
        </Pagination>
      </div>
    </div>
  );
};

export default Pagin;
