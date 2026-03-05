
import React, { useEffect, useState } from 'react';
import AstraImage from '../assets/Astra.png';
import { motion } from 'framer-motion'



const defaultProjects = [
  {
    title: 'Crypto App',
    description: 'A responsive Crypto Screening site built with Vite, React and Tailwind CSS.',
    image: AstraImage,
    url: 'https://example.com/astra',
    tags: [],
  },
  {
    title: 'Pixels',
    description: 'A responsive image gallery built with Vite, React and Tailwind CSS. powered by the Unsplash API.',
    image: AstraImage,
    url: '#',
    tags: [],
  },
  {
    title: 'Netflix Clone',
    description: 'A responsive Netflix clone using vanilla JS.',
    image: AstraImage,
    url: '#',
    tags: [],
  },
  {
    title: 'Portfolio website',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: AstraImage,
    url: '#',
    tags: [],
  },
  {
    title: 'Amazon Clone',
    description: 'Amazon market place Clone built using html, css and javascript.',
    image: AstraImage,
    url: '#',
    tags: [],
  },
  {
    title: 'Weather App',
    description: 'A responsive weather app built using Tailwind CSS.',
    image: AstraImage,
    url: '#',
    tags: [],
  },
  {
    title: 'AI resume Analyzer',
    description: '',
    image: AstraImage,
    url: '#',
    tags: [],
  }
];

export default function WorkSection({ projects = defaultProjects }) {




  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(3);
    } else {
      setVisibleCount(4);
    }
  }, []);
  const visibleProjects = projects.slice(0, visibleCount);

  function handleViewMore(count) {

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
            <motion.div
              key={idx}
              className="relative h-[22rem] flex flex-col rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/5 group border border-transparent hover:border-primary"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full h-48 bg-gray-800 overflow-hidden shrink-0">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white">
                  {proj.title}
                </h3>
                <p className="mt-2 text-sm text-white/50 line-clamp-2">
                  {proj.description}
                </p>
                {/* Empty Tags Placeholder */}
                {proj.tags && proj.tags.length > 0 && (
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-1 bg-white/10 text-xs text-white rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-sm z-10">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-white hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={proj.url} // You can update this to an actual GitHub URL in your data later
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {
        visibleCount <= 4 ? <button onClick={() => { handleViewMore(projects.length) }} className="mx-auto block bg-primary text-white mt-4 px-6 py-2 rounded-lg bg-blue-600 cursor-pointer hover:scale-105">
          View More
        </button> : <button onClick={() => { handleViewMore(3) }} className="mx-auto block bg-primary text-white px-6 py-2 rounded-lg mt-4 bg-red-600 cursor-pointer hover:scale-105">
          View Less
        </button>
      }
    </section>
  );
}