import React from 'react';

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
        >
          {currentPage === 1 ? (
            <span className='page-link'>Previous</span>
          ) : (
            <a
              className='page-link'
              href='!#'
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </a>
          )}
        </li>
        {pageNumbers.map(number => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? 'active' : null
            }`}
            aria-current={currentPage === number ? 'page' : null}
          >
            <a
              href='!#'
              className='page-link'
              onClick={() => paginate(number)}
            >
              {number}
              {currentPage === number ? (
                <span className='sr-only'>(current)</span>
              ) : null}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? 'disabled' : null
          }`}
        >
          {currentPage === totalPages ? (
            <span className='page-link'>Next</span>
          ) : (
            <a
              className='page-link'
              href='!#'
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </a>
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

export default Pagination;
