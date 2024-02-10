import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Sidebar() {
  return (
    <div className='w-[40%]  
     bg-slate-300 border-r-2
      border-slate-400
       overflow-scroll   '>


        <Navbar/>
        <Search/>
        <Chats/>
       

     </div>
  )
}

export default Sidebar