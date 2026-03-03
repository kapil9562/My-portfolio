import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'react-lottie-player';
import animationData from '/src/assets/python.json';
import loaderAnimation from '/src/assets/loader.json';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, navContainer } from '/src/animation';

// Tech logos with clean display names
const logos = {
  HTML: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  CSS: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  Tailwind: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  "JavaScript": "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  "React JS": "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  "React Native": "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
  "Node js": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  "Mongo DB" : "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
  SQL: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  "Git & GitHub": "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  Java: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
};

// Professional / soft skills
const skills = [
  { label: 'Teamwork', percent: 87 },
  { label: 'Creativity', percent: 90 },
  { label: 'Project Management', percent: 85 },
  { label: 'Communication', percent: 70 },
];

// SegmentedCircle component with scroll animation
const SegmentedCircle = ({ percent, label, segments = 90 }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const directionRef = useRef('up');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        directionRef.current = entry.isIntersecting ? 'up' : 'down';
        startAnimation();
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
    const duration = 1500;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      let progressPercent = 0;

      if (directionRef.current === 'up') {
        progressPercent = Math.min((progress / duration) * percent, percent);
      } else {
        progressPercent = Math.max(percent - (progress / duration) * percent, 0);
      }

      setAnimatedPercent(progressPercent);

      if (progress < duration) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setAnimatedPercent(directionRef.current === 'up' ? percent : 0);
      }
    };

    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(step);
  };

  const activeSegments = Math.round((animatedPercent / 100) * segments);
  const radius = 45;
  const center = 50;

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
          stroke={i < activeSegments ? "#06b6d4" : "#ccc"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      );

      i < activeSegments ? activeLines.push(line) : inactiveLines.push(line);
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
      <svg viewBox="0 0 100 100" className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
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
          className="fill-[#090040] text-[12px] font-bold select-none"
        >
          {Math.round(animatedPercent)}%
        </text>
      </svg>
      <p className="text-black text-[14px] font-semibold mt-2 text-center">{label}</p>
    </div>
  );
};

export default function Skills() {
  const [loader, setLoader] = useState(false);
  const [animate, setAnimate] = useState(true);

  return (
    <>
      {loader && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50">
          <Lottie
            loop
            animationData={loaderAnimation}
            play
            style={{
              width: 120,
              height: 120,
              filter:
                "invert(43%) sepia(59%) saturate(700%) hue-rotate(320deg) brightness(60%) contrast(100%)",
            }}
          />
        </div>
      )}

      <div className="sm:px-10 sm:space-y-10 py-5 transform-gpu">
        {/* Technical Skills Header */}
        <div className="flex flex-col items-center space-y-4">
          <motion.h1
            className="text-4xl font-bold text-[#6D4300] underline underline-offset-6"
            variants={fadeInLeft}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
          >
            Technical Skills
          </motion.h1>
          <motion.p
            className="xl:px-60 text-center text-[#00000090] font-semibold px-10"
            variants={fadeInRight}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
          >
            I specialize in designing and developing responsive, user-friendly web and mobile interfaces. From wireframes to working prototypes, I bring ideas to life with a focus on clarity, usability, and performance.
          </motion.p>
        </div>

        {/* Logos Grid */}
        <div className="xl:px-20">
          <motion.div
            className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-8 p-6 justify-items-center"
            variants={navContainer}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
          >
            {Object.entries(logos).map(([name, logo]) => (
              <motion.div key={name} variants={fadeInUp} className="w-full aspect-square">
                <div
                  className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-lg w-full aspect-square shadow-2xl 
                             flex flex-col justify-center items-center p-4 hover:scale-105 transform-gpu transition-transform duration-300"
                  title={`Experience in ${name}`} // tooltip
                >
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className={`object-contain lg:object-cover h-10 sm:h-20 ${name === "React JS" || name === "React Native" ? "spin-slow" : ""}`}
                    loading="lazy"
                  />
                  <h1 className="text-center text-[#000] font-semibold text-[10px] sm:text-xs md:text-base uppercase mt-2 truncate w-full">
                    {name}
                  </h1>
                </div>
              </motion.div>
            ))}

            {/* Python Lottie Animation */}
            <motion.div variants={fadeInUp} className="w-full aspect-square">
              <div
                className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-lg w-full aspect-square shadow-2xl 
                           flex flex-col justify-center items-center p-4 hover:scale-105 transform-gpu transition-transform duration-300"
                title="Experience in Python"
              >
                <Lottie speed={0.5} loop animationData={animationData} play className="h-10 w-10 sm:h-20 sm:w-20" />
                <h1 className="text-center text-[#000] font-semibold text-[10px] sm:text-xs md:text-base uppercase mt-2">
                  Python
                </h1>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Professional Skills */}
        <div className="py-10 text-center lg:px-20">
          <motion.h1
            className="text-[#6D4300] text-4xl font-bold mb-10 underline underline-offset-6"
            variants={fadeInLeft}
            initial="hidden"
            animate={animate ? "show" : "hidden"}
          >
            Professional Skills
          </motion.h1>
          <div className={animate ? "grid grid-cols-2 sm:grid-cols-4 justify-center gap-4" : "hidden"}>
            {skills.map((skill, idx) => (
              <SegmentedCircle key={idx} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}