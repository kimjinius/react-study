import React from 'react';
import styled from 'styled-components';

const BlogTemplateBlock = styled.div`
  width: 100%;
  height: 1300px;

  background: white;
  border-radius: 100px 100px 0 0;
  
  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  display: flex;
  flex-direction: column;
`;

function BlogTemplate({ children }) {
  return <BlogTemplateBlock>{children}</BlogTemplateBlock>;
}

export default BlogTemplate;