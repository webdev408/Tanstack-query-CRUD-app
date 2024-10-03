import axios from 'axios';

export const fetchPosts = async () => {
  const response = await axios.get('http://localhost:3000/posts');
  return response.data;
};
export const fetchPost = async (id) => {
  const response = await axios.get(`http://localhost:3000/posts/${id}`);
  return response.data;
};
// create post
export const createPost = async (newPost) => {
  const response = await axios.post('http://localhost:3000/posts', newPost);
  return response.data;
};
// update post
export const updatePost = async (updatedPost) => {
  const response = await axios.put(`http://localhost:3000/posts/${updatedPost.id}`, updatedPost);
  return response.data;
};
// delete post
export const deletePost = async (id) => {
  const response = await axios.delete(`http://localhost:3000/posts/${id}`);
  return response.data;
};
