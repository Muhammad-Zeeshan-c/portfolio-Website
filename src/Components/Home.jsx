import ParticlesBackground from "./CanvasComponent.jsx"
import TypeWriter from './TypeWriter.jsx'
import AvatorIcon from '../assets/avator.png'
import { motion } from 'framer-motion'

function Home() {
    return (
        <section className=' w-full min-h-[500px] h-screen relative inset-0 overflow-hidden bg-black'
            id="home">

            {/* Glow effect Top Left */}
            <div className='absolute -top-1/4 -left-1/4 w-1/2 xs:w-1/3 h-1/2 xs:h-1/3 blur-[100px] opacity-40 z-0 pointer-events-none'>
                <div className='bg-gradient-to-r from-primary to-primary animate-pulse w-full h-full rounded-full'></div>
            </div>

            {/* Glow effect Bottom Right */}
            <div className='absolute -bottom-1/4 -right-1/4 w-1/2 xs:w-1/3 h-1/2 xs:h-1/3 blur-[100px] opacity-40 z-0 pointer-events-none'>
                <div className='bg-gradient-to-r from-primary to-primary animate-pulse w-full h-full rounded-full'></div>
            </div>

            <div className="absolute inset-0 max-w-6xl mx-auto z-0 pointer-events-none">
                <ParticlesBackground />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center w-[90%] mx-auto h-full max-w-6xl pt-20 lg:pt-0'>
                <div className='relative z-10 w-full flex items-center justify-center lg:justify-start'>
                    <TypeWriter />
                </div>

                <div className='relative overflow-hidden w-full h-full hidden lg:flex justify-center items-center'>
                    {/* Premium Avatar Ornament */}
                    <div className="absolute w-[450px] h-[450px] border border-primary/20 rounded-full animate-spin-slow"></div>
                    <div className="absolute w-[400px] h-[400px] border-2 border-dashed border-primary/10 rounded-full animate-spin-slow [animation-direction:reverse]"></div>
                    <div className="absolute w-64 h-64 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative z-10 w-full h-full flex justify-center items-center"
                    >
                        <img src={AvatorIcon} alt="Avatar" className="object-contain w-[85%] h-[85%] drop-shadow-[0_0_50px_rgba(0,180,216,0.2)]" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
            </motion.div>
        </section>
    )
}

export default Home