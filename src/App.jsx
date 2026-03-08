import { useLocation } from 'react-router-dom'
import About from './components/About/About'
import Experiences from './components/Experiences/Experiences'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import './index.css'
import { useEffect } from 'react'

function useScrollHash() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
}


function App() {

  useScrollHash();

  return (
    <>
      <div className='h-dvh'>
        <Header />
        <main>
          <section id="home" className="scroll-mt-21 mt-21">
            <Home />
          </section>

          <section id="about" className="scroll-mt-21">
            <About />
          </section>

          <section id="skills" className="scroll-mt-21">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-21">
            <Projects />
          </section>

          <section id="experiences" className="scroll-mt-21">
            <Experiences />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
