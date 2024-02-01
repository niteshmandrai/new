import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider,
   createBrowserRouter,
    createRoutesFromElements} from 'react-router-dom'
import Home from './home/Home.jsx'
import Layout from './comps/layout/Layout.jsx'




const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>

          <Route path='home' element={<Home/>}/>



    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
