import React, { useMemo } from 'react';
import styles from './pagination.module.css';
import classnames from 'classnames';

interface PaginationProps {
  currentPage: number;
  perPageRecord: number;
  preview: string;
  totalRecord: number;
  next: string;
  onPageChange: (page: number) => void;
}

function getPages(
  payload: Pick<PaginationProps, 'totalRecord' | 'perPageRecord'>
) {
  const { perPageRecord, totalRecord } = payload;
  const maxPages = Math.ceil(totalRecord / perPageRecord);
  return new Array(maxPages).fill(0).map((_, i) => i + 1);
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalRecord,
    perPageRecord,
    onPageChange,
    preview,
    next,
  } = props;
  const pages = useMemo(
    () => getPages({ totalRecord, perPageRecord }),
    [props]
  );
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.buttonPreview}
        >
          {preview}
        </button>
      )}
      {pages.map((page) => {
        console.log(currentPage);
        return (
          <button
            className={classnames([
              styles.pagesButton,
              page === currentPage && styles.currentPage,
            ])}
            onClick={() => {
              page !== currentPage && onPageChange(page);
            }}
          >
            {page}
          </button>
        );
      })}
      {currentPage !== Math.ceil(totalRecord / perPageRecord) && (
        <button
          className={styles.buttonNext}
          onClick={() => onPageChange(currentPage + 1)}
        >
          {next}
        </button>
      )}
    </div>
  );
};

export default Pagination;
