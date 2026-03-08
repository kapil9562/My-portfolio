import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "/src/animation";
import loaderAnimation from "/src/assets/loader.json";
import Lottie from "lottie-react";

function Experiences() {

  const [loader, setLoader] = useState(false);

  return (
    <>
      {loader && (
        <div className="w-full min-h-dvh flex items-center justify-center backdrop-blur-xl z-50">
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
        <div className='justify-self-center items-center flex flex-col space-y-4 px-10'>
          <motion.h1 className='text-4xl font-bold text-[#6D4300] underline underline-offset-6'
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{once: false}}>My Experiences</motion.h1>
          <motion.p className='xl:px-60 text-center text-[#00000090] font-semibold sm:px-10'
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{once: false}}>I specialize in building responsive and modern web applications using React, JavaScript, and Tailwind CSS. My focus is on creating intuitive user interfaces, smooth user experiences, and well-structured code. I enjoy turning ideas into interactive and functional web solutions.</motion.p>
        </div>
      </div>
    </>
  )
}

export default Experiences