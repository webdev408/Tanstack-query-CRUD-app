/* eslint-disable react/prop-types */
import { useState } from 'react';

const PostForm = ({ onSubmit, initialValue }) => {
  const [post, setPost] = useState({
    title: initialValue?.title || '',
    content: initialValue?.content || '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const renderForm = (label) => (
    <div className="flex flex-col">
      <label>{label}</label>
      <input className="border p-2" type="text" name={label.toLowerCase()} placeholder="Enter title..." value={post[label.toLowerCase()]} onChange={handleInputChange} />
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(post);
    setPost({ title: '', content: '' });
  };

  return (
    <form className="container mx-auto" onSubmit={handleSubmit}>
      {renderForm('title')}
      {renderForm('content')}
      <button className="bg-blue-500 text-white px-4 mt-4 py-2 rounded" type="submit">
        Submit
      </button>
    </form>
  );
};
export default PostForm;
