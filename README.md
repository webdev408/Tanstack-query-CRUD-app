# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Here is a step by step guide to integrate and implement the tanstack query for fetch, post, put and delete api functions.

1. Scaffold vite with npm create vite@latest and create your app name.
2. Install required packages such as react-router-dom, @tanstack/react-query, @tanstack/react-query-devtools and json-server. Can install axios if do not want fetch api use.
3. install json-server and create db.json file where it will be stored with data in json format.
4. Go to main.jsx file and integrate tanstack query including query devtools so that it will be available to all files in the app.
5. run the app by npm run dev. If the app is running then clean up the files and folders such as remove app.css, index.css, asset folder(if you have no assets to store).
6. Now start working on building the application.
   7.Open db.json file and create an array of data in json format.
7. Open routing folder in src folder and under the routing open two files: One-Navbar.jsx and two-Router.jsx. for routing.
   9.Open pages folder in src folder. Under the pages open three files: one-PostList.jsx two-Post.jsx and three-EditPost.jsx.
8. under src folder open a folder named api under which you will open a file call postFunctions.jsx. This file has all functionalities of fetchPosts, fetchPost, createPost, editPost and deletePost.

In the post list file, you will fetch data and will delete the post. In the post file, you will display the details of the post and in the edit post, you will edit the clicked post. 10. Open components folder in src folder where you will have PostForm.jsx and AddPost.jsx files to obtain user inputs and to add new posts.
