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

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const defaultProjects = [
  {
    title: 'Crypto App',
    description: 'A responsive Crypto Screening powered by coinGecko to monitor crypto market in real time.',
    image: CryptoImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Crypto-Screener.git',
    demoUrl: 'https://cryptometric.vercel.app/',
    tags: ['React', 'TailwindCSS', 'CoinGecko Api'],
    status: 'complete'
  },
  {
    title: 'Portfolio website',
    description: 'My portfolio website to showcase my skills and projects.',
    image: PortfolioImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/portfolio-Website.git',
    demoUrl: 'https://zeeshanportfolio-website.vercel.app/',
    tags: ['React', 'TailwindCSS', 'Framer motion'],
    status: 'complete'
  },
  {
    title: 'Pixels',
    description: 'An image explorer website powered by unsplash to explore images in high quality.',
    image: PixelsImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Pixels.git',
    demoUrl: 'https://pixels-clone.vercel.app/',
    tags: ['React', 'TailwindCSS', 'Unsplash Api'],
    status: 'complete'
  },
  {
    title: 'AL Badr 313 Resturant Website',
    description: 'A resturant Al Badr 313 website giving royal mughal style vibes, featuring menu,contact form and contact information.',
    image: AlBadrImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Al-badr-313.git',
    demoUrl: 'https://albadr313.vercel.app/',
    tags: ['React', 'Tailwindcss', 'lucide-react'],
    status: 'complete'
  },
  {
    title: 'Johny Jugnu Resturant Website',
    description: 'A sleek, moren resturant website for Johny Jugnu Resturant, featuring menu,contact form and contact information.',
    image: JohnyJugnuImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Resturant.git',
    demoUrl: 'https://johnyjugnu-resturant.vercel.app/',
    tags: ['React', 'Tailwindcss', 'lucide-react'],
    status: 'complete'
  },
  {
    title: 'Weather App',
    description: 'A responsive weather powered by open weather api to monitor real time weather conditions.',
    image: AstraImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/AccuWeather-App.git',
    demoUrl: 'accu-weather-app-x',
    tags: ['JavaScript', 'Open weather Api'],
    status: 'complete'
  },
  {
    title: 'Netflix Clone',
    description: 'Netflix Clone built using html, css and javascript.',
    image: NetflixImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Netflix_Clone.git',
    demoUrl: 'https://netflixpk-clone.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'complete'
  },
  {
    title: 'Amazon Clone',
    description: 'Frontend clone of Amazon market place.',
    image: AmazonImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Amazon-Clone.git',
    demoUrl: 'https://amazonpk-clone.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: 'complete'
  },
  {
    title: 'Currency Covnerter',
    description: 'Sleek modern currency converter built using public API to monitor real time currency exchange rates.',
    image: ConverterImage,
    gitUrl: 'https://github.com/Muhammad-Zeeshan-c/Currency-Converter',
    demoUrl: 'https://currency-converter-neon-beta.vercel.app/',
    tags: ['JavaScript', 'Currency Converter API'],
    status: 'complete'
  },
  {
    title: 'AI resume Analyzer',
    description: 'An intelligent platform to analyze and optimize resumes using AI algorithms.',
    image: AstraImage,
    gitUrl: '#',
    tags: ['OpenAI Api', 'Python', 'React', 'Express.js', 'Tailwind'],
    status: 'pending'
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

        <div className='w-full flex flex-col items-center mb-12 relative'>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-primary/20 blur-[80px] -z-10 rounded-full animate-pulse"></div>
          <motion.h2 className="text-4xl sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-gradient-x"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            Featured Works
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 rounded-full"></div>
        </div>

        <div className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={`relative min-h[26rem] h-[28rem] flex flex-col rounded-2xl overflow-hidden transition-all duration-500 bg-[#0d0d0d] group border border-white/5 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,180,216,0.2)] ${proj.status === 'pending' ? 'hover:scale-[1.03]' : ''}`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Ribbon for Pending projects  */}
              {proj.status === 'pending' && (
                <div className="absolute top-0 right-0 z-40 overflow-hidden w-32 h-32 pointer-events-none">
                  <div className="absolute top-6 -right-8 w-[170px] py-1 bg-primary text-black text-[10px] font-black uppercase tracking-widest text-center rotate-45 shadow-lg border-y border-black/10">
                    In Progress
                  </div>
                </div>
              )}
              {/* Image Container for project*/}
              <div className="w-full h-52 bg-[#121212] overflow-hidden shrink-0 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] to-transparent opacity-60"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="mt-3 text-sm text-white/60 line-clamp-2 leading-relaxed h-10">
                  {proj.description || "A high-performance digital solution crafted with modern precision and aesthetic excellence."}
                </p>

                {/* Tech Tags of project if i add */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {(proj.tags && proj.tags.length > 0 ? proj.tags : ['Modern Tech', 'Web App']).map((tag, tIdx) => (
                    <span key={tIdx} className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-medium text-white/80 rounded-full tracking-wider uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse"></span>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              {proj.status === 'complete' && (
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col items-center justify-center gap-4 z-30">
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-8 py-3 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-lg hover:bg-white transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 shadow-[0_10px_20px_rgba(0,180,216,0.3)]"
                  >
                    Live Demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href={proj.gitUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-black uppercase tracking-widest text-xs rounded-lg bg-white/5 backdrop-blur-md hover:bg-primary hover:text-black hover:border-primary transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 delay-100"
                  >
                    <FaGithub className="text-base" /> Show Code
                  </a>
                </div>
              )}
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