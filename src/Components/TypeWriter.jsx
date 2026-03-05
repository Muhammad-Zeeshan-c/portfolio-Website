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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
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
      className="w-full h-full flex flex-col gap-y-6 text-white mx-auto justify-center items-center sm:items-start px-5 md:px-10 overflow-visible"
    >
      <motion.div variants={itemVariants} className='flex flex-col gap-2 items-center sm:items-start text-center sm:text-start'>
        <h1 className='flex flex-col gap-1'>
          <span className='text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none'>Muhammad</span>
          <span className='text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-linear-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-gradient-x'>Zeeshan</span>
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} className='text-xl font-bold xs:text-2xl sm:text-3xl md:text-4xl text-white/90'>
        <span className='opacity-50'>I'm a </span>
        <span className='text-primary'>{` ${options[index].substring(0, subIndex)} `}</span>
        <span className='animate-pulse text-primary'>_</span>
      </motion.div>

      <motion.p variants={itemVariants} className='max-w-xl text-white/50 text-sm xs:text-base md:text-lg leading-relaxed text-center sm:text-start'>
        Architecting high-performance digital experiences with modern precision. I bridge the gap between complex logic and cinematic interfaces to build software that scales and inspires.
      </motion.p>

      <motion.div variants={itemVariants} className='flex flex-wrap gap-4 mt-4'>
        <a href="#projects" className='group'>
          <button className='px-8 py-4 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-sm hover:bg-white transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,180,216,0.3)] flex items-center gap-2 cursor-pointer'>
            View My Work <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </a>
        <a href="/public/assets/cv.pdf" download="cv.pdf">
          <button className='px-8 py-4 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest rounded-sm bg-white/5 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all transform hover:-translate-y-1 cursor-pointer'>
            My Resume
          </button>
        </a>
      </motion.div>

      {/* Socials - Optimized sizing and visibility */}
      <motion.div variants={itemVariants} className='flex gap-x-8 mt-8 items-center'>
        <a href="https://www.linkedin.com/in/muhammad-zeeshan-khalid-665b3a327/" target='_blank' className="hover:scale-110 hover:-translate-y-1 transition-all">
          <img src={LinkedinLogo} alt="LinkedIn" className='h-8 w-auto opacity-70 hover:opacity-100 transition-opacity' />
        </a>
        <a href="https://github.com/Muhammad-Zeeshan-c" className="hover:scale-110 hover:-translate-y-1 transition-all border border-white/20 rounded-full p-2 leading-none flex items-center justify-center bg-white/5 backdrop-blur-sm">
          <img src={GithubLogo} alt="GitHub" className='h-6 w-auto opacity-100 invert' />
        </a>
        <a href="https://x.com" target='_blank' className="hover:scale-110 hover:-translate-y-1 transition-all">
          <img src={Xlogo} alt="X" className='h-8 w-auto opacity-70 hover:opacity-100 transition-opacity' />
        </a>
      </motion.div>
    </motion.div>
  );
}