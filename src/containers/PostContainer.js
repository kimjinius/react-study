import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../modules/posts';
import BlogPostDiv from '../components/blogpost/BlogPostDiv';

function PostContainer({ postId }) {
  // useSelector를 이용하여 스토어에 있는 값을 가져온다.
  // data, loading, error
  // 스토어에 값이 바뀔 때마다 가져올 수 있음
  const { data, loading, error } = useSelector(
    state => state.posts.post[postId]
  ) || {
    // 기본 값
    loading: false,
    data: null,
    error: null
  }; 

  console.log("Data:", data);
  console.log("Loading:", loading);
  console.log("Error:", error);

  // 스토어에 값을 업데이트 하는 기능을 수행함 (디스패치)
  // useEffect가 postId나 dispatch의 값의 변화르를 감지하여 dispatch메서드를 호출하고
  // 스토어 상태가 업데이트 되면서 컴포넌트가 최신 상태로 렌더링 가능하게함
  const dispatch = useDispatch();
  useEffect(() => {
    // server.json에 있는 값을 getPost를 해서 최신 상태를 스토어에 저장을 하면 userSelector가 가져옴
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;
  
  return <BlogPostDiv post={data} />;
}

export default PostContainer;