import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deletePost, fetchPosts } from '../api/postFunctions';
import { useNavigate } from 'react-router-dom';
import AddPost from '../components/AddPost';

const PostList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  const deletePostMutation = useMutation({
    mutationFn: deletePost,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  if (isLoading) {
    return <div className="container mx-auto">Loading...</div>;
  }
  if (error) {
    return <div className="container mx-auto">Error...</div>;
  }

  const handleDelete = (id) => {
    deletePostMutation.mutate(id);
  };

  return (
    <div className="container mx-auto my-10">
      <AddPost />
      <ul className="bg-gray-200 p-6 mt-4 shadow-md">
        {posts.map((post) => (
          <li key={post.id} className="my-4 flex justify-between">
            <h4 onClick={() => navigate(`/post/${post.id}`)} className="cursor-pointer">
              {post.title}
            </h4>
            {/* <p>{post.content}</p> */}
            <button className="bg-yellow-600 text-white px-4 py-2 rounded" onClick={() => navigate(`/post/${post.id}/edit`)}>
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(post.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PostList;
