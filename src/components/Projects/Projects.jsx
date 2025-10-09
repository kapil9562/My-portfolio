import React from 'react'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, navContainer } from "/src/animation";
import projects from '/src/data/data.js'

function Projects() {
  return (
    <div className='transform-gpu'>
      <div className='justify-self-center items-center flex flex-col space-y-4 px-10'>
        <motion.h1 className='text-4xl font-bold text-[#6D4300] underline underline-offset-6'
          variants={fadeInLeft}
          initial="hidden"
          animate="show">My Projects</motion.h1>
        <motion.p className='xl:px-60 text-center text-[#00000090] font-semibold sm:px-10'
          variants={fadeInRight}
          initial="hidden"
          animate="show">I design and build modern, responsive web applications that blend creativity with functionality. My goal is to craft seamless user experiences that are fast, intuitive, and visually engaging across all devices.</motion.p>
      </div>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               gap-4 md:gap-8 p-10 justify-items-center md:px-20 px-10"
        variants={navContainer}
        initial="hidden"
        animate="show">
        {projects.map((project, idx) => (
          <motion.div
            variants={fadeInUp}
            key={idx}
            className="max-w-sm bg-[#efdbb8] rounded-2xl shadow-2xl shadow-[#717171]">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-2xl w-full aspect-square h-24 relative inset-shadow-sm inset-shadow-[#717171] transform-gpu will-change-contents">
              <img src={project.image} className='object-cover h-full w-full rounded-2xl' loading="eager"></img>

              {/* Center circle icon */}
              <div className="absolute left-6 bottom-0 translate-y-1/2 bg-[#ffffff] w-20 h-20 rounded-full flex items-center justify-center overflow-hidden shadow-xl shadow-[#b3b3b3] border-2 border-white">
                <img src={project.logo} className='object-cover h-full w-full' loading="eager"></img>
              </div>
            </div>

            {/* Content */}
            <div className="pt-12 pb-6 px-6">
              <h2 className="text-2xl font-bold mb-2 text-[#000000]">{project.title}</h2>
              <p className="text-[#6D4300] text-sm mb-6">{project.description}</p>

              {/* View */}
              <div className="flex gap-3">
                <button className="bg-[#6D4300] border-2 border-[#6D4300] text-white px-5 py-1.5 rounded-full font-semibold text-sm transform-gpu will-change-transform active:bg-transparent active:text-black transition-colors duration-200 hover:bg-[#915a02] shadow-md shadow-[#6D4300]/50">
                  View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Projects