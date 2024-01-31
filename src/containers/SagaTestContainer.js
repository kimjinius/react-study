import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVietnam } from '../modules/sagatest';
import BlogHead from '../components/blog/BlogHead';

function SagaTestContainer({titleText}) {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.vietnam.vietnam);

  useEffect(() => {
    dispatch(getVietnam(titleText));
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  const content = data.data.text;
  
  return (
    <BlogHead  title={content}/>
  );
}

export default SagaTestContainer;