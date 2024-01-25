import React from 'react';
import styled from 'styled-components';
import { FaRegCommentDots } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BlogItemBlock = styled.div`
  height: 200px;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  margin: 0 auto;
  margin-bottom : 20px;
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const TitleImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;


const Title = styled.h4`
  height : 40px;
  margin-top : 0;
  margin-bottom: 8px;
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
  height : 40px
`;

const CommentCount = styled.span`
  padding-left:5px
`;

const Container = styled.div`
  display: flex;
  align-items: center; // 세로 방향 정렬
  .icon{
    margin-right : 10px;
    color : red;
  }
`;

function MyPostItem({ id, writerid, title, content, date, titleimage, like}) {
  return (
    <Link to={`/post/${id}`} style={{ textDecoration: "none", color : "black" }}>
      <BlogItemBlock>
        <TitleImage src={titleimage} alt="Title" />
        <Title>{title}</Title>
      </BlogItemBlock>
    </Link>

  );
}

export default MyPostItem;