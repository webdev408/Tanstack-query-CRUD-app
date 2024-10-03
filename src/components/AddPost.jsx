import { useMutation, useQueryClient } from '@tanstack/react-query';
import PostForm from './PostForm';
import { createPost } from '../api/postFunctions';

const AddPost = () => {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: createPost,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handleAddPost = (post) => {
    createPostMutation.mutate({ id: crypto.randomUUID(), ...post });
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-10">Add New Post</h2>
      <PostForm onSubmit={handleAddPost} initialValue={{}} />
    </div>
  );
};
export default AddPost;
