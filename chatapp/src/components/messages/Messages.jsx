import React from 'react'
import { Avatar,HStack,Text } from '@chakra-ui/react'

function Messages({text,uri,user="other"}) {
  return (

    <HStack alignSelf={user==='me'? "flex-end" :"flex-start"} 
    bg='gray.400' px={4} py={0.5} 
    borderRadius={10} >

        {
            user==="other" &&<Avatar size={"sm"} alignSelf={"flex-start"} src={uri}/>
        }


        if (text=="") {
        }
        else{
        <Text px={1} maxW={120}>{text}</Text>

        }


        {
            user==="me" && <Avatar size={"sm"} src={uri}/>
        }

    </HStack>

    )
}
export default Messages