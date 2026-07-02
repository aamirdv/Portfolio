import { motion } from 'framer-motion'
import { Code2, Server, Terminal } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    category: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML / CSS'],
  },
  {
    icon: Server,
    category: 'Backend',
    skills: ['Python', 'Django', 'Flask'],
  },
  {
    icon: Terminal,
    category: 'Tools & More',
    skills: ['Git', 'PostgreSQL', 'Linux'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative min-h-dvh py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="section-container w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary rounded-full mb-4" />
          <p className="text-text-secondary max-w-lg mb-12">
            Technologies and tools I work with regularly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
            >
              <div className="p-8 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <group.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text">{group.category}</h3>
                </div>
              </div>
              <div className="p-8 pt-6 flex-1 flex items-start">
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.08 }}
                      className="px-4 py-2 text-sm rounded-xl bg-primary/8 text-text-secondary border border-border hover:bg-primary/15 hover:text-text hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
