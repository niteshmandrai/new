import React, { useContext } from 'react'
import { BsPersonFillAdd } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { MdOutlineMoreVert } from "react-icons/md";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';




function Chat() {



  const {data}=useContext(ChatContext)





  return (
    <div   className='bg-slate-100
     w-[100%] justify-center items-center '>
        <div 
        className='flex   bg-slate-700 
         h-[50px] w-[100%]
         justify-between items-center
         '>

            <div className='ml-[10px]
            flex justify-between items-center'>

           {
            data.user?.photoURL&& <img className='w-[40px] h-[40px] rounded-[50%]'
            src={data.user?.photoURL} 
            />
           }


            <span 
            className='font-bold text-white
             text-xl ml-2 '>
            {data.user?.displayName}
             </span>


            </div>


            <div 
            className='text-white
             flex mr-2 gap-2'>

               
               {/* <button> <FaVideo/></button>
               <button> <BsPersonFillAdd/></button>
                <button><MdOutlineMoreVert/></button> */}
            </div>
            
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat