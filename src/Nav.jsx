import React, { useEffect, useState } from 'react'

function Nav() {
  let [add,setadd]=useState(false)
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
        setadd(true)
        
      }else{
         setadd(false)
      }
    })
    // return ()=>{
    //   window.removeEventListener("scroll")
    // }
  },[])
  return (
    <div className="cent ">

    <div className={`nav  ${add && 'add'}`} >
      <img className='nav_img' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
       alt="Netflix logo" />
      <img className='nav_avatar'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt="Netflix logo" />

    </div>
       </div>
  )
}

export default Nav