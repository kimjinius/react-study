import React, { useState } from 'react';
import Pagination from '../Pagination';
import BlogItem from './BlogItem';
import styled from 'styled-components';

const BlogListBlock = styled.div`
  flex: 1;
  width: 1100px;
  margin: 0 auto;
  margin-top : 20px;
  height : 1190px 
`;

const ITEMS_PER_PAGE = 5;

function PostList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const reversedBlogs = Array.isArray(posts) ? [...posts].reverse() : [];

  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };


  return (
    <div>
      <BlogListBlock>
        {currentBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            writerid={blog.writerid}
            title={blog.title}
            content={blog.content}
            date={blog.date}
            titleimage={blog.titleimage}
            like = {blog.like}
            comments = {blog.comments}
          />
        ))}    
      </BlogListBlock>
      <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={posts.length}
          currentPage={currentPage} 
          paginate={paginate}
        />
    </div>

  );
}

export default PostList;