import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa'; // Import icons from react-icons
import { Link, NavLink } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MangaTranslate</h2>
            <p className="text-gray-400 text-sm">Your favorite manga translations</p>
          </div>

<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-white`
      }
    >
      Home
    </NavLink>
  </li>
  
  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-white`
      }
    >
      About
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-white`
      }
    >
      Contact
    </NavLink>
  </li>
</ul>



          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">© 2024 MangaTranslate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
