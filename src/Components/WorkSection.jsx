
import React from 'react';
import AstraImage from '../assets/Astra.png';
import { motion } from 'framer-motion'



const defaultProjects = [
  {
    title: 'Crypto App',
    description: 'A responsive marketing site built with Vite, React and Tailwind CSS.',
    image: AstraImage,
    url: 'https://example.com/astra',
  },
  {
    title: 'Pixels',
    description: 'Describe your next project here. Add links and screenshots as needed.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Netflix Clone',
    description: 'Describe your next project here. Add links and screenshots as needed.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Portfolio website',
    description: 'Describe your next project here. Add links and screenshots as needed.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Amazon Clone',
    description: 'Describe your next project here. Add links and screenshots as needed.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Weather App',
    description: 'Describe your next project here. Add links and screenshots as needed.',
    image: AstraImage,
    url: '#',
  }
];

export default function WorkSection({ projects = defaultProjects }) {
  return (
    <section id="work" className="w-full min-h-[680px] bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-5">

        <div className='w-full flex justify-center'>
          <motion.h2 className=" h-12 w-42 text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-blue-500 "
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}>My Work</motion.h2>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.a
              key={idx}
              href={proj.url}
              className="h-80 block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/5 hover:scale-110 hover:border-2 hover:border-primary "
              target="_blank"
              initial={{ scale:0.5 }}
              whileInView={{scale:1}}
              transition={{ duration: 0.5 }}
              
            >
              <div className="w-full h-48 bg-gray-800 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="mt-2 text-sm text-white/50">
                  {proj.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
      
    </section>
  );
}