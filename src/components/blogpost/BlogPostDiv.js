import React , { useState } from 'react';
import styled from 'styled-components';
import BlogHead from '../blog/BlogHead';
import UserProfileContainer from '../../containers/UserProfileContainer';
import { MdHome } from "react-icons/md";
import { Link } from 'react-router-dom';
import BlogCommentItem from "./BlogCommentItem"
import Pagination from '../Pagination';
import { createPostComment } from '../../modules/posts';
import { useDispatch } from 'react-redux';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin : 0 250px 70px 250px;
  padding-bottom : 30px;
`;


const CommentDiv = styled.div`
  margin : 0 300px 70px 300px;
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

const CommentInputContainer = styled.div`
  margin: 0 300px 70px 300px;
  display: flex;
  align-items: stretch;
`;

const CommentInputText = styled.textarea`
  resize: none;
  flex: 1;
  height: 70px;
  padding: 10px;
  white-space: pre-line;
  border: 1px solid #ccc;
`;

const CommentButton = styled.button`
  cursor: pointer;
  border: 1px solid #ccc;
  background : #f0f0f0;
`;

function BlogPostDiv({post}) {

  const ITEMS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(1);
  const [commentInput, setCommentInput] = useState('');

  const indexOfLastBlog = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstBlog = indexOfLastBlog - ITEMS_PER_PAGE;
  const currentBlogs = post.comments.slice(indexOfFirstBlog, indexOfLastBlog);

  const dispatch = useDispatch();

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCommentInputChange = (e) => {
    setCommentInput(e.target.value);
  };

  const handleAddComment = () => {
    const postData = {
      id: new Date().getTime().toString(),
      writerid: 4,
      content: commentInput || '새로운 댓글 내용입니다.',
      date: Date.now(),
    };

    const postId = post.id;

    console.log("postData   "  + postData.content);

    // dispatch(createPostComment(postId, postData, postData));

    setCommentInput('');
  };





  return (
    <div>
      <Link to={`/`} style={{ textDecoration: "none", color : "black" }}>
        <Home>
        <MdHome size="30"/>
        <span>블로그홈</span>
        </Home>
      </Link>
      <BlogHead title={post.title}/>
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

        
        <CommentInputContainer>
          <CommentInputText
            placeholder="댓글 작성하기"
            value={commentInput}
            onChange={handleCommentInputChange}
          />
          <CommentButton onClick={handleAddComment}>작성하기</CommentButton>
        </CommentInputContainer>

      <CommentDiv>
        {currentBlogs.map((comment) => (
          <BlogCommentItem
            userid={comment.userid}
            content={comment.content}
            date={comment.date}
          />
        ))}    

        <Pagination
            itemsPerPage={ITEMS_PER_PAGE}
            totalItems={post.comments.length}
            currentPage={currentPage} 
            paginate={paginate}
          /> 
      </CommentDiv>

    </div>
  );
}

export default BlogPostDiv;