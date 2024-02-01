import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function IfError({message}) {
  return (
    <Alert status='error' position={"fixed"}
    bottom={"5"} 
    left={"5%"} 
    // transform={"translateX(-50%)"}
    w={"fit-content"}>
      <AlertIcon/>
      {message}
    </Alert>
   
  )
}

export default IfError