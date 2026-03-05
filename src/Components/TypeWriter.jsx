import React, { useEffect, useState } from 'react';
import LinkedinLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github.svg'
import Xlogo from '../assets/X.svg'

export default function TypeWriter() {
  const options = ['Software Engineer', 'Web Developer', 'UI/UX Developer', 'Tech Enthusiast'];
  const [index, setIdex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
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

  }, [index, subIndex, reverse])

  return (
    <div className="w-full h-full flex flex-col gap-y-4 text-white mx-auto justify-center items-center sm:items-start px-5 md:px-10 ">

      <h1 className='flex flex-col gap-2 items-center sm:items-start text-center sm:text-start'>
        <span className='text-2xl  font-semibold text-primary xs:text-3xl sm:text-4xl sm:font-bold md:text-5xl'>Hello, I'm</span>
        <span className='text-3xl font-bold  text-white xs:text-4xl sm:text-5xl md:text-6xl'>Muhammad Zeeshan</span>
      </h1>

      <div className='text-2xl font-semibold xs:text-3xl sm:text-4xl sm:text-bold md:text-5xl text-center sm:text-start'>
        <span className=''>I'm a  </span>
        <span className='text-primary'>{` ${options[index].substring(0, subIndex)} `}</span>
        <span className=' text-white/50'>|</span>
      </div>

      <div className='text-white/90 text-sm xs:text-base md:text-xl lg:text-2xl text-center sm:text-start'>
        Turning complex requirements into seamless digital products. I engineer modern, high-impact web applications built for scale and performance.
      </div>
      <div className='flex gap-4'>
        <button className='w-[100px] h-[40px]  text-xs rounded-full bg-gradient-to-r bg-primary to-blue-500 hover:opacity-90 transition-opacity duration-300 font-bold hover:scale-105 xs:w-[130px] xs:text-base md:w-[150px] md:h-[50px] md:text-xl'><a href="#projects">View My Work</a></button>
        <button className='w-[100px] h-[40px] text-xs  rounded-full bg-white text-black hover:opacity-90 transition-opacity duration-300 font-bold hover:scale-105 xs:w-[130px] xs:text-base md:w-[150px] md:h-[50px] md:text-xl'  ><a href="/public/assets/cv.pdf"
          download="cv.pdf">My Resume</a></button>
      </div>

      {/* Socials */}
      <div className='flex gap-x-4 w-25 h-20 xs:w-32'>
        <a href="https://www.linkedin.com/in/muhammad-zeeshan-khalid-665b3a327/" target='_blank'><img src={LinkedinLogo} alt="LinkedIn" className='h-full' /></a>
        <a href="https://github.com/Muhammad-Zeeshan-c"><img src={GithubLogo} alt="GitHub" className='h-full w-auto' /></a>
        <a href="https://x.com" target='_blank'><img src={Xlogo} alt="X" className='h-full w-auto' /></a>
      </div>
    </div>
  );
}