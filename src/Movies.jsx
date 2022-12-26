import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
function Movies({title,url,big,s}) {
  let [item,setItem]=useState([])
  let [id,setId]=useState("")
  useEffect(()=>{
    const go=async ()=>{
      let movie= await fetch(url)
      movie=await movie.json();
      movie=movie.results
      setItem(movie)

    }
    go()}
  ,[])
  if(s){
    item=item.filter((el)=>el.profile_path)
  }else{
    // item=item.filter((el)=>el.poster_path)
  }
  
  
    return (
    <div className=" cent" >
      <h3>{title}</h3>
        
     <div className={`container ${big&&'big'}`}>
        {item.map((item)=>(
           <a  key={item.poster_path||item.profile_path} href={`https://en.wikipedia.org/wiki/${item?.name||item?.title}`} target="_blank">
          <div>

           <div  className='el'>
            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path||item.profile_path}`} alt={item?.original_title||item.profile_path} />
           </div>
           {<p>{item?.name||item?.title}</p> } 
          </div>
            </a>
        ))
        }
     </div>

    </div>
  )
}

export default Movies