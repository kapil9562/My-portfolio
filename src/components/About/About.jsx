import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInRight, Container } from "/src/animation";
import loaderAnimation from "/src/assets/loader.json";

function About() {

  const handleClick = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section id="about" className="flex flex-col md:flex-row pb-5 min-h-[calc(100dvh-84px)]">

        {/* LEFT SIDE */}
        <motion.div
          className="w-full md:w-[50%] p-2 flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-start lg:pl-40 md:pl-20 transform-gpu will-change-transform"
          variants={Container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >

          <motion.h2
            className="md:text-6xl text-5xl font-bold text-white transform-gpu will-change-transform"
            variants={fadeInLeft}
            viewport={{ once: true }}
          >
            ABOUT{" "}
            <span className="bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bold">
              Me
            </span>
          </motion.h2>

          <motion.h3
            className="md:text-4xl text-3xl font-bold text-white transform-gpu will-change-transform"
            variants={fadeInLeft}
            viewport={{ once: true }}
          >
            Hello! I'm{" "}
            <span className="font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Kapil,
            </span>
          </motion.h3>

          <motion.span
            className="bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent md:text-2xl text-xl font-bold transform-gpu will-change-transform"
            variants={fadeInLeft}
            viewport={{ once: true }}
          >
            <ReactTyped
              strings={["a Full Stack Developer", "an App Developer"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </motion.span>

          <motion.p
            className="text-lg text-gray-400 text-center md:text-start leading-relaxed w-[90%] transform-gpu will-change-transform"
            variants={fadeInLeft}
            viewport={{ once: true }}
          >
            I am a Full Stack Developer specializing in
            React.js, Node.js, Express.js, MongoDB, and modern web technologies.
            I build fast, responsive, and user-friendly web applications
            with a strong focus on performance, clean UI, and smooth user experiences.
          </motion.p>

          <motion.button
            aria-label="Contact Kapil Adhikari"
            className="px-4 py-2 font-semibold bg-linear-to-r from-pink-500 to-orange-500 text-white rounded-lg flex items-center gap-2
            active:scale-95 cursor-pointer active:bg-transparent transition-[scale] duration-300 border-2 border-[#F83C90] transform-gpu will-change-transform"
            variants={fadeInLeft}
            viewport={{ once: true }}
            onClick={() => handleClick("mailto:adhikarikapil389@gmail.com")}
          >
            LET'S TALK
          </motion.button>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex items-center justify-center w-full md:w-[50%] md:justify-start p-2 max-w-3xl transform-gpu will-change-transform"
          variants={Container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >

          <motion.div
            className="relative w-[80%] bg-cover bg-center h-fit rounded-4xl"
            variants={fadeInRight}
            viewport={{ once: true }}>

            {/* Liquid glass card */}
            <div
              className="aboutCard w-full rounded-4xl text-white/80 via-white/20 to-white/10 shadow-inner shadow-white/10 font-semibold space-y-4 px-10 py-6"

            >
              <div className="aboutCard_border"></div>
              <ul className="space-y-4 list-disc list-inside">
                <li>
                  I am from Uttarakhand, India. I'm currently pursuing a Bachelor's
                  in Computer Application (BCA) and will graduate in 2027.
                </li>
                <li>
                  I'm a passionate Web Developer. I specialize in creating smooth, interactive, and user-friendly experiences using modern technologies, with a strong focus on performance and clean design.
                </li>
                <li>
                  My goal is to combine creativity and frontend engineering to craft digital products that not only look great but feel seamless and intuitive to use.
                </li>
              </ul>
            </div>
          </motion.div>

        </motion.div>

      </section>
    </>
  );
}

export default About;
