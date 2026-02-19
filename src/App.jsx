import ParticlesBackground from "./Components/CanvasComponent.jsx"
import CursorComponent from "./Components/CursorComponent.jsx"
import Home from "./Components/Home.jsx"
import Navbar from './components/navbar.jsx'
import GreetingsAnimation from './Components/GreetingsAnimation.jsx'
import { useState } from "react"



function App() {
  const [complete,setcomplete]=useState(true);
  
  function onComplete(){
    setcomplete(true);
  }

  return (
    <>
      <GreetingsAnimation onComplete={onComplete}/>
      <ParticlesBackground />
      {
        complete && (
          <CursorComponent />
        )
      }
      <Navbar/>
      <Home/>
      
    </>
  )
}

export default App
