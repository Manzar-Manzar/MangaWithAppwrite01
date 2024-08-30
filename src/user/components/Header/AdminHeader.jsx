// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { Container, Logo, LogoutBtn } from "../index";
// import UserHeader from './UserHeader';
// import authService from '../../../appwrite/auth';
// import { login, logout } from "../../../store/authSlice.js";
// function AdminHeader() {
//     const authStatus = useSelector((state) => state.auth.status); // Check authentication status from Redux store
//     const [isAdmin, setIsAdmin] = useState(false)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const [adminLoggedIn, setAdminLoggedIn] = useState(true)


//     // Define navigation items conditionally based on authentication status
//     const adminNavItems = [
//         {
//             name: 'Home',
//             slug: "/admin",
//             active: true, // Always active
//         },
//         {
//             name: "Add Manga",
//             slug: "/add-manga",
//             active: true, // Always active
//         },
//         {
//             name: "Update Manga",
//             slug: "/Update-manga",
//             active: true, // Always active
//         },

//     ];

//     useEffect(() => {
//         authService.getCurrentUser()
//             .then((userData) => {
//                 if (userData) {
//                     dispatch(login({ userData }));

//                     if (userData.role === "admin") {
//                         setIsAdmin(true);
//                     } else {
//                         setIsAdmin(false);
//                         navigate("/"); // Navigate to user dashboard if not admin
//                     }
//                 } else {
//                     dispatch(logout());
//                     setIsAdmin(false);
//                     navigate("/");
//                     setAdminLoggedIn(false)
//                 }
//             })
//             .catch((error) => {
//                 console.error("Error fetching current user:", error);
//                 dispatch(logout());
//                 setIsAdmin(false);
//                 navigate("/login");
//             })
//             .finally(() => setLoading(false));
//     }, [dispatch, navigate]);

//     const handleLogout = () => {
//         authService.logout()
//             .then(() => {
//                 dispatch(logout());
//                 setAdminLoggedIn(false);
//                 navigate("/");
//             })
//             .catch((error) => {
//                 console.error("Logout error:", error);
//             });
//     };


//     // return (
//     //     <header className="bg-gray-800 text-white border-b border-gray-700 px-4 lg:px-6 py-3">
//     //         <Container>
//     //             <nav className="flex justify-between items-center mx-auto max-w-screen-xl">
//     //                 <Link to="/" className="text-2xl font-semibold hover:text-orange-600">
//     //                     Manga Translate
//     //                 </Link>
//     //                 <ul className='flex ml-auto'>
//     //                     {adminNavItems.map((item) =>
//     //                         item.active ? (
//     //                             <li key={item.name}>
//     //                                 <button
//     //                                     onClick={() => navigate(item.slug)}
//     //                                     className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//     //                                 >{item.name}</button>
//     //                             </li>
//     //                         ) : null
//     //                     )}
//     //                     {authStatus && (
//     //                         <li>
//     //                             <LogoutBtn onClick={handleLogout}/>
//     //                         </li>
//     //                     )}
//     //                 </ul>
//     //             </nav>
//     //         </Container>
//     //     </header>
//     // )

//     return (
//         setAdminLoggedIn == true ?(
//             <header className="bg-gray-800 text-white border-b border-gray-700 px-4 lg:px-6 py-3">
//             <Container>
//                 <nav className="flex justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="text-2xl font-semibold hover:text-orange-600">
//                         Manga Translate
//                     </Link>
//                     <ul className='flex ml-auto'>
//                         {adminNavItems.map((item) =>
//                             item.active ? (
//                                 <li key={item.name}>
//                                     <button
//                                         onClick={() => navigate(item.slug)}
//                                         className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
//                                     >{item.name}</button>
//                                 </li>
//                             ) : null
//                         )}
//                         {authStatus && (
//                             <li>
//                                 <LogoutBtn onClick={handleLogout} />
//                             </li>
//                         )}
//                     </ul>
//                 </nav>
//             </Container>
//         </header>
//         ) : <UserHeader />
//     )
// }

// export default AdminHeader;

