import ParticlesBackground from "./CanvasComponent.jsx"
import TypeWriter from './TypeWriter.jsx'
import AvatorIcon from '../assets/avator.png'

function Home() {
  return (
    <section className=' w-full h-screen relative inset-0 z-0 overflow-hidden'>
        <div className="absolute w-full h-full -z-50">
            <ParticlesBackground/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-start justify-end w-[90%] mx-auto h-full max-w-[1280px]'>
            <div className='w-full h-full justify-center'>
                <TypeWriter/>
                
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