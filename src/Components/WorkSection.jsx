import React, { useEffect, useState } from 'react';
import AstraImage from '../assets/Astra.png';
import CryptoImage from '../assets/crypto_new.JPG';
import PixelsImage from '../assets/pixels_new.JPG';
import NetflixImage from '../assets/netflix.JPG';
import PortfolioImage from '../assets/portfolio.JPG';
import AmazonImage from '../assets/Amazon.JPG';
import ConverterImage from '../assets/converter_new.JPG';
import JohnyJugnuImage from '../assets/JohnyJugnuImg.JPG';
import AlBadrImage from '../assets/AlbadrImg.JPG';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const defaultProjects = [
  {
    title: 'Crypto Metric',
    description: 'Real-time crypto market monitor powered by CoinGecko API with advanced screening features.',
    image: CryptoImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Crypto-Screener.git',
    demoUrl: 'https://cryptometric.vercel.app/',
    tags: ['React', 'TailwindCSS', 'CoinGecko API'],
    status: 'complete'
  },
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website to showcase my skills and projects with cinematic design.',
    image: PortfolioImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/portfolio-Website.git',
    demoUrl: 'https://zeeshanportfolio-website.vercel.app/',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    status: 'complete'
  },
  {
    title: 'Pixels Explorer',
    description: 'A high-end image discovery platform utilizing the Unsplash API for professional visuals.',
    image: PixelsImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Pixels.git',
    demoUrl: 'https://pixels-clone.vercel.app/',
    tags: ['React', 'TailwindCSS', 'Unsplash API'],
    status: 'complete'
  },
  {
    title: 'Al Badr 313',
    description: 'A royal Mughal-themed restaurant experience featuring interactive menus and reservations.',
    image: AlBadrImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Al-badr-313.git',
    demoUrl: 'https://albadr313.vercel.app/',
    tags: ['React', 'TailwindCSS', 'Lucide'],
    status: 'complete'
  },
  {
    title: 'Johny Jugnu',
    description: 'Modern, sleek digital storefront for a premium fast-food brand with optimized UX.',
    image: JohnyJugnuImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Resturant.git',
    demoUrl: 'https://johnyjugnu-resturant.vercel.app/',
    tags: ['React', 'TailwindCSS', 'Framer Motion'],
    status: 'complete'
  },
  {
    title: 'Netflix Clone',
    description: 'A pixel-perfect cinematic landing page clone of Netflix built with modern precision.',
    image: NetflixImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Netflix_Clone.git',
    demoUrl: 'https://netflixpk-clone.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'complete'
  },
  {
    title: 'Amazon Marketplace',
    description: 'A high-fidelity frontend clone of the Amazon e-commerce platform.',
    image: AmazonImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Amazon-Clone.git',
    demoUrl: 'https://amazonpk-clone.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'complete'
  },
  {
    title: 'Weather Accu',
    description: 'Precision weather monitoring application powered by Open Weather API.',
    image: AstraImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/AccuWeather-App.git',
    demoUrl: 'accu-weather-app-x',
    tags: ['JavaScript', 'Open Weather API'],
    status: 'complete'
  },
  {
    title: 'Currency Pro',
    description: 'Precision currency conversion tool with real-time exchange rates and historical data.',
    image: ConverterImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Currency-Converter',
    demoUrl: 'https://currency-converter-neon-beta.vercel.app/',
    tags: ['JavaScript', 'Exchange API'],
    status: 'complete'
  },
  {
    title: 'AI Resume Lab',
    description: 'Intelligent platform analyzing resumes using advanced AI to optimize career opportunities.',
    image: AstraImage,
    gitUrl: '#',
    tags: ['OpenAI', 'Python', 'Next.js'],
    status: 'pending'
  }
];


export default function WorkSection({ projects = defaultProjects }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <section id="projects" className="w-full bg-black py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none'></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div 
          className='flex flex-col items-center mb-16 text-center'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-primary font-bold text-lg tracking-widest uppercase mb-2'>Portfolio</h2>
          <h1 className='text-4xl md:text-5xl font-black text-white'>Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400'>Works</span></h1>
          <div className="w-20 h-1 bg-primary mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group glass rounded-2xl overflow-hidden glass-hover flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-black/40">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {proj.status === 'pending' && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-white/50 text-sm leading-relaxed flex-grow">
                    {proj.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[9px] font-bold text-white/60 rounded-lg uppercase tracking-tighter group-hover:border-primary/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  {proj.status === 'complete' && (
                    <div className="mt-6 flex items-center gap-4">
                      <a
                        href={proj.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-black text-xs font-black uppercase tracking-widest rounded-lg hover:bg-white transition-all duration-300 shadow-lg shadow-primary/10"
                      >
                        Demo <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                      <a
                        href={proj.gitUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 glass text-white hover:text-primary transition-colors rounded-lg"
                        title="View Code"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View More Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setVisibleCount(visibleCount === projects.length ? 3 : projects.length)}
            className="group relative px-8 py-3 bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 border border-primary/30 group-hover:border-primary transition-colors duration-300 rounded-xl"></div>
            <span className="relative z-10 text-primary font-bold uppercase tracking-widest text-xs">
              {visibleCount === projects.length ? 'Show Less' : 'View All Works'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}