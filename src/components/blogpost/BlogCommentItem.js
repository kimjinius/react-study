import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserProfileContainerland from '../../containers/UserProfileContainerland';

const BlogItemBlock = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const LeftContainer = styled.div`
  margin-right: 20px;
`;

const Datetime = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size : 15px;
  margin-top:10px;
  color : grey;
  margin : 10px 0 0 10px;
`;

const Content = styled.div`
  margin : 20px 0 0 10px;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  font-size : 18px;
`;


function BlogCommentItem({ userid, content, date}) {
  const formattedDate = (() => {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;
  })();

  return (
      <BlogItemBlock>
        <Link to={`/user/${userid}`} style={{ textDecoration: "none", color : "black" }}>
          <LeftContainer>
            <UserProfileContainerland userid={userid}/>
          </LeftContainer>
        </Link>
        <div>
        <Content>{content} </Content>
        <Datetime>{formattedDate}</Datetime>
        </div>

      </BlogItemBlock>
  );
}

export default BlogCommentItem;