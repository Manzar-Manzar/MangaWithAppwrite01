import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
        name: 'Home',
        slug: "/",
        active: true
    },
    {
        name: "Browse",
        slug: "/browse",
        active: authStatus,
    },
    {
        name: "About",
        slug: "/about",
        active: true,
    },
    {
        name: "Contact",
        slug: "/contact",
        active: true,
    },
    {
        name: "Login",
        slug: "/login",
        active: !authStatus,
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
    },
    {
        name: "All mangas",
        slug:"/mangas",
        active: true,
    },
    {
        name: "Add mangas", // When clicked on the manga card, there should be add, update chapter, and delete chapter
        slug:"/mangas",
        active: true,
    },
    {
        name: "Update Manga", // to update the manga title and other details
        slug:"/updateManga",
        active: true,
    },
    {
        name: "Delete Manga",
        slug:"/deleteManga",
        active: true,
    },
    {
        name: "Add Chapter",
        slug:"/addChapter",
        active: true,
    },
    {
        name: "Update Chapter",
        slug:"/updateChapter",
        active: true,
    },
    {
        name: "Delete Chapter",
        slug:"/deleteChapter",
        active: true,
    },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header