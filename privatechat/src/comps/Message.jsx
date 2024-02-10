import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { ref } from 'firebase/storage';



function Message({message}) {
  // console.log(message);



  const {currentUser}=useContext(AuthContext)
  const {data}=useContext(ChatContext)

  
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  var timeStamp= (`${message.date.seconds}`)
  timeStamp=timeStamp*1000
  var dateFormat = new Date(timeStamp);
  
var date=dateFormat.toLocaleDateString()
var time=dateFormat.toLocaleTimeString()

  // console.log(date)
  // console.log(time)



  return (
    <div 
    ref={ref}
    className={`flex gap-[10px]
     ${message.senderId===currentUser.uid
      &&' flex-row-reverse'} `}
  >
      <div 
      className='max-w-[80%] flex flex-col gap-[10px]'>
        {/* <img 
        src={message.senderId === currentUser.uid?
        currentUser.photoURL:
        data.user.photoURL
    }
        className='h-[40px]  w-[40px] rounded-3xl  object-cover'
        alt="" /> */}
        {/* <span className='text-slate-500'>  {time}</span> */}
      </div>
      <div className='max-w-[80%] flex flex-col gap-[10px]'>
       {
        message.text!=""&& <p 
        className={`bg-slate-300 min-h-[35px] 
        flex shadow-xl px-[10px] mt-[10px] 
         max-w-fit text-black
        text-md
     ${message.senderId===currentUser.uid
      &&'rounded-t-[12px] rounded-bl-[12px]'}
      
      ${message.senderId!=currentUser.uid
        &&'rounded-tr-[12px] rounded-b-[12px]'}
      
      
      `}
  
        >
          {message.text}
          <p className='text-slate-500
          px-[20px] pr-[0] text-[10px]'>{time}
          </p>
        </p>
       }
       
       {
        message.img && <div 
        className={`mt-[10px] 
        border-[2px] border-slate-300
        flex flex-col items-end
     ${message.senderId===currentUser.uid
      &&'rounded-t-[8px] rounded-bl-[8px]'}
      
      ${message.senderId!=currentUser.uid
        &&'rounded-tr-[8px] rounded-b-[8px]'}
      
      `}>
           <p className='text-slate-500
           text-[10px]'>{time}
          </p>
          <img src={message.img} 
        className='  gap-[10px] object-cover
         h-[250px] w-[200px] rounded-md
          border-2 '          
         />        

        </div>
       }
      </div>


    </div>
  )
}

export default Message