import React, { useEffect, useState } from 'react'
import req from "./api"
function Banner() {
  let [item,setItem]=useState([])
  useEffect(()=>{
    const go=async ()=>{
      let movie= await fetch(req.movie)
      movie=await movie.json();
      movie=movie.results
      movie=movie[Math.floor(Math.random()*(movie.length-1))]
      setItem(movie)

    }
     go()
  },[])
  let pp=item?.overview
//   const trimi=(v)=>{
//     if(v.length>250){
//       return v.substring(0,250)+"..."
//     }
//     return v
//   }
//  pp= trimi(pp)
  return (
    <div className='ban cent  ' style={{
      backgroundSize:"cover",
      backgroundImage:`url(https://image.tmdb.org/t/p/original/${item?.backdrop_path})`,
     backgroundPosition:"bottom bottom",
    }}>
      <h2>
    {item?.original_title}
      </h2>
      <div className='mar'>
      <button className='btn'>play</button>
      <button  className='btn'>MyList</button>
      </div>
      <div className="p">
      <p>{pp}</p>
      </div>
    </div>
  )
}

export default Banner