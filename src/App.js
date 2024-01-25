import React from 'react';
import { Routes,Route } from 'react-router-dom';
// import PostListPage from './pages/PostListPage';
import CreatePost from './pages/CreatePost';
import BlogHome from './pages/BlogHome';
import PostPage from './pages/PostPage';
import UserHome from './pages/UserHome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogHome />} exact={true} />
      <Route path="/post/:postid" element={<PostPage />} />
      <Route path="/user/:userid" element={<UserHome />} />
      <Route path="/createpost" element={<CreatePost />} />
    </Routes>
  );
}

export default App;