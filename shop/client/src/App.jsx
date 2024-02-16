import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import Home from './components/home/Home'
import Products from './components/products/Products'
import Product from './components/product/Product'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './app.scss'
function App() {
  const Layout =()=>{
    return(
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/products/:id',
            element:<Products/>
          },
          {
            path:'/product/:id',
            element:<Product/>
          },
          
        
      ]
    },

    
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App