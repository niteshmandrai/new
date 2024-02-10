import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import { ChatContext } from '../context/ChatContext'
import { doc,onSnapshot } from 'firebase/firestore'
import { db } from "../firebase";

function Messages() {
  const [messages,SetMessages]=useState([])

  const {data}=useContext(ChatContext)

  useEffect(()=>{

    const unsub=onSnapshot(doc(db,"chats",data.chatId),
    (doc)=>{
      doc.exists()&& SetMessages(doc.data().messages)
    })

    return()=>{
      unsub()
    }

  },[data.chatId])


  return (
    <div className='bg-slate-100
     p-3 h-[75%] 
    overflow-scroll'>

      {
        messages.map((n)=>(
          <Message message={n} key={n.id}/>
        ))
      }
             
    </div>
  )
}

export default Messages