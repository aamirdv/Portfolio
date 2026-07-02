export interface Project {
  id: number
  title: string
  description: string
  long_description: string
  technologies: string[]
  image: string
  live_url: string
  github_url: string
  featured: boolean
  created_at: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}
