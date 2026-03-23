import Reveal from "./Reveal"

export default function Contact() {
  return (
    <Reveal>
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">
        Contact
      </h2>

      <p className="text-gray-400 mb-8 max-w-xl">
        I am open to freelance opportunities, internships, and collaborative projects.
      </p>

      <a
        href="mailto:nf8091@gmail.com"
        className="px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-500 transition"
      >
        Send Email
      </a>

    </section>
    </Reveal>
  )
}