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
      <div className='h-dvh'>
        <Header />
        <main>
          <section id="home" >
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="journey">
            <Journey />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="experiences">
            <Experiences />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
