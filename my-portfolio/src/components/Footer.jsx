import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative mt-2 bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 via-cyan-400 to-purple-500" />

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">

        {/* Name */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
          NF.Dev
        </h3>

        {/* Social Icons */}
        <div className="flex gap-8 text-2xl text-gray-400">

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/nfeliberti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/nicholas-feliberti-6904383a5/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:nf8091@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </motion.a>

        </div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Nicholas Feliberti. Built with React & Tailwind.
        </p>

      </div>
    </footer>
  )
}