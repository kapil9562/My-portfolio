import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import './index.css'
import FluidCursor from './utils/FluidCursor'
import Journey from './components/Journey/Journey'
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useEffect, useState } from 'react'
import { ReactLenis } from "lenis/react";

function App() {

  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    const introTimer = setTimeout(() => {
      setShowIntro(false); // start logo move animation
    }, 1500);

    const contentTimer = setTimeout(() => {
      setShowContent(true); // render rest of website
    }, 1400); // wait for animation to finish

    return () => {
      clearTimeout(introTimer);
      clearTimeout(contentTimer);
    };

  }, []);


  const nameLeft = ["K", "A", "P", "I", "L"];
  const nameRight = ["A", "D", "H", "I", "K", "A", "R", "I"];

  // Variants for letters
  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  // Variant for parent to stagger children
  const parentVariant = {
    visible: { transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  return (
    <LayoutGroup id="layout">
      <FluidCursor />
      <ReactLenis
        options={{
          duration: 2.5,
          smoothWheel: true,
          anchors: true,
        }}
        className='h-dvh overflow-y-auto overflow-x-hidden relative custom-scroll'
      >
        <AnimatePresence >
          {showIntro && (
            <motion.div
              className="fixed inset-0 bg-black flex items-center justify-center px-4 md:px-70 z-999"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1, backgroundColor: "transparent" }}
            >

              {/* Center Logo */}
              <div className='justify-center items-center flex relative'>

                {/* Left letters */}
                <motion.div
                  className="flex flex-row gap-2 sm:gap-4 justify-center md:items-center items-end absolute lg:-left-80 md:-left-70 -top-40 md:top-1/12 "
                  variants={parentVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  duration={1}
                >
                  {nameLeft.map((char, i) => (
                    <motion.h1
                      key={i}
                      className="text-white/50 text-4xl md:text-3xl lg:text-4xl font-normal font-[Outfit]"
                      variants={letterVariant}
                    >
                      {char}
                    </motion.h1>
                  ))}
                </motion.div>

                {/* Image */}
                <motion.img
                  layout
                  layoutId="logo"
                  src="/KA.png"
                  className="w-13 h-13 object-contain will-change-transform transform-gpu"
                  initial={{ scale: 5 }}
                />

                {/* Right letters */}
                <motion.div
                  className="flex flex-row gap-1 h-full sm:gap-2 md:gap-4 justify-center items-center absolute lg:-right-100 md:-right-90 -bottom-40 md:bottom-1/12"
                  variants={parentVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  duration={1}
                >
                  {nameRight.map((char, i) => (
                    <motion.h1
                      key={i}
                      className="text-white/50 text-4xl md:text-3xl lg:text-4xl font-normal font-[Outfit]"
                      variants={letterVariant}
                    >
                      {char}
                    </motion.h1>
                  ))}
                </motion.div>

              </div>


            </motion.div>
          )}
        </AnimatePresence>
        <Header showIntro={showIntro} showContent={showContent} />
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <main>
              <section id="home" className='scroll-mt-21'>
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
            </main>

            <Footer showContent={showContent} />
          </motion.div>
        )}
      </ReactLenis>
    </LayoutGroup>
  )
}

export default App
