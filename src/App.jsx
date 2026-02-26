import { useState } from "react"
import CursorComponent from "./Components/CursorComponent.jsx"
import Home from "./Components/Home.jsx"
import Navbar from './components/navbar.jsx'
import GreetingsAnimation from './Components/GreetingsAnimation.jsx'
import About from './Components/About.jsx'
import Skills from "./Components/Skills and Tools.jsx"
import WorkSection from "./Components/WorkSection.jsx"
import ContactPage from "./Components/ContactPage.jsx"
import Footer from './Components/Footer.jsx'


function App() {
  const [complete,setcomplete]=useState(true);
  
  function onComplete(){
    setcomplete(true);
  }

  return (
    <div className="h-screen">
      {/* <GreetingsAnimation onComplete={onComplete}/> */}
      <Home/>
      
      {
        complete && (
          <>
            <CursorComponent />
            <Navbar/>
            <About/>
            <Skills/>
            <WorkSection/>
            <ContactPage/>
            <Footer/>
          </>
        )
      }
      

      
    </div>
  )
}

export default App
