import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../api/postFunctions';

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl text-center font-bold">Post Details</h2>
      <button className="bg-gray-500 text-white px-4 mt-4 py-2 rounded" onClick={() => navigate('/')}>
        Back to Postlist
      </button>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
    </div>
  );
};
export default Post;
