import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="section-container relative z-10 text-center pt-20 pb-32">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold             tracking-tight leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">Amir</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-text-secondary font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-Stack Web Developer
        </motion.p>

        <motion.p
          className="max-w-lg mx-auto text-text-secondary text-base leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          I build for the web — React &amp; Next.js on the frontend, Python
          (Flask or Django) on the backend.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text-secondary text-sm font-medium hover:text-text hover:border-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1 text-text-muted hover:text-text transition-colors"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest">
              Scroll
            </span>
            <ArrowDown size={14} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
