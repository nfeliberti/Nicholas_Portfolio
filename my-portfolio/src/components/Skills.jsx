import { motion } from "framer-motion"

import { FaReact, FaPython, FaJava, FaGitAlt } from "react-icons/fa"
import { SiCplusplus, SiJavascript, SiSolidity, SiTailwindcss, SiPostgresql } from "react-icons/si"
import Reveal from "./Reveal"

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C++", icon: <SiCplusplus />},
  { name: "Solidity", icon: <SiSolidity/>},
  { name: "Git", icon: <FaGitAlt /> }
]

export default function Skills() {
  return (
    <Reveal>
    <section
      id="skills"
      className="py-2 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
        Technologies I Work With
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl px-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center justify-center
                       bg-slate-900/70 backdrop-blur-md
                       border border-purple-500/20
                       rounded-2xl p-8
                       hover:shadow-purple-500/40 hover:shadow-xl
                       transition duration-300"
          >
            <div className="text-4xl mb-4 text-purple-400">
              {skill.icon}
            </div>

            <p className="text-lg font-medium text-white">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    </Reveal>
  )
}