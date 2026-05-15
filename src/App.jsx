import { useState } from "react"
import CursorComponent from "./Components/CursorComponent.jsx"
import Home from "./Components/Home.jsx"
import Navbar from './Components/Navbar.jsx'
import GreetingsAnimation from './Components/GreetingsAnimation.jsx'
import About from './Components/About.jsx'
import Education from './Components/Education.jsx'
import Skills from "./Components/SkillsAndTools.jsx"
import WorkSection from "./Components/WorkSection.jsx"
import ContactPage from "./Components/ContactPage.jsx"
import Footer from './Components/Footer.jsx'

function App() {
  const [complete, setcomplete] = useState(false);

  function onComplete() {
    setcomplete(true);
  }

  return (
    <div className="min-h-screen bg-black">
      <GreetingsAnimation onComplete={onComplete} />

      {
        complete && (
          <>
            <Navbar />
            <Home />
            <CursorComponent />
            <About />
            <Education />
            <Skills />
            <WorkSection />
            <ContactPage />
            <Footer />
          </>
        )
      }
    </div>
  )
}

export default App
