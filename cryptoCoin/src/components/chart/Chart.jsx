import React from 'react'
import {Line} from 'react-chartjs-2'
import {
Chart as Chartjs ,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend} from 'chart.js'

Chartjs.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Title,
Tooltip,
Legend
)

function Chart({arr=[],currency,days}) {
    const prices=[]
    const dates=[]
    const data={labels:dates,
        labels:dates,
        datasets:[{
            label:`Price in ${currency}`,
            data:prices,
            borderColor:"rgb(255,99,132)",
            backgroundColor:"rgba(255,99,132,0.7)"
        }]
    }

    for (let index = 0; index < arr.length; index++) {
        if(days==="24h") dates.push(new Date(arr[index][0]).toLocaleTimeString())
        else dates.push(new Date(arr[index][0]).toLocaleDateString())
        prices.push(arr[index][1])
        
    }
    // console.log(dates);
    // console.log(prices);




  return (
    <Line 
    options={{
        resrponsive:true,
    }}
        
        data={data}
        
        />
  )
}

export default Chart