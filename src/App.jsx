import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from  './components/projects'
import Contact from './components/contact'
import  Footer from './components/footer'
import '../src/App.css'
const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 z-0 min-h-screen w-full'>
        <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <div className='container mx-auto px-8 relative z-10'>
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
