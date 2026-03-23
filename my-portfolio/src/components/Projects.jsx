import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import Reveal from "./Reveal"

const projects = [
  {
  title: "Sanamente – Mental Health Platform",
  description:
    "Full-stack web application developed for a mental health service, featuring bilingual support (English/Spanish), appointment scheduling, and dynamic user interfaces.",
  tech: ["React", "Tailwind", "JavaScript", "PostgreSQL"],
  github: null,
  demo: null,
  images: [
    "/projects/sanamente/s1.png",
    "/projects/sanamente/s2.png",
    "/projects/sanamente/s3.png",
    "/projects/sanamente/s4.png",
    "/projects/sanamente/s5.png",
    "/projects/sanamente/s6.png"
    
  ],

  badges: ["Client Project", "Full Stack", "In Progress"],

 },
  {
    title: "Data Visualization Dashboard",
    description:
      "Interactive dashboard displaying structured datasets with dynamic graph rendering and real-time data analysis.",
    tech: ["Python", "Data Visualization"],
    github: "https://github.com/nfeliberti/data-dashboard",
    demo: null,
    images: [
      "/projects/data-dashboard/dv1.png",
      "/projects/data-dashboard/dv2.png",
      "/projects/data-dashboard/dv3.png",
      "/projects/data-dashboard/dv4.png"
    ],
    badges:["Juypter Notebook", "Data Analysis"]
  },
  {
    title: "SidekickFinance Website",
    description:
      "Frontend development contribution to a financial platform focused on responsive UI design and performance optimization to improve UX.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: null,
    demo: "https://sidekick.finance",
    images: [
      "/projects/sidekick/sk1.png",
      "/projects/sidekick/sk2.png"
    ],
    badges: ["Live"]
  },
  {
    title: "Job Application Tracker",
    description:
      "Job application tracker that helps organize and manage applications through stages like Applied, Interview, Offer, and Rejected.",
    images: ["/projects/job-tracker/JT1.png"],
    tech: ["React", "Tailwind", "LocalStorage"],
    github: "https://github.com/nfeliberti/job-tracker",
    demo: "https://job-tracker-weld-six.vercel.app/",
    badges:["Demo Only"]
  }
]

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="group relative rounded-2xl"
    >
      {/* Glow background */}
      <div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r 
                   from-purple-500/40 via-cyan-400/30 to-purple-500/40 
                   opacity-0 blur-lg transition duration-500 
                   group-hover:opacity-100"
      />

      {/* Card */}
      <div
        className="relative bg-slate-900/80 backdrop-blur-md 
                   border border-white/10 rounded-2xl p-6 md:p-8
                   shadow-xl transition duration-300
                   group-hover:border-purple-400/30"
      >
        {/* Image Slider */}
        {project.images && (
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <img
              src={project.images[currentImage]}
              alt={project.title}
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-[1.02]"
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                             bg-black/60 hover:bg-black/80 text-white 
                             px-3 py-1 rounded-full transition"
                >
                  ◀
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 
                             bg-black/60 hover:bg-black/80 text-white 
                             px-3 py-1 rounded-full transition"
                >
                  ▶
                </button>
              </>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl font-semibold mb-4 text-white">
          {project.title}
        </h3>
        {/* Badges */}
        {project.badges && (
          <div className="flex gap-2 mb-3 flex-wrap">
            {project.badges.map((badge, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-gray-400 mb-6 leading-relaxed">
          {project.description}
        </p>
      

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((techItem, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full
                         bg-white/5 border border-white/10
                         text-purple-300"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                         bg-slate-800 hover:bg-slate-700 text-white
                         border border-white/10 transition"
            >
              <FaGithub />
              Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm
                         bg-gradient-to-r from-purple-600 to-cyan-500
                         hover:opacity-90 text-white transition"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <Reveal>
      <section
        id="projects"
        className="py-16 flex flex-col items-center"
      >
        <h2
          className="text-4xl font-bold mb-16 bg-gradient-to-r
                     from-purple-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl px-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>
    </Reveal>
  )
}