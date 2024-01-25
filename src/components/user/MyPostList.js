import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import MyPostItem from './MyPostItem';

const BlogListBlockWrap = styled.div`
  width : 800px;
  padding: 20px;
  // border: 1px solid #ccc;
  border-radius: 30px;
  margin-left : 20px;
  background : #FFEDEE;
`;

const BlogListBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height : 405px;
`;

const ITEMS_PER_PAGE = 8;

function MyPostList({ posts, userid }) {
  console.log("Posts prop:", posts);

    const filteredBlogs = Array.isArray(posts) ? posts.filter(blog => String(blog.writerid) === userid) : [];
  
    const [currentPage, setCurrentPage] = useState(1);
  
    const reversedBlogs = [...filteredBlogs].reverse();
    const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
    const currentBlogs = reversedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <BlogListBlockWrap>
        <BlogListBlock>
          {currentBlogs.map((blog) => (
            <MyPostItem
              key={blog.id}
              id={blog.id}
              writerid={blog.writerid}
              title={blog.title}
              content={blog.content}
              date={blog.date}
              titleimage={blog.titleimage}
              like={blog.like}
            />
          ))}
        </BlogListBlock>
        <Pagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredBlogs.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </BlogListBlockWrap>
    );
  }
  
  export default MyPostList;
