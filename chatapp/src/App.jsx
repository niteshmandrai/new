import React, { useEffect, useRef, useState } from 'react'
import {VStack,HStack,Box,Container, Button,Input,Text}  from '@chakra-ui/react'
import Messages from '../src/components/messages/Messages'


import {GoogleAuthProvider,getAuth,onAuthStateChanged,signInWithPopup, signOut} from 'firebase/auth'
import {app} from './components/firebase/firebase'


import {getFirestore,
  addDoc,
  collection,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot} from 'firebase/firestore'

const auth=getAuth(app)
const db=getFirestore(app)

function App() {

  const [user,setUser]=useState(false)
  const [message,setMessage]=useState("")
  const [messages,setMessages]=useState([])
  const q=query(collection(db,"Messages"),orderBy("createdAt","asc"))
  const [name,setName]=useState("")
  const divForScroll=useRef(null)
    
  const loginHandler=(e)=>{
  e.preventDefault()
  const provider=new GoogleAuthProvider();

  signInWithPopup(auth,provider)
}


const logoutHandler=(e)=>{
  signOut(auth)
}

  
const submitHandler = async(e)=>{
  e.preventDefault()
  
  try {
    await addDoc(collection(db,"Messages"),{
      text:message,
      uid:user.uid,
      uri:user.photoURL,
      createdAt:serverTimestamp(),
    });
    setMessage("");
    
    divForScroll.current.scrollIntoView({behavior:"smooth"});
  } catch (error) {
    alert(error)
    
  }
}


useEffect(()=>{
  onAuthStateChanged(auth,(data)=>{
    setUser(data)
    console.log(data);
    console.log(data.displayName);
    setName(data.displayName);
  })
},[])

const unsubscribeForMessages=onSnapshot
(q,(snap)=>{
setMessages(snap.docs.map((item)=>
{
  const id=item.id;
  return{id,...item.data()};
})
);
});


useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(data)=>{
    setUser(data);
  })

  return ()=>{
    unsubscribe();
    unsubscribeForMessages()
  }
},[])





  return (
      <Box bg='pink.100'>
       {
        user?( <Container bg='gray.200' h='100vh'>
        <VStack h='full' p='3'>

          <Button onClick={logoutHandler} className='hover:text-black '
           bg='red' w='100%' color='white'>Logout</Button>

          <VStack h='full' w='full' overflowX={"auto"} 
          css={{"&::-webkit-scrollbar":{
            display:"none",
          }}}
          >
               {
                messages.map((item)=>{
                 return <Messages
                  key={item.id}
                  user={item.uid===user.uid?"me":"other"} 
                  text={item.text}
                  uri={item.uri}
                  name={item.displayName}
                  
                  />
                })
               }
               

<div ref={divForScroll}></div>
      </VStack>
           <form  onSubmit={submitHandler}
           style={{width:'100%'}}>
            <HStack>
              <Text>{name}</Text>
                  <Input value={message} onChange={(e)=>{setMessage(e.target.value)}}  
                   placeholder='Enter A Message  . . . .'/>
                  <Button className='hover:text-black ' 
                  type='submit'  color='whitesmoke'  
                  bg='green.600'>Send</Button>

            </HStack>
                 

          </form>


      </VStack>
        
      </Container>
):<VStack h='100vh' bg='white'  justifyContent='center'>
  <Button colorScheme='green' onClick={loginHandler}>Sign in with Google</Button>
</VStack>
       }

      </Box>




  )
}

export default App