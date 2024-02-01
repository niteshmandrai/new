import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, HStack,Button, RadioGroup,Radio} from '@chakra-ui/react'
import Loader from '../loader/Loader'
import IfError from '../ifError/IfError'
import CoinsCard from '../exchangeCard/CoinsCard'
import CoinDetails from '../coinDetails/CoinDetails'



function Coins() {

  const [coins,setCoins]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  const [currency,setCurrency]=useState("inr")
  const [page,setPage]=useState(1)
  // const [currencySymbol,setCurrencySymbol]=useState("₹")
   const btns=new Array(132).fill(1);


  const currencySymbol=currency==="inr"?"₹":currency==="eur"?"€":"$";

  useEffect(()=>{

  const fetchCoins=async()=>{
   try {
    const {data}=await 
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}`)

    // console.log(data)
    setCoins(data)
    setLoading(false)
    
   } catch (error) {
    setLoading(false)
    setError(true)
   }
  };
  fetchCoins()

},[currency,page])

const changePage=(page)=>{
  setPage(page)
  setLoading(true)

}


if(error) return <IfError 
message={"Error While Fetching Coins"}/>


  return (


    <Container>{
      loading?<Loader/>:
      <>

        <RadioGroup value={currency}
        onChange={setCurrency} >
          <HStack spacing={5}>
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"eur"}>EUR</Radio>
            <Radio value={"usd"}>USD</Radio>
          </HStack>
        </RadioGroup>

          <HStack wrap={"wrap"} 
          textColor={"black"}
          justifyContent={"space-evenly"}>
            {coins.map((i)=>{
              return <CoinsCard 
              key={i.id}
              id={i.id}
              price={i.current_price}
              name={i.name} 
              img={i.image} 
              rank={i.market_cap_rank}
              symbol={i.symbol}
              currencySymbol={currencySymbol}

              />
          })}

          </HStack>

          <HStack w={"full"} p={8} overflowX={"auto"}>
            {
              btns.map((item,index)=>(
                <Button bgColor={"black"} 
            color={"whitesmoke"} 
            key={index}
            onClick={()=>changePage(index+1)}
           >{index+1}</Button>
              ))
            }
          </HStack>
      </>
      }
      
      
      </Container>





    )
}



export default Coins