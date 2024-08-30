import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import { Provider, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import store from "./store/store.js";
import { Home, Browse, About, Contact } from "./user/components/index.js"
import Login from "./user/components/Login/Login.jsx";
import Chapter from "./user/components/Chapter.jsx";
import AuthLayout from "./user/components/AuthLayout.jsx";

import AddManga from "./user/pages/AddManga.jsx";
import Signup from "./user/pages/Signup.jsx";
import EditMangas from "./user/pages/EditMangas.jsx";

import AddChapter from "./user/pages/AddChapter.jsx"
import AllChapters from "./user/pages/AllChapters.jsx"
import EditChapter from "./user/pages/EditChapter.jsx"

import Post from "./user/pages/Post.jsx";
import AllMangas from "./user/pages/AllMangas.jsx";


const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/browse',
        element: <Browse />,
      },
      {
        path: '/all-mangas',
        element: <AllMangas />
      },
      {
        path: '/all-chapters',
        element: <AllChapters />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/add-manga',
        element: <AddManga />
      },
      {
        path: '/add-chapter',
        element: <AddChapter />
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-manga/:slug",
        element: (
            <AuthLayout authentication>
                {" "}
                <EditMangas />
            </AuthLayout>
        ),
    },
    {
      path: "/edit-chapter/:slug",
      element: (
          <AuthLayout authentication>
              {" "}
              <EditChapter />
          </AuthLayout>
      ),
  },
    {
        path: "/post/:slug",
        element: <Post />,
    },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={userRouter} />
    </Provider>
  </React.StrictMode>,
);
