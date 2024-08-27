import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import { Provider, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import store from "./store/store.js";

import Home from "./user/components/Home/Home";
import Browse from "./user/components/Browse/Browse.jsx";
import Search from "./user/components/Search/Search.jsx";
import About from "./user/components/About.jsx";
import Login from "./user/components/Login/Login.jsx";
import Contact from "./user/components/Contact/Contact.jsx";
import Chapter from "./user/components/Chapter.jsx";
import AuthLayout from "./user/components/AuthLayout.jsx";

import AddManga from "./user/pages/AddManga.jsx";
import Signup from "./user/pages/Signup.jsx";
import EditMangas from "./user/pages/EditMangas.jsx";

import Post from "./user/pages/Post.jsx";
import AllMangas from "./user/pages/AllMangas.jsx";

import AdminDashboard from "./admin/components/AdminDashboard.jsx"

const getUserRole = () => {
  
  const user = JSON.parse(localStorage.getItem('user')); 
  return user ? user.role : null;
};

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
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
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
