// import React, { useState } from 'react'
// import { createBrowserRouter, Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { Container, Logo, LogoutBtn } from '../user/components/index.js'
// import authService from '../appwrite/auth.js';
// import { login, logout } from "../store/authSlice.js"
// import App from '../App.jsx';

// function AdminHeader() {
//     const authStatus = useSelector((state) => state.auth.status); // Check authentication status from Redux store
//     const [isAdmin, setIsAdmin] = useState(false)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const [adminLoggedIn, setAdminLoggedIn] = useState(true)
//     const adminRouter = createBrowserRouter([
//         {
//             path: "/",
//             element: <App />
//         }
//     ])
//     const navItems = [
//                 {
//                     name: 'Home',
//                     slug: "/",
//                     active: true, // Always active
//                 },
//                 {
//                     name: "Add Manga",
//                     slug: "/add-manga",
//                     active: true, // Always active
//                 },
//                 {
//                     name: "Update Manga",
//                     slug: "/Update-manga",
//                     active: true, // Always active
//                 },
        
//             ];

//             const handleLogout = () => {
//                         authService.logout()
//                             .then(() => {
//                                 dispatch(logout());
//                                 navigate("/");
//                             })
//                             .catch((error) => {
//                                 console.error("Admin Logout error:", error);
//                             });
//                     };
//             return (
//                         <header className="bg-gray-800 text-white border-b border-gray-700 px-4 lg:px-6 py-3">
//                             <Container>
//                                 <nav className="flex justify-between items-center mx-auto max-w-screen-xl">
//                                     <Link to="/" className="text-2xl font-semibold hover:text-orange-600">
//                                         Manga Translate
//                                     </Link>
//                                     <ul className='flex ml-auto'>
//                                         {navItems.map((item) =>
//                                             item.active ? (
//                                                 <li key={item.name}>
//                                                     <button
//                                                         onClick={() => navigate(item.slug)}
//                                                         className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                                                     >{item.name}</button>
//                                                 </li>
//                                             ) : null
//                                         )}
//                                         {authStatus && (
//                                             <li>
//                                                 <LogoutBtn onClick={handleLogout}/>
//                                             </li>
//                                         )}
//                                     </ul>
//                                 </nav>
//                             </Container>
//                         </header>
//                     )
// }

// export default AdminHeader

import React from 'react'

function AdminHeader() {
  return (
    <div>AdminHeader</div>
  )
}

export default AdminHeader