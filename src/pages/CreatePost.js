import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import { useDispatch } from 'react-redux';
import { createPost } from '../modules/posts';
import './CreatePost.css';

const PostPage = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleimage, setTitleImage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreatePost = async () => {
    try {
      const newPostData = {
        id: new Date().getTime().toString(),
        writerid: 4,
        title: title || '새로운 포스트 제목',
        content: content || '새로운 포스트 내용입니다.',
        date: Date.now(),
        titleimage: titleimage || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D',
        like: [],
        comments : []
      };
      dispatch(createPost(newPostData));

      navigate(`/post/${newPostData.id}`);

    } catch (error) {
      console.error('포스트 생성 중 오류 발생:', error);
    }
  };


  return (
    <div class = "createPostDiv">
      <div class = "writeButtonDiv">
        <button class = "writeButton" onClick={handleCreatePost}>글쓰기</button>
      </div>
      <div class = "inputWrapDiv">
        <input class = "titleInput"
          type="text"
          id="title"
          value={title}
          placeholder="제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <input class = "titleImageInput"
          type="text"
          id="titleimage"
          value={titleimage}
          placeholder="이미지 링크"
          onChange={(e) => {
            setTitleImage(e.target.value);
          }}
        />
      </div>
      <img src={titleimage} alt="Title" class = "titleImage" />
      <div class="separatorLine"></div>
      <div>
      <textarea
        class="contentInput"
        id="content"
        value={content}
        placeholder="본문"
        onChange={(e) => setContent(e.target.value)}
        rows={content.split('\n').length + 1}
      />
    </div>
    </div>
  );
};

export default PostPage;
