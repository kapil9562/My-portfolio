import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import animationData from "/src/assets/python.json";
import loaderAnimation from "/src/assets/loader.json";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, Container } from "/src/animation";

const logos = {
  HTML: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  CSS: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  Tailwind: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  JavaScript:
    "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  "React JS": "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  "React Native": "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
  "Node js":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  "Mongo DB": "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
  SQL: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  "Git & GitHub":
    "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000",
  Java: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
};

const skills = [
  { label: "Teamwork", percent: 87 },
  { label: "Creativity", percent: 90 },
  { label: "Project Management", percent: 85 },
  { label: "Communication", percent: 70 },
];

const SegmentedCircle = ({ percent, label, segments = 90 }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCircle();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCircle = () => {
    const duration = 1200;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setAnimatedPercent(progress * percent);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const activeSegments = Math.round((animatedPercent / 100) * segments);
  const radius = 45;
  const center = 50;

  const renderSegments = () => {
    const angleStep = (2 * Math.PI) / segments;
    return [...Array(segments)].map((_, i) => {
      const angle = i * angleStep - Math.PI / 2;

      const x1 = center + radius * Math.cos(angle);
      const y1 = center + radius * Math.sin(angle);

      const x2 = center + (radius - 12) * Math.cos(angle);
      const y2 = center + (radius - 12) * Math.sin(angle);

      return (
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
    });
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center py-2">
      <svg viewBox="0 0 100 100" className="w-32 h-32">
        {renderSegments()}

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-[#090040] text-[12px] font-bold"
        >
          {Math.round(animatedPercent)}%
        </text>
      </svg>

      <p className="text-black text-[14px] font-semibold mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

export default function Skills() {
  const [loader] = useState(false);

  return (
    <>
      {loader && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50">
          <Lottie
            loop
            animationData={loaderAnimation}
            play
            style={{ width: 120, height: 120 }}
          />
        </div>
      )}

      <div className="sm:px-10 sm:space-y-10 py-5 min-h-dvh">

        {/* HEADER */}
        <div className="flex flex-col items-center space-y-4">

          <motion.h1
            className="text-4xl font-bold text-[#6D4300] underline underline-offset-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Technical Skills
          </motion.h1>

          <motion.p
            className="xl:px-60 text-center text-[#00000090] font-semibold px-10"
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            I specialize in designing and developing responsive, user-friendly
            web and mobile interfaces.
          </motion.p>

        </div>

        {/* LOGOS */}
        <div className="xl:px-20">

          <motion.div
            className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6 p-6 justify-items-center"
            variants={Container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >

            {Object.entries(logos).map(([name, logo]) => (
              <motion.div key={name} variants={fadeInUp} className="w-full aspect-square">

                <div className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-lg w-full aspect-square shadow-xl flex flex-col justify-center items-center p-4 hover:scale-105 transition duration-300">

                  <img
                    src={logo}
                    alt={name}
                    className="object-contain h-12 sm:h-16"
                    loading="lazy"
                  />

                  <h1 className="text-center font-semibold text-xs mt-2 uppercase">
                    {name}
                  </h1>

                </div>

              </motion.div>
            ))}

            {/* Python Lottie */}
            <motion.div variants={fadeInUp} className="w-full aspect-square">

              <div className="bg-gradient-to-r from-[#efdbb8] to-[#f3eddc] rounded-lg w-full aspect-square shadow-xl flex flex-col justify-center items-center p-4 hover:scale-105 transition duration-300">

                <Lottie
                  loop
                  animationData={animationData}
                  play
                  className="h-14 w-14"
                />

                <h1 className="font-semibold text-xs mt-2 uppercase">
                  Python
                </h1>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* PROFESSIONAL SKILLS */}
        <div className="py-10 text-center lg:px-20">

          <motion.h1
            className="text-[#6D4300] text-4xl font-bold mb-10 underline underline-offset-6"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Professional Skills
          </motion.h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <SegmentedCircle key={idx} {...skill} />
            ))}
          </div>

        </div>

      </div>
    </>
  );
}
