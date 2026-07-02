import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const GITHUB_USER = 'aamirdv'

async function main() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=10`,
  )
  if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
  const repos = await res.json()

  const projects = repos
    .filter((r) => r.name !== GITHUB_USER && !r.fork)
    .map((r) => ({
      id: r.id,
      title: r.name,
      description: r.description || '',
      long_description: '',
      technologies: [r.language, ...r.topics].filter(Boolean),
      image: '',
      live_url: r.homepage || '',
      github_url: r.html_url,
      featured: !r.fork,
      created_at: r.created_at,
    }))
    .slice(0, 3)

  const content =
    '// generated at build time — do not edit\n' +
    `export const projectsData = ${JSON.stringify(projects, null, 2)}\n`

  fs.writeFileSync(path.join(__dirname, '../src/lib/projects-data.ts'), content)
}

main().catch((err) => {
  process.exit(1)
})
