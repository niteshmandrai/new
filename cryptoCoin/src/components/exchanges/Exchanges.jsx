import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, HStack, VStack,
Image,Heading,Text} from '@chakra-ui/react'
import Loader from '../loader/Loader'
import IfError from '../ifError/IfError'

function Exchanges() {

  const [exchanges,setExchanges]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)

useEffect(()=>{
const server=`httasdps://pro-api.coingecko.com/api/v3`


  const fetchExchanges=async()=>{
   try {
    const {data}=await axios.get(`https://api.coingecko.com/api/v3/exchanges?x_cg_demo_api_key=CG-ZeXP4QLyrToqbzoURWkH28Fu`)
    // console.log(data)
    setExchanges(data)
    setLoading(false)
    
   } catch (error) {
    setLoading(false)
    setError(true)

    
    
   }
  };
  fetchExchanges()

},[])


if(error) return <IfError 
message={"Error While Fetching Exchanges"}/>


  return (


    <Container>{
      loading?<Loader/>:
      <>

          <HStack wrap={"wrap"} 
          textColor={"black"}
          justifyContent={"space-evenly"}>
          
            {exchanges.map((i)=>{
              return <ExchangeCard 
              key={i.id}
              name={i.name} 
              img={i.image} rank={i.trust_score_rank}
              url={i.url}
              />
          })}

          </HStack>





      </>
      }
      
      
      </Container>





    )
}


const ExchangeCard=({name,img,rank,url})=>{
  return <a href={url} target={'blank'}>
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
        {rank}</Heading>

        <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
}

export default Exchanges