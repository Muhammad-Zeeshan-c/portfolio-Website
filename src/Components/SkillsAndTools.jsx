import React from 'react';
import { motion } from 'framer-motion'
// Language & Framework Icons
import { FaJava, FaReact, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiHtml5, SiCss3 } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// Tools Icons
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea, SiPycharm, SiVite, SiVercel } from "react-icons/si";
import { TbBrandGithub } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { DiNpm } from "react-icons/di";

function Skills() {
  const skills = [
    { icon: <FaJava />, name: 'Java' },
    { icon: <TbBrandCpp />, name: "C++" },
    { icon: <FaJsSquare />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <RiNextjsFill />, name: "Next.js" },
    { icon: <RiTailwindCssFill />, name: 'Tailwind' },
    { icon: <SiHtml5 />, name: 'HTML' },
    { icon: <SiCss3 />, name: 'CSS' },
    { icon: <VscVscode />, name: 'VS Code' },
    { icon: <SiIntellijidea />, name: 'IntelliJ' },
    { icon: <TbBrandGithub />, name: 'GitHub' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <DiNpm />, name: 'NPM' },
    { icon: <SiVercel />, name: 'Vercel' },
    { icon: <SiVite />, name: 'Vite' },
    { icon: <SiPycharm />, name: 'PyCharm' },
  ];

  // Repeat skills for infinite marquee
  const marqueeSkills = [...skills, ...skills, ...skills];

  return (
    <section className='w-full bg-black py-24 relative overflow-hidden' id='skills'>
      {/* Background Decor */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none'></div>

      <div className='max-w-6xl mx-auto px-6 md:px-10 relative z-10'>
        <motion.div 
          className='flex flex-col items-center gap-4 mb-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-primary font-bold text-lg tracking-widest uppercase'>Expertise</h2>
          <h1 className='text-4xl md:text-5xl font-black text-white'>Skills & <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>Technologies</span></h1>
          <p className='text-white/50 text-lg max-w-xl'>Modern tools and frameworks I use to build high-performance digital experiences.</p>
        </motion.div>

        {/* Marquee Container */}
        <div className='relative w-full overflow-hidden py-10 mask-gradient'>
          <motion.div
            className="flex w-max items-center gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 30,
              repeat: Infinity,
            }}
          >
            {marqueeSkills.map((skill, index) => (
              <div 
                key={index}
                className='glass glass-hover p-6 w-32 h-36 flex flex-col items-center justify-center gap-4 rounded-2xl group transition-all duration-300'
                title={skill.name}
              >
                <div className='text-4xl text-white/70 group-hover:text-primary group-hover:scale-110 transition-all duration-300'>
                  {skill.icon}
                </div>
                <span className='text-xs font-medium text-white/40 group-hover:text-white transition-colors duration-300 text-center uppercase tracking-tighter'>
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}} />
    </section>
  )
}

export default Skills

