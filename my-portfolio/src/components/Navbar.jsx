import { useState } from "react"

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY > 50)
  })

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300
      ${scrolled ? "bg-black/70 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          NF.dev
        </h1>

        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>

      </div>
    </nav>
  )
}