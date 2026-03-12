import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  Container
} from "/src/animation";
import loaderAnimation from "/src/assets/loader.json";
import Lottie from "lottie-react";

function Home() {

  const [loader] = useState(false);

  const icons = [
    { icon: "fa-github", link: "https://github.com/kapil9562" },
    { icon: "fa-instagram", link: "https://www.instagram.com/kapil_art_official" },
    { icon: "fa-linkedin", link: "https://www.linkedin.com/in/kapil-adhikari9562" }
  ];

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {loader && (
        <div className="h-full w-full md:h-[90vh] flex items-center justify-center backdrop-blur-xl z-50">
          <Lottie
            animationData={loaderAnimation}
            loop
            className="w-30 h-30"
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row pb-5 min-h-[calc(100dvh-84px)]">

        {/* IMAGE */}
        <motion.div
          className="flex items-center justify-center w-full md:w-[50%] p-2 transform-gpu"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.img
            src="/pfp.png"
            alt="profile pic"
            className="object-contain w-90 md:w-110 lg:w-[70%] transform-gpu"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="w-full md:w-[50%] p-2 flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-start md:pb-0 pb-10"
          variants={Container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}>

          <motion.h1
            className="text-4xl font-bold text-white transform-gpu"
            variants={fadeInRight}
            viewport={{ once: false }}
          >
            Hey, I'm{" "}
            <span className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Kapil
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl font-bold text-white transform-gpu"
            variants={fadeInRight}
            viewport={{ once: false }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bold transform-gpu">
              <ReactTyped
                strings={["a Full Stack Developer", "an App Developer"]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed w-[90%] transform-gpu"
            variants={fadeInRight}
            viewport={{ once: false }}
          >
            Passionate about creating modern, responsive, and user-friendly
            applications. I specialize in building scalable web apps, elegant
            front-end designs, and efficient mobile experiences.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={Container}
            viewport={{ once: false }}
            className="flex space-x-4 transform-gpu"
          >
            {icons.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInRight}
                onClick={() => handleClick(item.link)}
                className="transform-gpu"
              >
                <div
                  className="h-12 w-12 rounded-full border-2 border-[#FC5464]
                  flex items-center justify-center text-[#FC5464]
                  hover:bg-[#FC5464] hover:text-white hover:-translate-y-1
                  transition-all duration-300 ease-in-out cursor-pointer
                  active:text-white active:scale-95 active:bg-[#FC5464]"
                >
                  <i className={`fa-brands ${item.icon} text-2xl`}></i>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* DOWNLOAD BUTTON */}
          <motion.button
            className="transform-gpu px-4 py-2 bg-linear-to-r from-pink-500 to-orange-500 text-white rounded-lg flex items-center gap-2 cursor-pointer transition-[scale] duration-300 active:scale-95 will-change-transform
            border-2 border-[#F83C90] shadow-xl shadow-[#6D4300]/50"
            variants={fadeInRight}
            viewport={{ once: false }}
          >
            <i className="fas fa-download"></i>

            <a href="/resume.pdf" download>
              Download CV
            </a>
          </motion.button>

        </motion.div>

      </div>
    </>
  );
}

export default Home;