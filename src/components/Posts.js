import React from 'react';
import PropTypes from 'prop-types';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 data-test='loading'>Loading...</h2>;
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li
          key={post.id}
          className='list-group-item'
          data-test='post'
        >
          {post.title}
        </li>
      ))}
    </ul>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ),
  loading: PropTypes.bool
};

export default Posts;
