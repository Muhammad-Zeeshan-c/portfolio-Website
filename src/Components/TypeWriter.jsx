import React, { useEffect, useState } from 'react';
import LinkedinLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github.svg'
import Xlogo from '../assets/X.svg'

export default function TypeWriter() {
  const options = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Tech Enthusiast'];
  const [index, setIdex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex < options[index].length + 1 && !reverse) {
      setTimeout(() => {
        setSubIndex(subIndex + 1);
      }, 100)
    }
    else if (subIndex === options[index].length + 1 && !reverse) {
      setTimeout(() => {
        setReverse(true);
      }, 1000)
    }
    else if (reverse && subIndex > 0) {
      setTimeout(() => {
        setSubIndex(subIndex - 1);
      }, 100)
    }
    else if (reverse && subIndex === 0) {
      setTimeout(() => {
        setIdex((index + 1) % options.length);
        setReverse(false);
      })
    }
    setBlink(blink => !blink);

  }, [index, subIndex, reverse])

  return (
    <div className="w-full h-full flex flex-col gap-y-8 text-white mx-auto justify-end text-center lg:text-start "
      style={{
        opacity: reverse ? 1 : 0.9,
      }}>

      <h1 className='flex flex-col gap-2 font-bold'>
        <span className='text-5xl text-primary'>Hello, I'm</span>
        <span className='text-6xl text-white'>Muhammad Zeeshan</span>
      </h1>

      <div className='text-5xl font-bold'>
        <span>I'm a </span>
        <span className='text-primary'>{`${options[index].substring(0, subIndex)} `}</span>
        <span className=' text-white/50 '>|</span>
      </div>

      <div className='text-white/90 text-2xl'>
        Turning complex requirements into seamless digital products. I engineer modern, high-impact web applications built for scale and performance.
      </div>
      <div className='flex gap-4'>
        <button className='w-[150px] h-[50px] rounded-full bg-gradient-to-r bg-primary to-blue-500 hover:opacity-90 transition-opacity duration-300 font-bold hover:scale-105'><a href="">View My Work</a></button>
        <button className='w-[120px] h-[50px]  rounded-full bg-white text-black hover:opacity-90 transition-opacity duration-300 font-bold hover:scale-105'  ><a href="">My Resume</a></button>
      </div>

      {/* Socials */}
      <div className='flex gap-x-4 w-32 h-20'>
        <a href=""><img src={LinkedinLogo} alt="LinkedIn" className='h-full' /></a>
        <a href=""><img src={GithubLogo} alt="GitHub" className='h-full w-auto'/></a>
        <a href=""><img src={Xlogo} alt="X" className='h-full w-auto'/></a>
      </div>
    </div>
  );
}