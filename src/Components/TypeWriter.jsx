import React, { useEffect, useState } from 'react';
import LinkedinLogo from '../assets/linkedin.svg'
import GithubLogo from '../assets/github.svg'
import Xlogo from '../assets/X.svg'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

export default function TypeWriter() {
  const options = ['Software Engineer', 'Web Developer', 'UI/UX Developer', 'Tech Enthusiast'];
  const [index, setIdex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let timeout;
    if (subIndex < options[index].length + 1 && !reverse) {
      timeout = setTimeout(() => {
        setSubIndex(subIndex + 1);
      }, 100)
    }
    else if (subIndex === options[index].length + 1 && !reverse) {
      timeout = setTimeout(() => {
        setReverse(true);
      }, 1000)
    }
    else if (reverse && subIndex > 0) {
      timeout = setTimeout(() => {
        setSubIndex(subIndex - 1);
      }, 100)
    }
    else if (reverse && subIndex === 0) {
      setIdex((index + 1) % options.length);
      setReverse(false);
    }

    return () => clearTimeout(timeout);
  }, [index, subIndex, reverse])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-y-4 sm:gap-y-6 text-white mx-auto justify-center items-center lg:items-start overflow-visible"
    >
      <motion.div variants={itemVariants} className='flex flex-col gap-1 items-center lg:items-start text-center lg:text-start'>
        <h1 className='flex flex-col gap-1 sm:gap-2'>
          <span className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] sm:leading-none'>Muhammad</span>
          <span className='text-4xl xs:text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] sm:leading-none text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-gradient-x'>Zeeshan</span>
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} className='text-lg sm:text-2xl md:text-3xl xl:text-4xl font-bold text-white/90'>
        <span className='opacity-50 text-sm sm:text-xl'>I'm a </span>
        <span className='text-primary'>{` ${options[index].substring(0, subIndex)} `}</span>
        <span className='animate-pulse text-primary'>_</span>
      </motion.div>

      <motion.p variants={itemVariants} className='max-w-xl text-white/50 text-xs sm:text-base md:text-lg leading-relaxed text-center lg:text-start px-2 sm:px-0'>
        Architecting high-performance digital experiences with modern precision. I bridge the gap between complex logic and cinematic interfaces.
      </motion.p>

      <motion.div variants={itemVariants} className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-1 sm:mt-4'>
        <a href="#projects" className='group'>
          <button className='px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-black text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,180,216,0.3)] flex items-center gap-2 cursor-pointer'>
            View My Work <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
        <a href="/public/assets/cv_new.pdf" download="cv.pdf">
          <button className='px-6 sm:px-8 py-3.5 sm:py-4 border border-white/20 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-sm bg-white/5 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all transform hover:-translate-y-1 cursor-pointer'>
            My Resume
          </button>
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className='flex gap-x-5 sm:gap-x-8 mt-6 sm:mt-10 items-center justify-center lg:justify-start'>
        <a href="https://www.linkedin.com/in/muhammad-zeeshan-khalid-665b3a327/" target='_blank' className="hover:scale-110 hover:-translate-y-1 transition-all">
          <img src={LinkedinLogo} alt="LinkedIn" className='h-5 sm:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity' />
        </a>
        <a href="https://github.com/Muhammad-Zeeshan-c" className="hover:scale-110 hover:-translate-y-1 transition-all border border-white/20 rounded-full p-1.5 sm:p-2 leading-none flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <img src={GithubLogo} alt="GitHub" className='h-4 sm:h-6 w-auto opacity-100 invert' />
        </a>
        <a href="https://x.com" target='_blank' className="hover:scale-110 hover:-translate-y-1 transition-all">
          <img src={Xlogo} alt="X" className='h-5 sm:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity' />
        </a>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/5 w-full lg:hidden px-4'
      >
        <div className='flex flex-col items-center gap-1'>
          <span className='text-xl font-black text-primary'>2+</span>
          <span className='text-[8px] uppercase tracking-widest text-white/40 text-center'>Years Exp.</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-xl font-black text-primary'>20+</span>
          <span className='text-[8px] uppercase tracking-widest text-white/40 text-center'>Projects</span>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <span className='text-xl font-black text-primary'>10+</span>
          <span className='text-[8px] uppercase tracking-widest text-white/40 text-center'>Happy Clients</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
