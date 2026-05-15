import ParticlesBackground from "./CanvasComponent.jsx"
import TypeWriter from './TypeWriter.jsx'
import AvatorIcon from '../assets/avator.png'
import { motion } from 'framer-motion'

function Home() {
    return (
        <section className='w-full min-h-screen relative overflow-hidden bg-black flex items-center pt-24 pb-12 sm:pt-32 sm:pb-20' id="home">
            
            {/* Background Glows */}
            <div className='absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full animate-pulse-soft pointer-events-none'></div>
            <div className='absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full animate-pulse-soft pointer-events-none' style={{ animationDelay: '2s' }}></div>

            {/* Particles Layer */}
            <div className="absolute inset-0 z-0 opacity-40">
                <ParticlesBackground />
            </div>

            <div className='max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center'>
                    
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='flex flex-col gap-4 sm:gap-6 text-center lg:text-left'
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full self-center lg:self-start mb-2 sm:mb-4">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Open for opportunities</span>
                        </div>
                        
                        <div className="w-full">
                            <TypeWriter />
                        </div>
                    </motion.div>

                    {/* Right Content - Avatar Section */}
                    <div className='relative hidden lg:flex justify-center items-center'>
                        {/* Interactive Rings */}
                        <div className="absolute w-[400px] xl:w-[500px] h-[400px] xl:h-[500px] border border-primary/10 rounded-full animate-spin-slow"></div>
                        <div className="absolute w-[350px] xl:w-[450px] h-[350px] xl:h-[450px] border border-dashed border-primary/5 rounded-full animate-spin-slow [animation-direction:reverse]"></div>
                        <div className="absolute w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse-soft"></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 w-full h-full flex justify-center items-center"
                        >
                            <img 
                                src={AvatorIcon} 
                                alt="Avatar" 
                                className="object-contain w-[70%] xl:w-[80%] h-auto drop-shadow-[0_0_80px_rgba(0,180,216,0.25)]" 
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 opacity-30"
            >
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-bold text-white">Scroll</span>
                <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </motion.div>
        </section>
    )
}

export default Home
