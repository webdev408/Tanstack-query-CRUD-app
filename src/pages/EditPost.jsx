import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPost, updatePost } from '../api/postFunctions';
import PostForm from '../components/PostForm';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts', id],
    queryFn: () => fetchPost(id),
  });

  const updatePostMutation = useMutation({
    mutationFn: updatePost,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      navigate('/');
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  const handleSubmit = (updatedPost) => {
    updatePostMutation.mutate({ id, ...updatedPost });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl text-center font-bold my-10">Edit Post</h2>
      <PostForm onSubmit={handleSubmit} initialValue={post} />
    </div>
  );
};
export default EditPost;
