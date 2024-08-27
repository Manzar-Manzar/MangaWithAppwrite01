import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import authService from './appwrite/auth.js';
import { login, logout } from "./store/authSlice.js";
import { Header } from './user/components/index.js';
import { Outlet, useNavigate } from 'react-router-dom';
import { Footer } from './user/components/index.js';
import UserHeader from './user/components/Header/UserHeader.jsx';
import AdminHeader from './user/components/Header/AdminHeader.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false); // Correct usage of useState
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          if (authService.Admin(userData)) {
            setIsAdmin(true); 
          } else {
            setIsAdmin(false);
          }
        } else {
          dispatch(logout());
          setIsAdmin(false); // Ensure admin is reset if no user
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <>
      {isAdmin ? <UserHeader /> : <AdminHeader />}
      <Outlet />
      {!isAdmin && <Footer />} {/* Conditionally render Footer based on isAdmin */}
    </>
  ) : null;
}

export default App;
