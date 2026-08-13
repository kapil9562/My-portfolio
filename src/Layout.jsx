import React, { Suspense } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import './index.css'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <main className='overflow-x-hidden'>
      <Header />
        <Outlet />
      <Footer />
    </main>
  )
}

export default Layout