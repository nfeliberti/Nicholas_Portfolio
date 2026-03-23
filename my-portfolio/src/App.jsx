import { useEffect } from "react"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import SectionWrapper from "./components/SectionWrapper"
import Footer from "./components/Footer"

function App() {

  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className = "cursor-glow"
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
    }

    document.addEventListener("mousemove", moveCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      cursor.remove()
    }
  }, [])
  return (
  <div className="bg-black text-white min-h-screen overflow-x-hidden relative z-10">

    <div className="parallax-bg"></div>
    <div className="grid-glow"></div>

    <Navbar />
    <Hero />

    <SectionWrapper>
      <About />
    </SectionWrapper>

    <SectionWrapper>
      <Skills />
    </SectionWrapper>

    <SectionWrapper>
      <Projects />
    </SectionWrapper>

    <SectionWrapper>
      <Contact />
    </SectionWrapper>
    <Footer />

  </div>
  )
}

export default App