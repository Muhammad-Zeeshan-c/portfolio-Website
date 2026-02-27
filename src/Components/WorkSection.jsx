
import React, {useEffect, useState} from 'react';
import AstraImage from '../assets/Astra.png';
import { motion } from 'framer-motion'



const defaultProjects = [
  {
    title: 'Crypto App',
    description: 'A responsive Crypto Screening site built with Vite, React and Tailwind CSS.',
    image: AstraImage,
    url: 'https://example.com/astra',
  },
  {
    title: 'Pixels',
    description: 'A responsive image gallery built with Vite, React and Tailwind CSS. powered by the Unsplash API.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Netflix Clone',
    description: 'A responsive Netflix clone using vanilla JS.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Portfolio website',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Amazon Clone',
    description: 'Amazon market place Clone built using html, css and javascript.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'Weather App',
    description: 'A responsive weather app built using Tailwind CSS.',
    image: AstraImage,
    url: '#',
  },
  {
    title: 'AI resume Analyzer',
    description: '',
    image: AstraImage,
    url: '#',
  }
];

export default function WorkSection({ projects = defaultProjects }) {
  

  

  const [visibleCount, setVisibleCount]=useState(3);

  useEffect(()=>{
    if (window.innerWidth >=1024) {
      setVisibleCount(3);
    } else {
      setVisibleCount(4);
    }
  }, []);
  const visibleProjects = projects.slice(0, visibleCount);

  function handleViewMore (count){

    setVisibleCount(count);
  }

  return (
    <section id="projects" className="w-full bg-black py-2">
      <div className="max-w-6xl mx-auto px-6 md:px-10 ">

        <div className='w-full flex justify-center'>
          <motion.h2 className=" h-12 w-92 text-3xl sm:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-blue-500 "
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}>Latest Projects</motion.h2>
        </div>

        <div className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleProjects.map((proj, idx) => (
            <motion.a
              key={idx}
              href={proj.url}
              className="h-80 block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white/5 hover:scale-110 hover:border-2 hover:border-primary "
              target="_blank"
              initial={{ scale:0.9, opacity:0 }}
              whileInView={{scale:1, opacity:1}}
              viewport={{once:true,margin:'-100px'}}
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
      {
        visibleCount <=4 ?<button onClick={() => {handleViewMore(projects.length)}} className="mx-auto block bg-primary text-white mt-4 px-6 py-2 rounded-lg bg-blue-600 cursor-pointer hover:scale-105">
        View More
      </button>: <button onClick={() => {handleViewMore(3)}} className="mx-auto block bg-primary text-white px-6 py-2 rounded-lg mt-4 bg-red-600 cursor-pointer hover:scale-105">
        View Less
      </button>
      }
    </section>
  );
}