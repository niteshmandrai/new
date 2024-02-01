import { Box, Container, HStack, 
  Text,Image,
  Radio, RadioGroup, VStack, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Progress, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Loader from '../loader/Loader'
import Chart from '../chart/Chart'
import IfError from "../ifError/IfError"

function CoinDetails() {  
  
  
  const [coin,setCoin]=useState([])
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  const [currency,setCurrency]=useState("inr")
  const [days,setDays]=useState("24h")
  const [chartArray,setChartArray]=useState([])
  


  const params=useParams();

  const currencySymbol=currency==="inr"?"₹":
  currency==="eur"?"€":"$";


  const btns=["24h","7d","14d","30d","60d","200d","365d","max"]



  
  useEffect(()=>{

    const fetchCoin=async()=>{
     try {
      const {data}=await 
      axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
     
      const {data:chartData}=await 
      axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
  
      console.log(chartData)
      setCoin(data)
      setChartArray(chartData.prices)
      setLoading(false)
      
     } catch (error) {
      setLoading(false)
      setError(true)
     }
    };
    fetchCoin()
  
  },[params.id,currency,days])


  const switchChartStats=(key)=>{
      switch(key){
        case "24h":
          setDays("24h");
          setLoading(true);
          break;

          case "7d":
            setDays("7d");
            setLoading(true);
            break;
      
            case "14d":
              setDays("14d");
              setLoading(true);
              break;
        
              case "30d":
                setDays("30d");
                setLoading(true);
                break;
          
                case "60d":
                  setDays("60d");
                  setLoading(true);
                  break;
            
                  case "200d":
                    setDays("200d");
                    setLoading(true);
                    break;
                    
                case "365d":
                  setDays("365d");
                  setLoading(true);
                  break;

                case "max":
                  setDays("max");
                  setLoading(true);
                  break;

                  default:
                    setDays("24h");
                    setLoading(true);
                    break;
            }

  }


  
if(error) return <IfError 
message={"Error While Fetching Exchanges"}/>


  return (
    
    <Container >
      {
        loading?<Loader/>:(
          <>
          <Box width={"full"} borderWidth={1}>
            <Chart currency={currencySymbol} 
            arr={chartArray}
            days={days}/>
          </Box>

          {/*--------- buttons--------- */}
          <HStack p={4} overflowX={"auto"}>
            {
              btns.map((i)=>{
                return<Button
                key={i}
                onClick={()=>switchChartStats(i)}>{i}</Button>
              })
            }
          </HStack>

          <RadioGroup value={currency}
              onChange={setCurrency} >
                <HStack spacing={5}>
                  <Radio value={"inr"}>INR</Radio>
                  <Radio value={"eur"}>EUR</Radio>
                  <Radio value={"usd"}>USD</Radio>
                </HStack>
        </RadioGroup>


        <VStack spacing={4} p={16} alignItems={"flex-start"}>

            <Text fontSize={"sm"} alignSelf={"center"}
            opacity={"0.8"}>
            Last Updated On 
            {Date(coin.market_data.last_updated).split("G")[0]}
            </Text>

            <Image src={coin.image.small} w={16} h={16} 
            objectFit={"contain"}
            
            />

            <Stat>
              <StatLabel>{coin.name}</StatLabel>
              <StatNumber>
                {currencySymbol}
                {coin.market_data.current_price[currency]}</StatNumber>


              <StatHelpText>
                <StatArrow type={coin.market_data.price_change_percentage_24h>0?
                  "increase":"decrease"}/>
                {coin.market_data.price_change_percentage_24h}
              </StatHelpText>
            </Stat>

            <Badge fontSize={"lg"} color={"white"} bg={"black"}>
              {`#${coin.market_cap_rank}`}
            </Badge>



            <CustomBar high={coin.market_data.high_24h[currency]}
             low={coin.market_data.low_24h[currency]}/>

              <Box w={"full"} p={4}>
                <Item title={`Max Supply`} value={coin.market_data.max_supply}/>
                <Item title={`Circulating Supply`} value={coin.market_data.circulating_supply}/>
                <Item title={`Market Cap`} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
                <Item title={`All Time Low`} value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>
                <Item title={`All Time High`} value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>
              </Box>

        </VStack>

          </>
        )
       
      }
    </Container>

   
  )
}




const CustomBar=({high,low})=>{
  return <VStack>
    <Progress value={50} colorScheme='teal'
    w={"full"}/>

    <HStack justifyContent={"space-between"} 
    w={"full"}>
      <Badge children={low} colorScheme='red'/>
      <Text>24H Range</Text>
      <Badge children={high} colorScheme='green'/>

    </HStack>
  </VStack>
}



const Item=({title,value})=>{
  return <HStack justifyContent={"space-between"} 
  w={"full"} my={4}>
    <Text fontWeight={"666"}
    letterSpacing={"widest"}>{title}</Text>
    <Text>{value}</Text>
  </HStack>

}
export default CoinDetails