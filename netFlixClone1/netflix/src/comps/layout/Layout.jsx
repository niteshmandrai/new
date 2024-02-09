import React from 'react'
import Header from '../header/Header'
import Home from '../../home/Home'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (

        <>
        <Header/>
        <Outlet/>
        <Home/>
        </>


    )
}

export default Layout