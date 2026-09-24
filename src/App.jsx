import { useEffect, useRef } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  const cursorGlowRef = useRef(null)

  useEffect(() => {
    const glow = cursorGlowRef.current
    if (!glow || !window.matchMedia('(pointer: fine)').matches) return

    const handleMove = (event) => {
      glow.style.opacity = '1'
      glow.style.left = `${event.clientX}px`
      glow.style.top = `${event.clientY}px`
    }

    const handleLeave = () => {
      glow.style.opacity = '0'
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <>
      <div className="cursor-glow" ref={cursorGlowRef} aria-hidden="true"></div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}