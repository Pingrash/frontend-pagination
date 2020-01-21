import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {
  // State
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Gets the posts from jsonplaceholder.com and sets them to state.
  // This function is called on load through the following effect.
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Set posts per page
  const setPostsPerPageSize = size => setPostsPerPage(size);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Frontend Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
      {!loading ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
          setPostsPerPageSize={setPostsPerPageSize}
        />
      ) : null}
    </div>
  );
};

export default App;
