import React from 'react'
import Sidebar from '../comps/Sidebar'
import Chats from '../comps/Chats'
import Chat from '../comps/Chat'

function Home() {
  return (
    <div className='bg-slate-800 h-[100vh] flex
    justify-center items-center w-[100%] '>
        <div className='rounded-md overflow-hidden 
         h-[90%] w-[85%] flex  justify-center 
         items-cendfgter  md:h-[80%] md:w-[80%]'>
           <Sidebar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home