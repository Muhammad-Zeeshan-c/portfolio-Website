import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/Profile pic.png'

function About() {
    return (
        <motion.section className='w-full min-h-screen max-h-[800px] bg-black relative overflow-hidden pt-4'

        >
            <motion.div className='flex flex-col justify-evenly items-center w-full h-full overflow-hidden'
            initial={{ opacity: 0, x: -200 }} // Starts 100px to the left
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 1.5,
                ease: "easeOut",
                type: "spring",
                stiffness: 15
            }}>
                <div className='absolute  -left-1/4  w-1/3 h-1/3 blur-3xl opacity-50 z-0'>
                    <div className='bg-gradient-to-r from-primary to to-primary animate-pulse blur-3xl w-full h-full'></div>
                </div>
                <div className='absolute -right-1/4 -bottom-0 w-1/3 h-1/3 opacity-50 z-0'>
                    {/* Control overall opacity here */}
                    <div className='w-full h-full bg-gradient-to-r from-primary to-primary animate-pulse blur-3xl'>
                    </div>
                </div>

                <div className='relative max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-20 flex items-start gap-x-10'>

                    {/* Pic */}
                    <div className='min-w-48 h-52 border-2 border-white/50 rounded-md'><img src={profilePic} className='w-full h-full object-cover rounded-md' /></div>

                    {/* Info div */}
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl text-primary font-bold'>Muhammad Zeeshan Khalid</h1>
                        <h1 className='text-xl text-white font-bold'>Web Developer</h1>
                        <span className=' text-white/50 text-[18px]'>I develop high-performance web applications with a strong emphasis on clean architecture and intuitive user experience. My core tech stack consists of React, JavaScript, Tailwind CSS, and Next.js. With a background in C++ and Python, I fill the gap between optimized application logic and responsive interfaces.</span>

                        {/* Container containing info  */}
                        <div className='mt-5'>
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-row gap-10'>

                                    <div className='flex flex-col w-30 h-18 rounded-lg bg-white/5 border-[1px] border-white/10 justify-center items-center text-center'>
                                        <h4 className='text-gray-400'>Projects</h4>
                                        <h4 className='text-white font-medium'>10+</h4>
                                    </div>
                                    <div className='flex flex-col w-48 h-18 rounded-lg bg-white/5 border-[1px] border-white/10 justify-center items-center text-center'>
                                        <h4 className='text-gray-400'>Focus</h4>
                                        <h4 className='text-white font-medium'>Perfomance & UI/UX</h4>
                                    </div>

                                    <div className='flex flex-col w-48 h-18 rounded-lg bg-white/5 border-[1px] border-white/10 justify-center items-center text-center'>
                                        <h4 className='text-gray-400'>Learning</h4>
                                        <h4 className='text-white font-medium'>Backend Development</h4>
                                    </div>
                                </div>

                                <div className=' flex flex-row gap-5'>
                                    <a href=""  ><button className='w-36 h-14 cursor-pointer bg-white flex justify-center items-center rounded-lg font-medium'>View Projects</button></a>
                                    <a href="" ><button className='w-36 h-14 cursor-pointer bg-white/5 flex justify-center items-center rounded-lg font-medium text-white'>Get in Touch</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* About-me */}
                <div className='max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-20 flex flex-col '>
                    <h3 className='font-bold text-3xl text-white '>About me</h3>

                    <p className='text-xl text-white/70 font-thin'>I’m Muhammad Zeeshan, a Computer Science undergraduate and Web Developer — passionate about building fast, scalable web applications using modern technologies like React, Next.js, JavaScript, and Tailwind CSS.
                        <br />
                        I enjoy turning ideas into clean, responsive, and user-friendly digital experiences that solve real-world problems</p>
                </div>
            </motion.div>
        </motion.section>
    )
}

export default About