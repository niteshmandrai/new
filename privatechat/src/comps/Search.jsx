import React, { useContext, useState } from 'react'
import { collection,
   query,getDocs,doc,getDoc,
    where, 
    setDoc,
    updateDoc,
    serverTimestamp} from "firebase/firestore";
import { db } from '../firebase';
import {AuthContext} from '../context/AuthContext'
    


function Search() {
  const [username,setUsername]=useState("")
  const [user,setUser]=useState(null)
  const [err,setErr]=useState(false)

  const {currentUser}=useContext(AuthContext)


  const handleSearch=async ()=>{
    const q = query(
      collection(db, "users"),
    where("displayName","==",username));

   try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUser(doc.data())
});
    
   } catch (err) {
    setErr(true)
     }

  };


  const handleKey=(e)=>{
    e.code==="Enter" && handleSearch();
  };


  const handleSelect =async()=>{

    const combineID=
    currentUser.uid>user.uid
    ? currentUser.uid + user.uid 
    : user.uid + currentUser.uid;

    try {
      const res=await getDoc(doc(db,"chats",combineID))


      if(!res.exists()){

        await setDoc(doc(db,"chats",combineID),{messages:[]})

        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combineID + ".userInfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoURL:user.photoURL,
          },
          [combineID + ".date"]: serverTimestamp(),
        });


        await updateDoc(doc(db,"userChats",user.uid),{
          [combineID+".userInfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoURL:currentUser.photoURL,
          },
          [combineID+".date"]:serverTimestamp(),
        })


      }
      
    } catch (error) {  
    }
    setUser(null);
      setUsername("");



  }


  return (
    <div>
      <div>

<input

    type="text" 
    placeholder='Search Here'
    onKeyDown={handleKey}
    onChange={(e)=>setUsername(e.target.value)} 
    value={username}       
    className='bg-slate-100 
    outline-none text-center w-[100%] h-[35px]
    border-b-[1.5px] border-black
      hover:border-black 
      hover:border-b-[2.0px]
      hover:text-[17px]'
       
       
       />

    </div>
    {err&& (
      <div className='bg-slate-200 mt-1
      shadow-xl hover:bg-slate-300'>
          <div className='flex justify-evenly items-center'>
              
              <div>
                  <span className='font-bold 
                  text-black'>
                    User Not Found</span>            
              </div>
          </div>
      </div>
    )}



    {
      user&&
    (
      <div onClick={handleSelect}  
      className='bg-slate-200 mt-1
      shadow-xl hover:bg-slate-300'>
          <div className='flex justify-around items-center'>


              <img className='w-[40px] h-[40px] 
              rounded-3xl' src={user.photoURL} alt="" />
              <div>
                  <span className='font-bold'>
                    {user.displayName}</span>            
              </div>
      </div>
  </div>
)
}
 </div>
    
  )
}

export default Search