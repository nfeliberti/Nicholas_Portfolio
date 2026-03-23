import { motion } from "framer-motion"
import Reveal from "./Reveal"
const About = () => {
  return (
    <Reveal>
    <section
      id="about"
      className="min-h-screen py-4 flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          About Me
        </h2>

        <p className="max-w-3xl text-gray-400 text-lg leading-relaxed">
          Computer Science student and frontend developer specializing in building 
          modern, responsive, and performance-driven web applications. 
          Experienced in developing interactive user interfaces and 
          real-world projects using React, Tailwind, and Python. Passionate about 
          solving complex problems and turning ideas into intuitive digital experiences.
        </p>
      </motion.div>
    </section>
    </Reveal>
  )
}

export default About