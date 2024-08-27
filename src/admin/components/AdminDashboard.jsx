import React from 'react';
import { Container, Logo } from "../../user/components/index";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogoutBtn } from '../../user/components/index';

function AdminDashboard() {
    const authStatus = useSelector((state) => state.auth.status); // Check authentication status from Redux store
    const navigate = useNavigate();

    // Define navigation items conditionally based on authentication status
    const navItems = [
        {
            name: 'Home',
            slug: "/admin",
            active: true, // Always active
        },
        {
            name: "Add Manga",
            slug: "/add-manga",
            active: true, // Always active
        },
        {
            name: "Update Manga",
            slug: "/Update-manga",
            active: true, // Always active
        },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
          <aside className="w-64 bg-gray-800 text-white flex flex-col py-4">
            <div className="flex items-center justify-center mb-6">
              <Link to="/">
                <Logo width='70px' />
              </Link>
            </div>
            <ul className="flex flex-col space-y-4 px-4">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className='w-full text-left px-4 py-2 duration-200 hover:bg-blue-700 rounded-md'
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null
              )}
              
                <li>
                  <LogoutBtn className='w-full text-left px-4 py-2 duration-200 hover:bg-blue-700 rounded-md' />
                </li>
            </ul>
          </aside>
        </div>
      );
    }
    
    export default AdminDashboard;
