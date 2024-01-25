import axios from 'axios';

export const getPosts = async () => {
  const response = await axios.get('http://localhost:4000/posts');
  return response.data;
};

export const getPostById = async id => {
  const response = await axios.get(`http://localhost:4000/posts/${id}`);
  return response.data;
};

export const createPost = async (postData) => {
  const response = await axios.post('http://localhost:4000/posts', postData);
  return response.data;
};

export const updatePostById = async ({ id, postData }) => {
  const response = await axios.put(`http://localhost:4000/posts/${id}`, postData);
  return response.data;
};

export const deletePostById = async (id) => {
  const response = await axios.delete(`http://localhost:4000/posts/${id}`);
  return response.data;
};

