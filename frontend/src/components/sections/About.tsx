import { motion } from 'framer-motion'
import { Code2, Server, Database, Brain } from 'lucide-react'

const highlights = [
  { icon: Code2, title: 'Frontend', description: 'React, Next.js, HTML, CSS, JS' },
  { icon: Server, title: 'Backend', description: 'Python, Flask, Django' },
  { icon: Database, title: 'Database', description: 'PostgreSQL, SQLite' },
  { icon: Brain, title: 'AI & ML', description: 'Learning how it works under the hood' },
]

export function About() {
  return (
    <section id="about" className="relative min-h-dvh py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              I mostly build for the web — React and Next.js on the frontend,
              Python (Flask or Django) whenever there&apos;s a backend involved.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Lately I&apos;ve also been spending some of my time learning how
              AI and machine learning actually work under the hood, beyond just
              using pre-built tools.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-card border border-border hover:border-border-light transition-all duration-300"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-primary" />
                </div>
                <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                <p className="text-sm text-text-secondary">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
