import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'


function Navbar() {
  const {currentUser}=useContext(AuthContext);

  
  return (
    <div className='flex flex-wrap  
     h-[50px] bg-slate-700 
      text-white uppercase'>

        <div className='flex w-[100%] items-center
        justify-between'>
            <img  src={currentUser.photoURL} alt=""
             className=' flex 
            justify-center items-center h-[25px] w-[25px]
            sm:h-[30px] sm:w-[30px]
            md:h-[40px] md:w-[40px]
             rounded-3xl ml-1'/>
            <span className='flex text-[80%] 
            font-bold'>
              {currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)} 
            className='text-white 
            rounded-md text-[13px]
             h-[28px] mr-1 w-[30%] 
             font-[500]  bg-red-500'
             >LOGOUT</button>
        </div>






    </div>
  )
}

export default Navbar