import { React } from 'react';
import { useParams } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';


const PostPage = () => {
  const params = useParams();

  return (
    <PostContainer postId={parseInt(params.postid, 10)} />
  );
};

export default PostPage;