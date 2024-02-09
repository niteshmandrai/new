import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import Rows from '../comps/rows/Rows'
import { FaPlay } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";





const apikey="094187e8e98970d9b860f6805842507a"
const url="https://api.themoviedb.org/3"
const upcoming="upcoming"
const nowPlaying="now_playing"
const popular='popular'
const topRated="top_rated"
const imgUrl = "https://image.tmdb.org/t/p/original";






function Home() {

  const[upcomingMovies,setUpcomingMovies]=useState([])
  const[nowPlayingMovies,setnowPlayingMovies]=useState([])
   const[popularMovies,setPopularMovies]=useState([])
  const[topRatedMovies,setTopRatedMovies]=useState([])
  const [allGenre,setAllGenre]=useState([])

const a=upcomingMovies[0];
console.log(a)

  useEffect(()=>{
    const fetchUpcoming=async ()=>{
     const {data:{results}}=await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`)
    setUpcomingMovies(results)
    console.log(upcomingMovies);
    
    }

    const fetchNowPlaying=async ()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${nowPlaying}?api_key=${apikey}`)
      setnowPlayingMovies(results)
     
     }


     
    const fetchPopular=async ()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${popular}?api_key=${apikey}`)
      setPopularMovies(results)
      // console.log(results)
     
     }


     const fetchTopRated=async ()=>{
      const {data:{results}}=await axios.get(`${url}/movie/${topRated}?api_key=${apikey}`)
      setTopRatedMovies(results)
     
     }

     
     const getAllGenre=async ()=>{
      const {data:{genres}}=await axios.get(`${url}/genre/movie/list?api_key=${apikey}`)
      setAllGenre(genres)
      // console.log(genres);
     
     }


    fetchUpcoming()
    fetchNowPlaying()
    fetchPopular()
    fetchTopRated()
    getAllGenre()


  }
  ,[])
  console.log(upcomingMovies);
  // const n=upcomingMovies[0].poster_path;
  // console.log(n);



  return (
    <div>
 <div
                className="banner"
                style={{
                    backgroundImage: popularMovies[9]
                        ? `url(${`${imgUrl}/${popularMovies[9].poster_path}`})`
                        : "rgb(16, 16, 16)",
                }}
            >
                {popularMovies[0] && <h1>{popularMovies[9].original_title}</h1>}
                {popularMovies[0] && <p>{popularMovies[9].overview}</p>}

                <div className='divOnBanner'>
                    <button className='play'><FaPlay /> Play  </button>
                    <button className='mylist'><GrAdd /> My List  </button>
                </div>
            </div>

      
         <Rows title="Upcoming" arr={upcomingMovies}/>
         <Rows title="Now Playing" arr={nowPlayingMovies}/>
         <Rows title="Popular" arr={popularMovies}/>
         <Rows title="Top Rated" arr={topRatedMovies}/>

         <div
         className='flex h-[70px]  w-[100%] overflow-x-auto  bg-black'>

            {allGenre.map((item)=>
            
            (
              <a href={`/allGenre/${item.id}`} key={item.id} 
              className=' rounded-md h-[35px] px-2 py-1 text-wrap flex justify-center 
               items-center ml-3 bg-slate-600 '
              >{item.name}</a>
            ))}

         </div>
          

    </div>
  )
}

export default Home


