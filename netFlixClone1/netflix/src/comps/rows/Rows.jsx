import React from 'react'
import Cards from '../cards/Cards'
const imgurl="https://image.tmdb.org/t/p/original"




function Rows({title,arr=[
  
]}) {
  return (


    
    <div 
    className='row' >

      

        <h2>{title}</h2>

        <div className='flex overflow-x-auto'>


              {
                arr.map((item,index)=>(
                  <Cards key={index}  img={`${imgurl}/${item.poster_path}`} title={`${item.original_title}`}/>
                ))
                
              }

        </div>
    </div>
  )
}

export default Rows