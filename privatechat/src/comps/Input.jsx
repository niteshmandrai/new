import React, { useContext, useState } from 'react'
import add from '../../src/img/add.png'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db, storage } from '../firebase';
import { v4 as uuid } from "uuid";
import {
   getDownloadURL,
   ref,
   uploadBytesResumable } from 'firebase/storage';
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";

const Input = () => {

  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
          .then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };

  return (
    <div className='w-[100%] h-[13%]
     text-black items-center
      flex justify-between  '>

      
          
          
          <input 
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          style={{display:'none'}}
          id='file'/>
          <label htmlFor="file">
        <img src={add}
        className='w-[35px] border-2 rounded-[100%] 
           hover:cursor-pointer ml-[20px] mr-[20px]          
          hover:border-b-[2.5px] border-b-black'  />
         </label>

         <input
      value={text}
      onChange={(e)=>setText(e.target.value)}
      type="text" 
      placeholder='Type a message...' 
      className='flex justify-center ml-[10px] outline-none
       w-[70%] h-[73%] mb-[2px] text-[3vw] lg:text-[22px]
       border-b-[2px] border-black
     '/>

      <div className='flex  h-[100%] w-[30%]
       justify-around items-center 
      mr-5 '>


          <button
          onClick={handleSend}
          className='bg-green-500 ml-[20px]
            rounded-lg h-[70%]
            w-[60%] min-w-[100px]
             hover:border-[1.5px] 
             hover:border-white
              text-white font-bold
           hover:cursor-pointer'>SEND</button>


      </div>


     </div>
  )
}

export default Input