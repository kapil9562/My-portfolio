import { useState } from 'react'
import { motion } from "framer-motion";
import { Container, fadeIn } from "/src/animation";
import projects from '/src/data/data.js';
import { FaRocket } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { springUp } from '../../animation';

function Projects() {

  const [rotate, setRotate] = useState({});

  const openProject = (link) => {
    if (!link) return;
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
      window.location.href = link;
    }
  };

  const toggleRotate = (idx) => {
    setRotate((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <>
      <div className='transform-gpu md:px-5 xl:px-20 py-15'>

        {/* Heading Section */}
        <div className='justify-self-center items-center flex flex-col space-y-4 px-10'>

          <motion.span
            variants={springUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-base tracking-wider uppercase bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bricolage"
          >
            my projects
          </motion.span>
          <motion.h2
            className="md:text-6xl sm:text-4xl text-3xl w-full flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform pb-2 underline-offset-4 decoration-2 font-bricolage relative gap-2 mt-2"
            variants={springUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-[#f1f1f5]">Things I've</span> Built
            <div className="absolute top-full bg-linear-to-r from-pink-500 to-orange-500 h-1 w-15 rounded-r-full rounded-l-full" />
          </motion.h2>

          <motion.p
            className='xl:px-60 text-sm sm:text-[18px] text-center text-[#b3b3b3] font-medium sm:px-10 font-instrumentSans tracking-wide'
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            I design and build modern, responsive web applications that blend creativity with functionality. My goal is to craft seamless user experiences that are fast, intuitive, and visually engaging across all devices.
          </motion.p>

        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-4
               gap-6 md:gap-8 p-5 justify-items-center md:px-20 sm:px-10 transform-gpu will-change-transform perspective-1000"
          variants={Container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >

          {projects.map((project, idx) => (

            <motion.div
              variants={fadeIn}
              key={idx}
              viewport={{ once: true, amount: 0.4 }}
              className={`w-full h-fit bg-transparent transform-style-preserve-3d cursor-pointer ${rotate[idx] ? "rotate-y-180" : "rotate-y-0"} transition-transform duration-700 relative transform-gpu will-change-transform group`}
              onClick={() => openProject(project.live)}
            >

              <div className={`bg-black cursor-pointer p-4 h-full w-full flex flex-col justify-between absolute top-0 left-0 z-10 rounded-2xl transition-all duration-500 -rotate-y-180 ${rotate[idx] ? "opacity-100 visible" : "opacity-0"} invisible`}>

                <div className='space-y-5'>
                  <div className='w-full flex flex-row justify-between items-start'>
                    <FaRocket className='text-orange-700 text-4xl' />
                    <button
                      type="button"
                      aria-label={`Flip ${project.title} card`}
                      title={`Flip ${project.title} card`}
                      className='text-gray-400 hover:text-orange-400 font-medium cursor-pointer'
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRotate(idx);
                      }}>
                      <FaRotate className="text-gray-400 hover:text-orange-400 text-lg active:rotate-180 transition-all duration-500" />
                    </button>
                  </div>

                  <div className="card_title__container space-y-4">
                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-2xl font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bricolage">{project.title}</h3>
                    <div className="relative text-gray-100 text-sm">

                      <p className={`text-[#FFFFFF80] font-medium text-sm font-instrumentSans tracking-wide`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm'>
                  {project.tools.map((tool, i) => (
                    <span className='text-orange-600 font-instrumentSans tracking-wide' key={i}>{tool}</span>
                  ))}
                </div>

                <div className=' absolute right-0 bottom-0 p-4'>
                  <span className='text-[#FFFFFF15] font-semibold text-8xl font-bricolage'>{project.year}</span>
                </div>

              </div>

              <div
                className={`card relative p-0!`}
              >
                <button
                  type="button"
                  aria-label={`Flip ${project.title} card`}
                  title={`Flip ${project.title} card`}
                  className='text-gray-100 hover:text-orange-400 bg-gray-800/60 lg:group-hover:pointer-events-auto lg:pointer-events-none lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-200 p-1 rounded-lg font-medium cursor-pointer absolute top-3 right-3 z-10'
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleRotate(idx);
                  }}>
                  <FaRotate className="text-lg active:rotate-180 transition-transform duration-500" />
                </button>

                {/* rotating border */}
                <div className="card__border">
                </div>

                {/* {img} */}
                <div className='w-full overflow-hidden rounded-t-2xl'>
                  <img
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    src={project.image} alt="Thumbnail" className='h-auto w-full object-cover align-top group-hover:scale-110 transition-transform duration-2000' />
                </div>

                <div className='flex flex-col gap-4 p-4'>
                  {/* content */}
                  <div className="card_title__container space-y-4">
                    <h3 className="md:text-2xl text-xl font-bold text-gray-100 font-bricolage">{project.title}</h3>
                  </div>

                  {/* button */}
                  <button
                    type="button"
                    aria-label={`Explore ${project.title}`}
                    title={`Explore ${project.title}`}
                    className="button border-2 border-pink-400 rounded-l-full rounded-r-full font-semibold flex flex-row justify-center items-center gap-4 font-instrumentSans"
                  >
                    <FaArrowUpRightFromSquare />
                    <span>Explore</span>
                  </button>
                </div>
              </div>
            </motion.div>

          ))}

        </motion.div>

      </div>
    </>
  )
}

export default Projects