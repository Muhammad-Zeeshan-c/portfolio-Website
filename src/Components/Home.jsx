import ParticlesBackground from "./CanvasComponent.jsx"
import TypeWriter from './TypeWriter.jsx'
import AvatorIcon from '../assets/avator.png'

function Home() {
    return (
        <section className=' w-full min-h-[500px] h-screen relative inset-0 overflow-hidden'
            id="home">

            {/* Glow effect Top Left */}
            <div className='absolute -top-1/4 -left-1/4 w-1/2 xs:w-1/3 h-1/2 xs:h-1/3 blur-[100px] opacity-40 z-0 pointer-events-none'>
                <div className='bg-gradient-to-r from-primary to-primary animate-pulse w-full h-full rounded-full'></div>
            </div>

            {/* Glow effect Bottom Right */}
            <div className='absolute -bottom-1/4 -right-1/4 w-1/2 xs:w-1/3 h-1/2 xs:h-1/3 blur-[100px] opacity-40 z-0 pointer-events-none'>
                <div className='bg-gradient-to-r from-primary to-primary animate-pulse w-full h-full rounded-full'></div>
            </div>

            <div className="absolute w-full h-full -z-10 pointer-events-none">
                <ParticlesBackground />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-start justify-end w-[90%] mx-auto h-full max-w-6xl'>
                <div className='relative z-0 w-full h-full justify-center'>
                    <TypeWriter />

                </div>

                <div className='relative overflow-hidden w-full h-full hidden lg:flex justify-center items-center '>
                    <img src={AvatorIcon} alt="Avatar" className="object-contain w-full h-[80%] z-5 " />
                    <div className='absolute bottom-0 w-1/3 h-2/3 z-0 bg-gradient-to-r from-primary to-primary blur-3xl animate-pulse rounded-full opacity-10'></div>
                </div>
            </div>
        </section>
    )
}

export default Home