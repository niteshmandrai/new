import React from 'react'
import Home from '../../home/Home'
import { FaPlay } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";


const imgurl="https://image.tmdb.org/t/p/original"



function Banner(img) {
  
  return (
    <div
    className=''>

            <img 
            className='banner'
            src="https://th.bing.com/th/id/OIP.02NWZJDVvjZsmPmSfmLuvgHaFH?rs=1&pid=ImgDetMain" alt="" />
            
        <div className='divOnBanner'>

          <div className='flex w-[80%] flex-wrap '>
            
          <h1>Avengers:Endgame</h1>
                  

          </div>
                  <div>
                        <p
                      className='para'>Avengers: Endgame premiered in Los
                      Angeles on April 22, 2019, and was released in the 
                        United States on April 26.  </p>
                  </div>
                        
                        
              <div className='flex mt-5 ml-[10%]'>
                      
                    <div className='play'>
                  <FaPlay/>
                    Play
                    </div>

                    <div className='mylist'>
                    <GrAdd/>
                      My List
                    </div>


              </div>    
        </div>

    </div>
  )
}



export default Banner