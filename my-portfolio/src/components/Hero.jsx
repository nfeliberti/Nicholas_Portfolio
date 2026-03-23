import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import BackgroundParticles from "./BackgroundParticles"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Particle Background */}
      <BackgroundParticles />

      <div className="text-center z-10 px-6">

        {/* Name Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text"
        >
          Nicholas Feliberti
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <TypeAnimation
            sequence={[
              "React Web Developer",
              2000,
              "Data Science | Machine Learning",
              2000,
              "Creative Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl text-gray-400"
          />
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10"
        >
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300"
          >
            View My Work
          </a>
            <a
                 href="/Nicholas Feliberti Resume.pdf"
                download
                className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition duration-300"
            >
                 Download Resume
            </a>
            </div>
        </motion.div>

      </div>
    </section>
  )
}