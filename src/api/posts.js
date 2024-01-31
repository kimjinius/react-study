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


export const createPostComment = async (id, postData) => {
  try {
    console.log("id        " + id);
    console.log("postData        " + postData.content);
    
    const response = await axios.post(`http://localhost:4000/posts/${id}/comments`, postData);
    
    return response.data;
  } catch (error) {
    console.error("Error creating post comment:", error);
    throw error; // You can choose to handle or rethrow the error based on your requirement
  }
};

export const updatePostById = async ({ id, postData }) => {
  const response = await axios.put(`http://localhost:4000/posts/${id}`, postData);
  return response.data;
};

export const deletePostById = async (id) => {
  const response = await axios.delete(`http://localhost:4000/posts/${id}`);
  return response.data;
};

