import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, Mail, MessageCircle } from 'lucide-react'
import { Input, Textarea } from '@/components/ui/Input'
import type { ContactForm } from '@/types'

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'aamirdvem@gmail.com', href: 'mailto:aamirdvem@gmail.com' },
  { icon: MessageCircle, label: 'Telegram', value: '@aamirdv', href: 'https://t.me/aamirdv' },
  { icon: GithubIcon, label: 'GitHub', value: 'aamirdv', href: 'https://github.com/aamirdv' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({ mode: 'onBlur' })

  const onSubmit = async (data: ContactForm) => {
    try {
      await fetch('https://formspree.io/f/mkolpplb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
    } finally {
      setSubmitted(true)
      reset()
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="relative min-h-dvh py-32 md:py-40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary rounded-full mb-4" />
          <p className="text-text-secondary max-w-lg mb-12">
            Have a project in mind? Let&apos;s build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-4xl">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">{item.label}</p>
                  <p className="font-medium text-text group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted && (
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <Input
                id="name"
                label="Name"
                placeholder="Your name"
                error={errors.name?.message}
                {...register('name', { required: 'Name is required' })}
              />
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                error={errors.email?.message}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
            </div>

            <Input
              id="subject"
              label="Subject"
              placeholder="Project Collaboration"
              error={errors.subject?.message}
              {...register('subject', { required: 'Subject is required' })}
            />

            <Textarea
              id="message"
              label="Message"
              placeholder="Tell me about your project..."
              error={errors.message?.message}
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-primary to-secondary text-white text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <Send size={15} />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
