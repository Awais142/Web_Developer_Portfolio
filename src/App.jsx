import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative overflow-x-hidden">
      {loading ? (
        <Loader />
      ) : (
        <main className="relative z-0 bg-primary">
          <div className="bg-primary">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
          </div>
        </main>
      )}
    </div>
  )
}

export default App
