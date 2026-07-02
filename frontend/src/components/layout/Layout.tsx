import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  dark: boolean
  toggleTheme: () => void
  children: React.ReactNode
}

export function Layout({ dark, toggleTheme, children }: LayoutProps) {
  return (
    <>
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
