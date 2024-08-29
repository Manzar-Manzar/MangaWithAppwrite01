import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function User() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default User