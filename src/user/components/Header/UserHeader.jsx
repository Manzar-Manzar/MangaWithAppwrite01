// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Container, LogoutBtn } from "../index.js";
// import { useSelector } from 'react-redux';
// import AdminDashboard from "../../../admin/components/AdminDashboard.jsx"

// const UserHeader = () => {
//     const authStatus = useSelector((state) => state.auth.status);
//     const userData = useSelector((state) => state.auth.userData); // Access userData from Redux store
//     const navigate = useNavigate();
//     const isAdmin = useState(false);

//     const userNavItems = [
//         {
//             name: 'Home',
//             slug: "/",
//             active: true
//         },
//         {
//             name: "Browse",
//             slug: "/browse",
//             active: authStatus,
//         },
//         {
//             name: "About",
//             slug: "/about",
//             active: true,
//         },
//         {
//             name: "Contact",
//             slug: "/contact",
//             active: true,
//         },
//         {
//             name: "Login",
//             slug: "/login",
//             active: !authStatus,
//         },
//         {
//             name: "Signup",
//             slug: "/signup",
//             active: !authStatus,
//         },
        
//     ];


//     return (
//         <header className="bg-gray-800 text-white border-b border-gray-700 px-4 lg:px-6 py-3">
//             <Container>
//                 <nav className="flex justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="text-2xl font-semibold hover:text-orange-600">
//                         Manga Translate
//                     </Link>
//                     <ul className='flex ml-auto'>
//                         {userNavItems.map((item) =>
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
//                                 <LogoutBtn />
//                             </li>
//                         )}
//                     </ul>
//                     </nav>
//             </Container>
//         </header>
//     );
// };

// export default UserHeader;

