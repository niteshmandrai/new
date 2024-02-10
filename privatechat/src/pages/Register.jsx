import React, { useState } from 'react'
import add from '../../src/img/add.png'
import{auth,storage} from '../firebase'
import { createUserWithEmailAndPassword,
     updateProfile } from 'firebase/auth'
import { 
     ref,
      uploadBytesResumable,
       getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useNavigate ,Link} from 'react-router-dom';
import { MdErrorOutline } from "react-icons/md";




function Register() {
    const [error,setError]=useState(false)
    const navigate=useNavigate()

    const handlesubmit= async (e)=>{
        e.preventDefault();
        const displayName=e.target[0].value;
        const email=e.target[1].value;
        const password=e.target[2].value;
        const file=e.target[3].files[0];


try {
    const res =await createUserWithEmailAndPassword(auth,email,password);
    const date = new Date().getTime();
    const storageRef = ref(storage, `${displayName+date}`);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on(
    
    
    (error) => {
    // Handle unsuccessful uploads
    setError(true)
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      
        await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL,
        })

        await setDoc(doc(db,"users",res.user.uid),{
            uid:res.user.uid,
            displayName,
            email,
            photoURL:downloadURL,
         })

         await setDoc(doc(db,"userChats",res.user.uid),{})
         navigate("/")
        // console.log('File available at', downloadURL);
    });
  }
);
    

} catch (error) {
    setError(true)
    
}


    }


  return (
   <div className='bg-slate-800 h-[100vh] flex
   justify-center  items-center text-black
   '>
    <div className='
     bg-white rounded-lg flex
     flex-col items-center w-[300px]'>
        <span className=' font-semibold text-purple-600 
         text-2xl'>Chat App</span>
        <span className=' text-purple-500 
         '>Register</span>
        <form onSubmit={handlesubmit}
         className='flex flex-col '>
            <input  className='outline-none px-8  border-b-2
             border-slate-300  p-1 m-2 '  type="text" placeholder='Name' />
            <input className='outline-none  px-8 border-b-2
             border-slate-300  p-1 m-2 ' type="email" placeholder='Email' />
            <input className='outline-none px-8 border-b-2
             border-slate-300   p-1 m-2' type="password" placeholder='Passsword' />
            <input  style={{
                display:"none"
            }}
             className=' p-1 m-2 ' 
             type="file" id='file' />
            <label className='flex  items-center
             hover:cursor-pointer' 
              htmlFor="file">
                <img className='w-10'
                 src={add} alt="" />
                <span 
                className='text-purple-500 '>
                    Add an avatar</span>
            </label>
            <button className='bg-green-500 mt-2
             box-border h-8  text-white
             rounded-lg
            '>Sign Up</button>
            {
                error && <span className=' mt-[10px]  flex h-[30px]
                justify-around  items-center text-white rounded-lg
                 bg-red-600'><MdErrorOutline/>  Something Went Wrong</span> 
            }
        </form>
        <p className='mb-3 '>You do have an account?
        <Link className='border-b-[2px] border-purple-600 hover:border-b-[2.5px] hover:mb-[2px] rounded-sm
           hover:border-green-600' to="/login">Login</Link></p>
    </div>
   </div>
  )
}

export default Register