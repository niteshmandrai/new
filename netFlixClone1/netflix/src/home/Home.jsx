import React, { useContext, useEffect, useState } from 'react'
import axios  from 'axios'
import Rows from '../comps/rows/Rows'
import Banner from '../comps/banner/Banner'



const apikey="094187e8e98970d9b860f6805842507a"
const url="https://api.themoviedb.org/3"
const upcoming="upcoming"
const nowPlaying="now_playing"
const popular='popular'
const topRated="top_rated"
const imgurl="https://image.tmdb.org/t/p/original"





function Home() {

  const[upcomingMovies,setUpcomingMovies]=useState([])
  const[nowPlayingMovies,setnowPlayingMovies]=useState([])
   const[popularMovies,setPopularMovies]=useState([])
  const[topRatedMovies,setTopRatedMovies]=useState([])
  const [allGenre,setAllGenre]=useState([])



  useEffect(()=>{
    const fetchUpcoming=async ()=>{
     const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
    setUpcomingMovies(results)
    
    }

    const fetchNowPlaying=async ()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
      setnowPlayingMovies(results)
     
     }


     
    const fetchPopular=async ()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      setPopularMovies(results)
      console.log(results)
     
     }


     const fetchTopRated=async ()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
      setTopRatedMovies(results)
     
     }

     
     const getAllGenre=async ()=>{
      const {data:{genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)
      setAllGenre(genres)
      console.log(genres);
     
     }


    fetchUpcoming()
    fetchNowPlaying()
    fetchPopular()
    fetchTopRated()
    getAllGenre()


  }
  ,[])

  return (
    <div>
      
         <Rows title="Upcoming" arr={upcomingMovies}/>
         <Rows title="Now Playing" arr={nowPlayingMovies}/>
         <Rows title="Popular" arr={popularMovies}/>
         <Rows title="Top Rated" arr={topRatedMovies}/>

         <div
         className='flex h-[70px]  w-[100%] overflow-x-auto  bg-black'>

            {allGenre.map((item)=>
            
            (
              <a href={`/allGenre/${item.id}`}
              className=' rounded-lg p-1  flex justify-center 
               items-center text-xl m-2 bg-slate-600 
               '
              
              
              >{item.name}</a>
            ))}

         </div>
          

    </div>
  )
}

export default Home


