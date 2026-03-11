import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, Container } from "/src/animation";
import projects from '/src/data/data.js'
import loaderAnimation from "/src/assets/loader.json";
import Lottie from "lottie-react";

function Projects() {

  const [loader, setLoader] = useState(false);
  const [seeMore, setSeeMore] = useState({});
  const [overflowMap, setOverflowMap] = useState({});
  const textRefs = useRef({});

  const openProject = (link) => {
    if (!link) return;
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
      window.location.href = link;
    }
  };

  const toggleSeeMore = (idx) => {
    setSeeMore((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newOverflow = {};

    Object.keys(textRefs.current).forEach((key) => {
      const el = textRefs.current[key];
      if (el) {
        newOverflow[key] = el.scrollHeight > el.clientHeight;
      }
    });

    setOverflowMap(newOverflow);
  }, [projects, screenWidth]);

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
               gap-4 md:gap-8 p-5 justify-items-center md:px-20 sm:px-10"
          variants={Container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >

          {projects.map((project, idx) => (

            <div className="card" key={idx}>

              <h1 className='text-4xl font-sans w-fit flex justify-center items-center font-bold bg-linear-to-b from-slate-600 to-slate-100 bg-clip-text text-transparent transform-gpu will-change-transform'>{idx < 10 ? "0" + (idx + 1) : (idx + 1)}</h1>

              {/* rotating border */}
              <div className="card__border">
              </div>

              {/* content */}
              <div className="card_title__container space-y-4">
                <h3 className="lg:text-3xl md:text-2xl sm:text-xl text-2xl font-sans font-bold text-gray-100">{project.title}</h3>
                <div className="relative text-gray-100 text-sm">

                  <p className={`text-gray-100 text-sm ${seeMore[idx] ? "line-clamp-none" : "line-clamp-2"}`} ref={(el) => (textRefs.current[idx] = el)}>
                    {project.description}
                  </p>
                  {overflowMap[idx] &&
                    <button className="text-slate-300 font-semibold cursor-pointer underline" onClick={() => toggleSeeMore(idx)}>
                      {seeMore[idx] ? 'less' : "read more"}
                    </button>
                  }
                </div>
              </div>

              <hr className="line" />

              {/* {img} */}
              <div className=''>
                <img src={project.image} alt="Thumbnail" className='h-30 w-full object-cover rounded-2xl' />
              </div>

              {/* button */}
              <button className="button border-2 border-pink-400 rounded-l-full rounded-r-full font-semibold">
                Explore Project
              </button>
            </div>

          ))}

        </motion.div>

      </div>
    </>
  )
}

export default Projects