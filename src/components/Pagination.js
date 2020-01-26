import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setPostsPerPageSize
}) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];
  const pageSizes = [10, 25, 50];

  // Set the individual page numbers to an array.
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        <li
          className={`page-item ${
            currentPage === 1 ? 'disabled' : null
          }`}
          data-test='previous'
        >
          {currentPage === 1 ? (
            <span className='page-link'>Previous</span>
          ) : (
            <button
              className='page-link'
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          )}
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? 'active' : null
            }`}
            aria-current={currentPage === number ? 'page' : null}
            data-test='page-number'
          >
            <button
              className='page-link'
              onClick={() => paginate(number)}
            >
              {number}
              {currentPage === number ? (
                <span className='sr-only'>(current)</span>
              ) : null}
            </button>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : null
          }`}
          data-test='next'
        >
          {currentPage === totalPages ? (
            <span className='page-link'>Next</span>
          ) : (
            <button
              className='page-link'
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          )}
        </li>

        <li className='mr-3 ml-auto pt-1'>Posts per page: </li>
        {pageSizes.map(size => (
          <li
            key={size}
            className={`page-item ${
              postsPerPage === size ? 'active' : null
            }`}
          >
            <a
              className='page-link'
              href='!#'
              onClick={() => setPostsPerPageSize(size)}
            >
              {size}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
  setPostsPerPageSize: PropTypes.func
};

export default Pagination;
