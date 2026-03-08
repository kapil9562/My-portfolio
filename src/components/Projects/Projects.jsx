import React, { useState } from 'react'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, navContainer } from "/src/animation";
import projects from '/src/data/data.js'
import loaderAnimation from "/src/assets/loader.json";
import Lottie from "lottie-react";

function Projects() {

  const [loader, setLoader] = useState(false);

  const openProject = (link) => {
    if (!link) return;
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
      window.location.href = link;
    }
  };

  return (
    <>
      {loader && (
        <div className="h-full w-full md:h-[90vh] flex items-center justify-center backdrop-blur-xl z-50">
          <Lottie
            animationData={loaderAnimation}
            loop={true}
            className="w-30 h-30"
            style={{
              filter:
                'invert(43%) sepia(59%) saturate(700%) hue-rotate(320deg) brightness(60%) contrast(100%)'
            }}
          />
        </div>
      )}

      <div className='transform-gpu min-h-dvh'>

        {/* Heading Section */}
        <div className='justify-self-center items-center flex flex-col space-y-4 px-10'>

          <motion.h1
            className='text-4xl font-bold text-[#6D4300] underline underline-offset-6'
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            My Projects
          </motion.h1>

          <motion.p
            className='xl:px-60 text-center text-[#00000090] font-semibold sm:px-10'
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            I design and build modern, responsive web applications that blend creativity with functionality. My goal is to craft seamless user experiences that are fast, intuitive, and visually engaging across all devices.
          </motion.p>

        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               gap-4 md:gap-8 p-10 justify-items-center md:px-20 px-10"
          variants={navContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >

          {projects.map((project, idx) => (

            <motion.div
              key={idx}
              variants={fadeInUp}
            >

              <div
                className="bg-[#efdbb8] rounded-2xl shadow-2xl shadow-[#717171] hover:scale-105 transition-all duration-300 active:scale-95 transform-gpu will-change-transform"
                onClick={() => openProject(project.live)}
              >

                {/* Image Section */}
                <div className="bg-linear-to-r from-[#efdbb8] to-[#f3eddc] rounded-2xl w-full aspect-square h-50 relative inset-shadow-sm inset-shadow-[#717171]">

                  <img
                    src={project.image}
                    className='object-cover h-full w-full rounded-2xl'
                    loading="eager"
                  />

                  {/* Logo Circle */}
                  <div className="absolute left-6 bottom-0 translate-y-1/2 bg-[#ffffff] w-20 h-20 rounded-full flex items-center justify-center overflow-hidden shadow-xl shadow-[#b3b3b3] border-2 border-white">
                    <img
                      src={project.logo}
                      className='object-cover h-full w-full'
                      loading="eager"
                    />
                  </div>

                </div>

                {/* Content */}
                <div className="pt-12 pb-6 px-6">

                  <h2 className="text-2xl font-bold mb-2 text-[#000000]">
                    {project.title}
                  </h2>

                  <p className="text-[#6D4300] text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Button */}
                  <div className="flex gap-3">
                    <button
                      className="bg-[#6D4300] border-2 border-[#6D4300] text-white px-5 py-1.5 rounded-full font-semibold text-sm transform-gpu active:bg-transparent active:text-black transition-colors duration-200 hover:bg-[#915a02] shadow-md shadow-[#6D4300]/50"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProject(project.live);
                      }}
                    >
                      View
                    </button>
                  </div>

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