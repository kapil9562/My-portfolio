import { useLocation } from 'react-router-dom'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import './index.css'
import FluidCursor from './utils/FluidCursor'
import Journey from './components/Journey/Journey'


function App() {

  return (
    <>
      <FluidCursor />
      <div className='h-dvh custom-scroll overflow-x-hidden scroll-smooth'>
        <Header />
        <main>
          <section id="home" className='scroll-mt-21' >
            <Home />
          </section>

          <section id="about" className='scroll-mt-21'>
            <About />
          </section>

          <section id="journey" className='scroll-mt-21'>
            <Journey />
          </section>

          <section id="skills" className='scroll-mt-21'>
            <Skills />
          </section>

          <section id="projects" className='scroll-mt-21'>
            <Projects />
          </section>

          <section id="experiences" className='scroll-mt-21'>
            <Experiences />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
