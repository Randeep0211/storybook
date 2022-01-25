import React from 'react';
import './pagination.css';

interface PaginationProps {
  list: number[];
}

export const Pagination = ({ list }: PaginationProps) => {
  return (
    <div className="pagination">
      {list.map((data) => {
        return (
          <a
            onClick={(e) => {
              e.preventDefault();
            }}
            href="#"
          >
            {data}
          </a>
        );
      })}
    </div>
  );
};

export default Pagination;
