import React, { useState } from "react";
import pfp from "/src/assets/pfp.png";
import { ReactTyped } from "react-typed";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  navContainer
} from "/src/animation";
import loaderAnimation from "/src/assets/loader.json";
import Lottie from "lottie-react";

function Home() {

  const [loader] = useState(false);

  const icons = [
    { icon: "fa-github", link: "https://github.com/kapil9562" },
    { icon: "fa-instagram", link: "https://www.instagram.com/kapil_art_official" },
    { icon: "fa-linkedin", link: "https://www.linkedin.com/in/kapil9562" }
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

      <div className="flex flex-col sm:flex-row pb-5 md:h-[90vh]">

        {/* IMAGE */}
        <motion.div
          className="flex items-center justify-center w-full sm:w-[50%] p-2"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.img
            src={pfp}
            alt="profile pic"
            className="object-cover w-full lg:w-[70%]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* TEXT */}
        <div className="w-full sm:w-[50%] p-2 flex flex-col items-center sm:items-start justify-center space-y-4 text-center sm:text-start sm:pb-0 pb-10">

          <motion.h1
            className="text-4xl font-bold"
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Hey, I'm{" "}
            <span className="text-[#6D4300] font-bold [text-shadow:2px_2px_4px_#C1856D]">
              Kapil
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl font-bold"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            I'm{" "}
            <span className="text-[#6D4300] font-bold [text-shadow:2px_2px_4px_#C1856D]">
              <ReactTyped
                strings={["a Full Stack Developer", "an App Developer"]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed w-[90%]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Passionate about creating modern, responsive, and user-friendly
            applications. I specialize in building scalable web apps, elegant
            front-end designs, and efficient mobile experiences.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={navContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="flex space-x-4"
          >
            {icons.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInDown}
                onClick={() => handleClick(item.link)}
              >
                <div
                  className="h-12 w-12 rounded-full border-2 border-[#6D4300]
                  flex items-center justify-center text-[#6D4300]
                  hover:bg-[#6D4300] hover:text-white hover:scale-110
                  transition-all duration-300 ease-in-out cursor-pointer
                  active:text-white active:scale-95 active:bg-[#6D4300]"
                >
                  <i className={`fa-brands ${item.icon} text-2xl`}></i>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* DOWNLOAD BUTTON */}
          <motion.button
            className="px-4 py-2 bg-[#6D4300] text-white rounded-lg flex items-center gap-2
            hover:bg-[#8B5E2A] cursor-pointer transition-colors duration-200
            border-2 border-[#6D4300] shadow-xl shadow-[#6D4300]/50"
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <i className="fas fa-download"></i>

            <a href="/resume.pdf" download>
              Download CV
            </a>
          </motion.button>

        </div>

      </div>
    </>
  );
}

export default Home;