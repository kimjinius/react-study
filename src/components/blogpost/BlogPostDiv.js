import React from 'react';
import styled from 'styled-components';
import BlogHead from '../blog/BlogHead';
import UserProfileContainer from '../../containers/UserProfileContainer';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin : 0 250px 70px 250px;
  padding-bottom : 30px;
`;

const TitleImage = styled.img`
  margin-left:50px;
  width: 40%;
  height: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentText = styled.div`
  margin : 70px 20% 70px 20%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  font-size : 18px;
`;

const Home = styled.div`
  display: flex;
  align-items: center;
  padding-left: 300px;
  margin-top: 50px;

  span {
    font-size: 18px;
    margin-left: 10px;  /* Adjust the margin as needed */
  }
`;

function BlogPostDiv({post}) {

  return (
    <div>
      <Link to={`/`} style={{ textDecoration: "none", color : "black" }}>
        <Home>
        <MdHome size="30"/>
        <span>블로그홈</span>
        </Home>
      </Link>
      <BlogHead title={post.title}/>
      {/* <Link to={`/user/${writerid}`} style={{ textDecoration: "none", color : "black" }}>
          <LeftContainer>
            <UserProfileContainer userid={writerid}/>
          </LeftContainer>
        </Link> */}
        <Link to={`/user/${post.writerid}`} style={{ textDecoration: "none", color : "black" }}>
          <ProfileContainer>
            <UserProfileContainer userid={post.writerid}/>
          </ProfileContainer>
        </Link>
        
        <ContentContainer>
            <TitleImage src={post.titleimage} alt="Title" />     
        </ContentContainer>

        <ContentText>
                {post.content}
        </ContentText>
        
    </div>
  );
}

export default BlogPostDiv;