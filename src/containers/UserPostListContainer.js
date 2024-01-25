import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../modules/posts';
import MyPostList from '../components/user/MyPostList';

function UserPostListContainer({ userid }) {
  const { data, loading, error } = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();

  // 컴포넌트 마운트 후 포스트 목록 요청
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  
  console.log("UserPostListContainer     " + data);
  console.log("UserPostListContainer " + typeof data);

  return <MyPostList posts={data} userid={userid}/>;
}

export default UserPostListContainer;