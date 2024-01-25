import React from 'react';
import styled from 'styled-components';
import { FaRegCommentDots } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserProfileContainer from '../../containers/UserProfileContainer';

const BlogItemBlock = styled.div`
  height : 200px;
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

const LeftContainer = styled.div`
  width : 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const TitleImage = styled.img`
  margin-left:50px;
  width: 180px;
  height: 180px;
`;


const Title = styled.h3`
  margin-top : 0;
  margin-bottom: 8px;
  max-height : 50px;
  overflow: hidden;
`;

const Datetime = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Content = styled.div`
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  height : 45px
`;

const CommentCount = styled.span`
  margin-left: 6px;
`;

const LikeCount = styled.span`
  margin-right : 12px;
`;

const Container = styled.div`
  display: flex;
  align-items: center; // 세로 방향 정렬
  .icon{
    margin-right : 5px;
    color : red;
  }
`;

function BlogItem({ id, writerid, title, content, date, titleimage, like, comments}) {
  console.log("BlogItem    " + like);
  const isLikedByCurrentUser = like.includes("4");

  const formattedDate = (() => {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;
  })();

  return (
    <Link to={`/post/${id}`} style={{ textDecoration: "none", color : "black" }}>
      <BlogItemBlock>
        <Link to={`/user/${writerid}`} style={{ textDecoration: "none", color : "black" }}>
          <LeftContainer>
            <UserProfileContainer userid={writerid}/>
          </LeftContainer>
        </Link>
        <TitleContainer>
          <Title>{title}</Title>
          <Datetime>{formattedDate}</Datetime>
          <Content>{content}</Content>
          <Container>
            
            {isLikedByCurrentUser ? (
              <IoHeart size="22" class="icon"/>
            ) : (
              <IoHeartOutline size="22" class="icon"/>
            )}
            <LikeCount>{like.length}</LikeCount>

            <FaRegCommentDots size = "20" />
            <CommentCount>{comments.length}</CommentCount>

            
          </Container>
        </TitleContainer>
        <TitleImage src={titleimage} alt="Title" />
      </BlogItemBlock>
    </Link>

  );
}

export default BlogItem;