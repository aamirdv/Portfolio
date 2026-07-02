import { projectsData } from './projects-data'
import type { Project } from '@/types'

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  HTML: '#E34F26',
  CSS: '#1572B6',
  SCSS: '#C6538C',
  Rust: '#DEA584',
  Go: '#00ADD8',
  Java: '#B07219',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Ruby: '#CC342D',
  PHP: '#777BB4',
  C: '#555555',
  'C++': '#F34B7D',
  'C#': '#178600',
  Dart: '#00B4AB',
  Lua: '#000080',
  Shell: '#89E051',
  Dockerfile: '#384D54',
  default: '#6A5AF9',
}

export async function getProjects(): Promise<Project[]> {
  return projectsData as unknown as Project[]
}

function pickGradient(techs: string[]): string[] {
  const colors = techs.map((t) => LANGUAGE_COLORS[t] || LANGUAGE_COLORS.default)
  if (colors.length === 0) return [LANGUAGE_COLORS.default, '#A8C0FF']
  if (colors.length === 1) return [colors[0], '#A8C0FF']
  return [colors[0], colors[colors.length - 1]]
}

export { LANGUAGE_COLORS, pickGradient }
