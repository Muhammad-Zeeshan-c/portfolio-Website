import React,{useEffect, useState} from 'react';


export default function TypeWriter() {
  const options=['Software Engineer','Web Developer','UI/UX Designer','Tech Enthusiast'];
  const [index,setIdex]=useState(0);
  const [subIndex,setSubIndex]=useState(0);
  const [blink,setBlink]=useState(true);
  const [reverse,setReverse]=useState(false);
  
  useEffect(()=>{
    if(subIndex <options[index].length+1 && !reverse){
      setTimeout(()=>{
        setSubIndex(subIndex+1);
      },100)
    }
    else if(subIndex === options[index].length+1 && !reverse){
      setTimeout(()=>{
        setReverse(true);
      },1000)
    }
    else if(reverse && subIndex > 0){
      setTimeout(()=>{
        setSubIndex(subIndex-1);
      },100)
    }
    else if(reverse && subIndex === 0){
      setTimeout(()=>{
        setIdex((index+1)%options.length);
        setReverse(false);
      })
    }
    setBlink(blink=>!blink);

  },[index,subIndex,reverse])

  return (
    <div className="flex flex-col gap-4 text-white border-2 border-red-500"
    style={{
      opacity: reverse ? 1 : 0.9,      
    }}>

      <h1 className='flex flex-col gap-2 font-bold'>
        <span className='text-5xl text-primary'>Hello, I'm</span>
        <span className='text-6xl text-white'>***** *******</span>
      </h1>

      <div className='text-5xl font-bold'>
        <span>I'm a </span>
        <span>{`${options[index].substring(0,subIndex)} `}</span>
        <span className=' text-white/50 '>|</span>
      </div>
      
      <div className='text-white/90 text-2xl'>
        Turning complex requirements into seamless digital products. I engineer modern, high-impact web applications built for scale and performance.
      </div>
    </div>
  );
}