import React from 'react'
import {Box,Text,Image} from '@chakra-ui/react'
import {motion} from 'framer-motion'


function Home() {
  return (
    <Box bgColor={"black"} w={'full'} h={"85vh"} >

      <motion.div style={{
        height:"80vh"
      }}
      
      animate={{
        translateY:"20px"
      }}

      transition={{
        duration:"1",
        repeat:Infinity,
        repeatType:"reverse"  
        
      }}>
      <Image src='https://purepng.com/public/uploads/large/purepng.com-bitcoinobjectsbitcoinmoneycashcoinobjectgoldcurrencypaymentbitcoinvirtual-631522324013ysu8d.png'
       w={"full"} h={"full"} 
      objectFit={"contain"}
      filter={"grayscale(1)"}
      
      />
      </motion.div>

      <Text
      fontSize={"6xl"}
      fontFamily={"monospace"}
      textAlign={"center"}
      color={"white"}
      mt={[-24,-20]}
      ml={[0,-600]}
      
      >NIT.CRYPTO</Text>





    </Box>
  )
}

export default Home