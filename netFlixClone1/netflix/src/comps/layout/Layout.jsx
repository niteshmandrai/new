import React from 'react'
import Header from '../header/Header'
import Home from '../../home/Home'
import { Outlet } from 'react-router-dom'
import Banner from '../banner/Banner'
function Layout() {
  return (

        <>
        <Header/>
        <Banner/>
        <Outlet/>
        <Home/>
        </>


    )
}

export default Layout