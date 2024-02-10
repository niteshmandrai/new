import React, { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';


const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div className='bg-slate-300'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
         <div 
         onClick={()=>handleSelect(chat[1].userInfo)}    
          className='flex items-center
          border-b-[0.3px]
          border-slate-400 hover:bg-slate-100
          hover:cursor-pointer'
          key={chat[0]} 
          >


       {
         chat[1].userInfo&& <img className='w-[40px]
          h-[40px] 
          mx-2 my-1
         rounded-3xl'
          src={chat[1].userInfo.photoURL} 
          alt="" />
       }
         <div>
             {
             chat[1].userInfo&& <span className='font-semibold'>
              {chat[1].userInfo.displayName}
              </span>
         
             }
               {
                chat[1].lastMessage!=""&&
                <p className='text-slate-400 text-[11px]'>
                {chat[1].lastMessage?.text}
                </p>
               }
         </div>
     </div>

      ))}
      
       
    </div>
  )
}

export default Chats