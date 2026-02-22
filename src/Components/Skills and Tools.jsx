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

  const repeatedSkills = [...skills, ...skills];
  return (
    <div className='h-1/2 w-full flex flex-col justify-evenly text-white items-center overflow-hidden bg-black'>
      <div>
        <motion.span
          className='flex flex-col gap-2 items-center'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary via-blue-500 to-blue-500'>MY Skills</h2>
          <span className='text-white font-medium text-xl'>Modern Applications | Modern Technologies</span>
        </motion.span>

      </div>

      {/* Skills */}
      <div className='w-full h-24 flex overflow-hidden'>
        <motion.div
          className="flex w-max items-center gap-5 text-6xl text-primary"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            delay: 0,
            repeat: Infinity,
          }}
        >
          {
            repeatedSkills.map((skill, index) => (
              <div key={index}
                className='w-20 h-24 flex flex-col items-center justify-between'
                aria-label={skill.name}
                title={skill.name}
              >
                <span className='hover:text-7xl transition-transform duration-300 delay-100 cursor-pointer'>{skill.icon}</span>
                <p className='text-sm'>{skill.name}</p>
              </div>


            ))
          }
          {
            repeatedSkills.map((skill, index) => (
              <div key={index}
                aria-hidden="true"
                className='w-20 h-24 flex flex-col items-center justify-between'
                aria-label={skill.name}
                title={skill.name}
              >
                <span className='hover:text-7xl transition-transform duration-300 delay-100 cursor-pointer'>{skill.icon}</span>
                <p className='text-sm'>{skill.name}</p>
              </div>

            ))
          }
        </motion.div>

      </div>
    </div>
  )
}

export default Skills
