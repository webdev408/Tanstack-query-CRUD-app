import { createBrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import PostList from '../pages/PostList';
import Post from '../pages/Post';
import EditPost from '../pages/EditPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <div>Oops! Page not found😞</div>,
    children: [
      {
        path: '/',
        element: <PostList />,
        index: true,
      },
      {
        path: '/post/:id',
        element: <Post />,
      },
      {
        path: '/post/:id/edit',
        element: <EditPost />,
      },
    ],
  },
]);
export default router;
