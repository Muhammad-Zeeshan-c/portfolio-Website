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
