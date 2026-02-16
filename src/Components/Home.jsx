import React from 'react'
import ParticlesBackground from "./CanvasComponent.jsx";
import TypeWriter from "./TypeWriter.jsx"


function Home() {
  return (
    <section className='w-full h-screen relative'>
        <ParticlesBackground className='absolute inset-0'/>
        <TypeWriter/>
    </section>
  )
}

export default Home