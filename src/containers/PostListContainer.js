import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostList from '../components/blog/PostList';
import { getPosts } from '../modules/posts';

function PostListContainer() {
  //state.posts.posts 에서 리덕스스토어에서 data, loading, error 이 값들을 가져올 수 있음
  const { data, loading, error } = useSelector(state => state.posts.posts);
  

  // 디스패치
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <PostList posts={data} />;
}

export default PostListContainer;