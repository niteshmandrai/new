import { VStack,Heading,Text,Image } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

function CoinsCard({id,name,img,symbol,price,
    currencySymbol="₹"}){
    return(
         <Link to={`/coin/${id}`} >
      <VStack w={20} shadow={"lg"} 
      borderRadius={"lg"} transition={"all 0.3"}
      p={2} m={4}
  
      css={{
        "&:hover":{
          transform:"scale(1.1)"
        }
      }}
      >
        <Image src={img} h={"10"} w={"10"}
        objectFit={"contain"} alt='exchange'></Image>
  
        <Heading size={"md"} noOfLines={1}>
          {symbol}</Heading>
  
          <Text noOfLines={1}>{name}</Text>
          {/* <Text noOfLines={1}>{price}</Text> */}
          <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"N/A"}</Text>
      </VStack>
    </Link>
    )
  }
  

export default CoinsCard