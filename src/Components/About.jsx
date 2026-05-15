import React from 'react'
import { motion } from 'framer-motion'
import profilePic from '../assets/Profile pic.png'
import { FaRocket, FaLightbulb, FaGraduationCap } from 'react-icons/fa'

function About() {
    const stats = [
        { icon: <FaRocket className="text-primary" />, label: 'Projects', value: '10+', desc: 'Modern digital solutions' },
        { icon: <FaLightbulb className="text-primary" />, label: 'Focus', value: 'UI/UX', desc: 'Performance-driven design' },
        { icon: <FaGraduationCap className="text-primary" />, label: 'Learning', value: 'Backend', desc: 'Scalable architectures' }
    ];

    return (
        <section className='w-full min-h-screen bg-black relative overflow-hidden py-20 flex items-center' id='about'>
            {/* Background Glows */}
            <div className='absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full animate-pulse-soft pointer-events-none'></div>
            <div className='absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full animate-pulse-soft pointer-events-none' style={{ animationDelay: '2s' }}></div>

            <div className='max-w-6xl mx-auto px-6 md:px-10 relative z-10 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center'>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative flex justify-center'
                    >
                        <div className='relative w-64 h-64 md:w-80 md:h-80'>
                            {/* Decorative Rings */}
                            <div className='absolute inset-0 border-2 border-primary/20 rounded-2xl animate-spin-slow'></div>
                            <div className='absolute inset-2 border border-dashed border-primary/10 rounded-2xl animate-spin-slow [animation-direction:reverse]'></div>

                            {/* Main Image Container */}
                            <div className='absolute inset-4 rounded-2xl overflow-hidden glass border-white/10 group'>
                                <img
                                    src={profilePic}
                                    alt="Muhammad Zeeshan Khalid"
                                    className='w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>

                            {/* Floating Accent */}
                            <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 blur-2xl rounded-full animate-pulse'></div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className='flex flex-col gap-8'>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className='text-primary font-bold text-lg tracking-wider uppercase mb-2'>About Me</h2>
                            <h1 className='text-4xl md:text-5xl font-black text-white mb-6 leading-tight'>
                                Crafting Digital <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>Masterpieces</span> with Code.
                            </h1>
                            <p className='text-white/70 text-lg leading-relaxed max-w-2xl'>
                                I am <span className='text-white font-bold'>Muhammad Zeeshan Khalid</span>, a Computer Science undergraduate and Web Developer. I specialize in building fast, scalable web applications that bridge the gap between complex logic and beautiful interfaces.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                                    className='glass p-4 rounded-xl flex flex-col gap-2 glass-hover cursor-default group'
                                >
                                    <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>{stat.icon}</div>
                                    <div>
                                        <h4 className='text-white font-bold text-xl'>{stat.value}</h4>
                                        <p className='text-white/40 text-xs uppercase tracking-widest'>{stat.label}</p>
                                    </div>
                                    <p className='text-white/50 text-[10px] leading-tight'>{stat.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className='flex flex-wrap gap-4 mt-4'
                        >
                            <a href="#projects" className='px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_10px_20px_rgba(0,180,216,0.25)]'>
                                Explore Projects
                            </a>
                            <a href="#contact" className='px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors duration-300'>
                                Get In Touch
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
