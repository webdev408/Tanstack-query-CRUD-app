import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-800 text-white flex justify-center p-4 px-14">
        <h1 className="text-2xl font-bold">ReactQuery</h1>
        <ul className="flex gap-4 ml-auto">
          <li>
            <Link to="/">PostList</Link>
          </li>
          {/* <li>
            <Link to="/post/:id">Posts</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navbar;
