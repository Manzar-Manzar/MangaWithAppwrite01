import React from 'react'
import { Header } from './components/index.js'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout