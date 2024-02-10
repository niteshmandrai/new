import React, { useContext } from 'react'
import './index.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext'

function App() {

  const {currentUser}=useContext(AuthContext)

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return<Navigate to="/login"/>
    }

    return children
  }



// console.log(currentUser);

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/'>

          <Route index element={<ProtectedRoute>
            <Home/>
          </ProtectedRoute>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Route>


          <Route path='/' element={<Home/>}/>


      </Routes>
   
   </BrowserRouter>
  )
}

export default App