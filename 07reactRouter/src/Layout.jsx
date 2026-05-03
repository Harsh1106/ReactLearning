import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
        <Header />  
        <Outlet /> {/* this is where the child routes will be rendered and it is a placeholder for the child routes, the nature of its is dynamic*/}
        <Footer />
    </>
  )
}

export default Layout