import React from 'react';
import { func, number } from "prop-types";
import Button from "@material-ui/core/Button";

import './pagination.css'

// Pagination component
const Pagination = ({ next, previous, currentPage, maxPage }) => {
  return (
    <div className='pagination__container'>
      <Button
        className='pagination__button'
        variant="contained"
        color="secondary"
        onClick={previous}
        disabled={currentPage === 1}>
        &#8592;
        </Button>
      <Button
        className='pagination__button'
        variant="contained"
        color="primary"
        onClick={next}
        disabled={currentPage === maxPage}
      >
        &#8594;
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  next: func,
  previous: func,
  currentPage: number,
  maxPage: number
};

export default Pagination;
