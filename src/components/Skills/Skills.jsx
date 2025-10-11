import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';
import animationData from '/src/assets/python.json';
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, navContainer } from "/src/animation";
import loaderAnimation from "/src/assets/loader.json";

const logos = {
  html: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  css: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  tailwind: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  java_script: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  sql: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  react_Js: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  react_Native: "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
  C: "https://img.icons8.com/?size=100&id=40670&format=png&color=000000",
  CPP: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
  Git0GitHub: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  java: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
}


const skills = [
  { label: 'Team work', percent: 87 },
  { label: 'Creativity', percent: 90 },
  { label: 'Project Management', percent: 85 },
  { label: 'Communication', percent: 70 },
];

const SegmentedCircle = ({ percent, label, segments = 90 }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const directionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          directionRef.current = "up";
          startAnimation();
        } else {
          directionRef.current = "down";
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const startAnimation = () => {
    const duration = 1500; // ms
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      let progressPercent = 0;

      if (directionRef.current === "up") {
        progressPercent = Math.min((progress / duration) * percent, percent);
      } else if (directionRef.current === "down") {
        progressPercent = Math.max(percent - (progress / duration) * percent, 0);
      }

      setAnimatedPercent(progressPercent);

      if (progress < duration) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setAnimatedPercent(directionRef.current === "up" ? percent : 0);
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(step);
  };

  // Responsive circle setup
  const activeSegments = Math.round((animatedPercent / 100) * segments);
  const radius = 45; // % of viewBox size
  const center = 50; // Center of viewBox

  const renderSegments = () => {
    const angleStep = (2 * Math.PI) / segments;
    const activeLines = [];
    const inactiveLines = [];

    for (let i = 0; i < segments; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x1 = center + radius * Math.cos(angle);
      const y1 = center + radius * Math.sin(angle);
      const x2 = center + (radius - 12) * Math.cos(angle);
      const y2 = center + (radius - 12) * Math.sin(angle);

      const line = (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={i < activeSegments ? "#06b6d4" : "#2d2d2d"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      );

      if (i < activeSegments) activeLines.push(line);
      else inactiveLines.push(line);
    }

    return (
      <>
        <g>{inactiveLines}</g>
        <g filter="url(#glow)">{activeLines}</g>
      </>
    );
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center py-2">
      <svg
        viewBox="0 0 100 100"
        className="w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              floodColor="#06b6d4"
              floodOpacity="0.7"
            />
          </filter>
        </defs>

        {renderSegments()}

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-[#090040] text-[10px] lg:text-[12px] font-bold select-none"
        >
          {Math.round(animatedPercent)}%
        </text>
      </svg>
      <p className="text-black text-[16px] font-semibold mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

function Skills() {

  const [loader, setLoader] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
      setAnimate(true); // ✅ Trigger animations after loader ends
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader && (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center backdrop-blur-xl z-50">
          <Lottie
            loop
            animationData={loaderAnimation}
            play
            style={{ width: 120, height: 120, filter: 'invert(43%) sepia(59%) saturate(700%) hue-rotate(320deg) brightness(60%) contrast(100%)' }}
          />
        </div>
      )}
      <div className='sm:px-10 sm:space-y-10 py-5 transform-gpu'>
        <div className='justify-self-center items-center flex flex-col space-y-4'>
          <motion.h1 className='text-4xl font-bold text-[#6D4300] underline underline-offset-6'
            variants={fadeInLeft}
            initial="hidden"
            animate={animate ? "show" : "hidden"}>Technical Skills</motion.h1>
          <motion.p className='xl:px-60 text-center text-[#00000090] font-semibold px-10'
            variants={fadeInRight}
            initial="hidden"
            animate={animate ? "show" : "hidden"}>I specialize in designing and developing responsive, user-friendly web interfaces. From wireframes to working prototypes, I bring ideas to life with a focus on clarity, usability, and performance.</motion.p>
        </div>
        <div className="xl:px-20">
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
               gap-4 md:gap-8 p-10 justify-items-center"
            variants={navContainer}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
          >
            {Object.entries(logos).map(([name, logo], index) => (
              <motion.div
                variants={fadeInUp}
                className='w-full aspect-square'
              >
                <div className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-lg w-full aspect-square shadow-2xl 
                   flex flex-col justify-center items-center p-4
                   hover:scale-105 transform-gpu will-change-transform transition-transform duration-300">
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className={`object-contain lg:object-cover h-10 sm:h-20 ${name === 'react_Js' || name === 'react_Native' ? 'spin-slow' : ''
                      }`}
                  />

                  <h1 className="text-center text-[#000] font-semibold text-[10px] uppercase w-fit sm:text-xs md:text-base h-5 sm:h-6 md:h-8 flex items-center justify-center text-ellipsis overflow-hidden whitespace-nowrap">
                    {name.replace('_', ' ').replace('0', "/").replace('PP', '++')}
                  </h1>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeInUp}
              className='w-full aspect-square'
            >
              <div className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-lg w-full aspect-square shadow-2xl 
                   flex flex-col justify-center items-center p-4
                   hover:scale-105 transform-gpu will-change-transform transition-transform duration-300">
                <Lottie
                  speed={0.5}
                  loop
                  animationData={animationData}
                  play
                  className='h-10 w-10 sm:h-20 sm:w-20'
                />
                <h1 className="text-center text-[#000] font-semibold text-[10px] sm:text-xs md:text-base uppercase h-5 sm:h-6 md:h-8 flex items-center justify-center text-ellipsis overflow-hidden whitespace-nowrap">
                  PYTHON
                </h1>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="py-10 text-center lg:px-20">
          <motion.h1 className="text-[#6D4300] text-4xl font-bold mb-15 underline underline-offset-6"
            variants={fadeInLeft}
            initial="hidden"
            animate={animate ? "show" : "hidden"}>Professional Skills</motion.h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 justify-center">
            {skills.map((skill, idx) => (
              <SegmentedCircle key={idx} {...skill} />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default Skills