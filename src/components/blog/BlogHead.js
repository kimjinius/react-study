import React from 'react';
import styled from 'styled-components';

const BlogHeadBlock = styled.div`
  h1 {
    font-weight : 500;
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #343a40;
  }

  margin-left: 100px;
  margin-right: 100px;
  overflow: hidden;
`;

function BlogHead({title}) {
  return (
    <BlogHeadBlock>
      <h1>{title}</h1>
    </BlogHeadBlock>
  );
}

export default BlogHead;