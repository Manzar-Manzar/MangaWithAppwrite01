import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import authService from './appwrite/auth.js';
import { login, logout } from "./store/authSlice.js";
import { Header } from './user/components/index.js';
import { Outlet, useNavigate } from 'react-router-dom';
import { Footer } from './user/components/index.js';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
          
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <>
      <Header /> 
      <Outlet />
     <Footer />
    </>
  ) : null;
}

export default App;
