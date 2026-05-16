import React, { useState, Suspense, lazy } from "react"
import CursorComponent from "./Components/CursorComponent.jsx"
import Home from "./Components/Home.jsx"
import Navbar from './Components/Navbar.jsx'
import GreetingsAnimation from './Components/GreetingsAnimation.jsx'

// Lazy load components below the fold
const About = lazy(() => import('./Components/About.jsx'));
const Education = lazy(() => import('./Components/Education.jsx'));
const Skills = lazy(() => import("./Components/SkillsAndTools.jsx"));
const WorkSection = lazy(() => import("./Components/WorkSection.jsx"));
const ContactPage = lazy(() => import("./Components/ContactPage.jsx"));
const Footer = lazy(() => import('./Components/Footer.jsx'));

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
          <Suspense fallback={<div className="min-h-screen bg-black" />}>
            <Navbar />
            <Home />
            <CursorComponent />
            <About />
            <Education />
            <Skills />
            <WorkSection />
            <ContactPage />
            <Footer />
          </Suspense>
        )
      }
    </div>
  )
}

export default App
