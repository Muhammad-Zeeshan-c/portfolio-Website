import React,{useEffect, useState}from 'react'

function CursorComponent() {

  const [position,setposition]=useState({x:0,y:0});

  const handleMove=(e)=>{
    setposition({x:e.clientX,y:e.clientY});
  }

  useEffect(()=>{
    window.addEventListener('mousemove',handleMove);
    return()=>{
      window.removeEventListener('mousemove',handleMove);
    }
  })
  return (
    <div className='pointer-events-none z-[999] fixed top-0 left-0'
      style={{transform:`translate(${position.x-40}px , ${position.y-40}px )`}}>
      <div className='w-20 h-20 bg-gradient-to-r bg-pink-500 to-blue-500 blur-3xl opacity-70'>

      </div>  
    </div>
  )
}

export default CursorComponent