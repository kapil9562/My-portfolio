import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, Container, fadeIn } from "/src/animation";
import projects from '/src/data/data.js';
import { FaRocket } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

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
      <div className='transform-gpu min-h-dvh'>

        {/* Heading Section */}
        <div className='justify-self-center items-center flex flex-col space-y-4 px-10'>

          <motion.h1
            className='md:text-6xl text-4xl underline w-fit flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform'
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            My Projects
          </motion.h1>

          <motion.p
            className='xl:px-60 text-sm sm:text-[18px] text-center text-[#b3b3b3] font-semibold sm:px-10'
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
          >
            I design and build modern, responsive web applications that blend creativity with functionality. My goal is to craft seamless user experiences that are fast, intuitive, and visually engaging across all devices.
          </motion.p>

        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
               gap-4 md:gap-8 p-5 justify-items-center md:px-20 sm:px-10 transform-gpu will-change-transform perspective-1000"
          variants={Container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >

          {projects.map((project, idx) => (

            <motion.div
              variants={fadeIn}
              key={idx}
              viewport={{ once: false, amount: 0.4 }}
              className={`w-full h-fit bg-transparent transform-style-preserve-3d cursor-pointer ${rotate[idx] ? "rotate-y-180" : "rotate-y-0"} transition-transform duration-700 relative transform-gpu will-change-transform`}
              onClick={() => openProject(project.live)}
            >

              <div className={`bg-black cursor-pointer p-4 h-full w-full flex flex-col justify-between absolute top-0 left-0 z-10 rounded-2xl transition-all duration-500 -rotate-y-180 ${rotate[idx] ? "opacity-100 visible" : "opacity-0"} invisible`}>

                <div className='space-y-5'>
                  <div className='w-full flex flex-row justify-between items-start'>
                    <FaRocket className='text-orange-700 text-4xl'/>
                    <button
                      className='text-gray-400 hover:text-orange-400 font-medium cursor-pointer'
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRotate(idx);
                      }}>
                      <FaRotate className="text-gray-400 hover:text-orange-400 text-lg active:rotate-180 transition-all duration-500"/>
                    </button>
                  </div>

                  <div className="card_title__container space-y-4">
                    <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-2xl font-sans font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">{project.title}</h3>
                    <div className="relative text-gray-100 text-sm">

                      <p className={`text-[#FFFFFF80] font-medium text-sm`}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='flex flex-row flex-wrap gap-x-4 gap-y-1 text-sm'>
                  {project.tools.map((tool, i) => (
                    <span className='text-orange-600' key={i}>{tool}</span>
                  ))}
                </div>

                <div className=' absolute right-0 bottom-0 p-4'>
                  <span className='text-[#FFFFFF15] font-semibold text-8xl font-[sans-serif]'>{project.year}</span>
                </div>

              </div>

              <div
                className={`card`}
              >

                <div className='w-full flex flex-row justify-between items-start'>
                  <h1 className='text-4xl font-sans w-fit flex justify-center items-center font-bold bg-linear-to-b from-slate-600 to-slate-100 bg-clip-text text-transparent transform-gpu will-change-transform'>{idx < 10 ? "0" + (idx + 1) : (idx + 1)}
                  </h1>
                  <button
                    className='text-gray-400 hover:text-orange-400 font-medium cursor-pointer'
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRotate(idx);
                    }}>
                    <FaRotate className="text-gray-400 hover:text-orange-400 text-lg active:rotate-180 transition-all duration-500"/>
                  </button>
                </div>

                {/* rotating border */}
                <div className="card__border">
                </div>

                {/* content */}
                <div className="card_title__container space-y-4">
                  <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-2xl font-sans font-bold text-gray-100">{project.title}</h3>
                </div>

                <hr className="line" />

                {/* {img} */}
                <div className=''>
                  <img src={project.image} alt="Thumbnail" className='h-40 w-full object-cover rounded-2xl ' />
                </div>

                {/* button */}
                <button className="button border-2 border-pink-400 rounded-l-full rounded-r-full font-semibold flex flex-row justify-center items-center gap-4">
                  <FaArrowUpRightFromSquare/>
                  <span>Explore</span>
                </button>
              </div>
            </motion.div>

          ))}

        </motion.div>

      </div>
    </>
  )
}

export default Projects