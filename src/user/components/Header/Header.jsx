import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth.js";
import { login, logout } from "../../../store/authSlice.js";
import { Outlet, useNavigate } from 'react-router-dom';
import AdminHeader from './AdminHeader.jsx';
import UserHeader from './UserHeader.jsx';

function Header() {
    const [loading, setLoading] = useState(true);
    const [Admin, setAdmin] = useState(false); // Correct usage of useState
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData }));

                    if (userData.role === "admin") {
                        setIsAdmin(true); // Use the state setter function
                        navigate("/admin"); // Navigate to admin dashboard if admin
                    } else {
                        setIsAdmin(false); // Ensure isAdmin is reset if not admin
                        navigate("/"); // Navigate to user dashboard if not admin
                    }
                } else {
                    dispatch(logout());
                    setAdmin(false); // Ensure isAdmin is reset if no user
                }
            })
            .catch((error) => {
                console.error("Error fetching current user:", error);
                dispatch(logout()); // Log out if there's an error
            })
            .finally(() => setLoading(false));
    }, [dispatch, navigate]);

    if (loading) {
        return <div>Loading...</div>; // Loading indicator while fetching user data
    }

    return (
        Admin == false ? <AdminHeader /> : <UserHeader />
    );
}

export default Header;
