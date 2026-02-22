import { useState } from "react"
import ParticlesBackground from "./Components/CanvasComponent.jsx"
import CursorComponent from "./Components/CursorComponent.jsx"
import Home from "./Components/Home.jsx"
import Navbar from './components/navbar.jsx'
import GreetingsAnimation from './Components/GreetingsAnimation.jsx'
import About from './Components/About.jsx'
import Skills from "./Components/Skills and Tools.jsx"


function App() {
  const [complete,setcomplete]=useState(false);
  
  function onComplete(){
    setcomplete(true);
  }

  return (
    <div className="h-screen">
      <GreetingsAnimation onComplete={onComplete}/>
      
      {
        complete && (
          <>
            <ParticlesBackground />
            <CursorComponent />
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
          </>
        )
      }
      

      
    </div>
  )
}

export default App
