import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from '@/hooks/useTheme'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'

const basename = import.meta.env.DEV ? '' : '/Portfolio'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <BrowserRouter basename={basename}>
      <Layout dark={dark} toggleTheme={toggle}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
