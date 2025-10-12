import React, { useState, useEffect } from 'react'
import pfp from "/src/assets/pfp.png"
import { ReactTyped } from "react-typed";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInRight, navContainer } from "/src/animation";
import loaderAnimation from "/src/assets/loader.json";
import Lottie from "lottie-react";

function About() {

  const [loader, setLoader] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      setAnimate(true); // ✅ Trigger animations after loader ends
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { icon: "fa-github", link: "https://github.com/kapil9562" },
    { icon: "fa-instagram", link: "https://www.instagram.com/kapil_art_official" },
    { icon: "fa-linkedin", link: "https://www.linkedin.com/in/kapil9562" }
  ];

  const handleClick = (url) => {
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 300);
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
      <div className='flex flex-col md:flex-row pb-5 md:h-[90vh]'>
        <div className='w-full md:w-[50%] p-2 flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-start lg:pl-40 md:pl-20'>
          <motion.h1 className='text-4xl font-bold'
            variants={fadeInRight}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
            >
            ABOUT{" "}
            <span className='text-[#6D4300] font-bold [text-shadow:2px_2px_4px_#C1856D]'>Me</span>
          </motion.h1>
          <br />
          <motion.h1 className='text-2xl font-bold'
            variants={fadeInLeft}
            initial="hidden"
            animate={animate ? "show" : "hidden"}>
            Hello! I'm{" "}
            <span className='text-[#6D4300] font-bold [text-shadow:2px_2px_4px_#C1856D]'>Kapil,
            </span>
          </motion.h1>

          <motion.span className='text-[#6D4300] [text-shadow:2px_2px_4px_#C1856D] text-2xl font-bold'
            variants={fadeInRight}
            initial="hidden"
            animate={animate ? "show" : "hidden"}>
            <ReactTyped
              strings={["a Web Developer", "an App Developer", "a Frontend Developer"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </motion.span>

          <motion.p className="text-lg text-gray-700 leading-relaxed w-[90%] overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={animate ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}>
            Passionate about creating modern, responsive, and user-friendly
            applications. I specialize in building scalable web apps, elegant
            front-end designs, and efficient mobile experiences.
          </motion.p>

          <motion.div
            variants={navContainer}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
            className="flex space-x-4">
            {icons.map((item, idx) => (
              <motion.div
                variants={fadeInDown}
                key={idx}
                onClick={() => handleClick(item.link)}>
                <div className="h-12 w-12 rounded-full border-2 border-[#6D4300] text-center 
                 flex items-center justify-center text-[#6D4300] 
                 hover:bg-[#6D4300] hover:text-white hover:scale-110 
                 transition-all duration-300 ease-in-out cursor-pointer
                 active:text-white active:scale-95 active:bg-[#6D4300] active:duration-100">
                  <i className={`fa-brands ${item.icon} text-2xl`}></i>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.button className="px-4 py-2 bg-[#6D4300] text-white rounded-lg flex items-center gap-2 hover:bg-[#8B5E2A] cursor-pointer active:bg-transparent transition-all duration-100 active:font-semibold active:text-black border-2 border-[#6D4300] shadow-xl shadow-[#6D4300]/50"
            variants={fadeInLeft}
            initial="hidden"
            animate={animate ? "show" : "hidden"}>Contact Us
          </motion.button>

        </div>
        <div className='flex items-center justify-center w-full md:w-[50%] md:justify-start p-2 max-w-3xl'>
          <motion.div className='max-w-[80%] justify-self-center bg-[#f4eada] rounded-4xl mb-10 md:mb-0 shadow-2xl border-3 border-[#EBCB90] font-semibold space-y-4 px-10 overflow-hidden'
            initial={{ height: 0, opacity: 0 }}
            animate={animate ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }} s>
            <p className='pt-6'><li>I am from Uttarakhand, India. I'm currently pursuing a Bachelor's in Computer Application {"(BCA)"} and will graduate in 2027.</li></p>
            <p><li>I'm a passionate UI/UX Designer and Web Developer, dedicated to creating modern, user-centered digital experiences. Alongside my studies, I work as an Affiliate Lancer, where I collaborate on various design and development projects that help brands grow online.</li></p>
            <p className='pb-6'><li>My goal is to combine creativity and technology to design digital products that not only look great but also deliver smooth, meaningful user experiences.</li></p>
          </motion.div>
        </div>
      </div>

    </>
  )
}

export default About