import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="relative z-0">
      <div className="bg-primary">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App
