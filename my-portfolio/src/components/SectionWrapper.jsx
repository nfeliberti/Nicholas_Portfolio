import { motion } from "framer-motion"

export default function SectionWrapper({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16"
    >
      {children}
    </motion.section>
  )
}