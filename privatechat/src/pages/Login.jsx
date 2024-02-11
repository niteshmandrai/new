import React, { useState } from 'react'
import add from '../../src/img/add.png'
import { useNavigate,Link } from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { MdErrorOutline } from "react-icons/md";
import { VscError } from "react-icons/vsc";




function Login() {

  const [error,setError]=useState(false)
  const navigate=useNavigate()

  const handlesubmit= async (e)=>{
      e.preventDefault();
      const email=e.target[0].value;
      const password=e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/");

    } catch (error) {
      setError(true)
      
    }
}



  return (
   <div className='bg-slate-800 h-[100vh] flex
   justify-center  items-center
   '>
    <div className='
     bg-white rounded-lg flex
     flex-col items-center justify-center  w-[300px]'>
        <span className=' font-semibold text-purple-600
         text-2xl'>Chat App</span>
        <span className=' text-purple-500
         '>Login</span>
        <form onSubmit={handlesubmit} 
        className='flex flex-col '>
            <input className=' outline-none px-8
             border-b-2 border-slate-300  p-1 m-2 ' type="email" placeholder='Email' />
            <input className='outline-none px-8
             border-b-2 border-slate-300   p-1 m-2' type="password" placeholder='Passsword' />
           
            <button className='bg-green-500 w-[90%]  mt-2
            box-border self-center 
            h-8 rounded-lg text-white
           '>Sign in</button>
           
             {
                error && <span className=' mt-[10px]  flex h-[30px]
                justify-around  items-center text-white rounded-lg
                 bg-red-600'><MdErrorOutline/>  Something Went Wrong</span> 
            }
        </form>
        <p className='mb-3 '>
          You don't have an account?
          <Link className='border-b-[2px] border-purple-600 hover:border-b-[2.5px] hover:mb-[2px] rounded-sm
           hover:border-green-600' to="/register">Register</Link></p>
    </div>
   </div>
  )
}

export default Login