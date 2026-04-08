import React, { useState, useEffect, useRef } from "react";
import Lottie from "react-lottie-player";
import animationData from "/src/assets/python.json";
import loaderAnimation from "/src/assets/loader.json";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, Container, fadeIn,  springUp, bounceIn } from "/src/animation";


const rows = [7, 5, 3, 2, 1];

const logos = {
  HTML: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  CSS: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  Tailwind: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  JavaScript: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  "React JS": "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  "React Native": "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
  "Node JS": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
  "Express JS": "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp",
  Redux: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  Vite: "/viteLogo.svg",
  "Mongo DB": "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
  SQL: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  Git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  "GitHub": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png",
  Java: "https://img.icons8.com/?size=100&id=13679&format=png&color=000000",
  Firebase: "/firebase.png",
  GoogleCloud: "https://brandlogos.net/wp-content/uploads/2022/07/google_cloud-logo_brandlogos.net_qxnsy-512x512.png",
  Figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
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
          stroke={i < activeSegments ? "#22d3ee" : "#444"}
          strokeWidth="2"
          strokeLinecap="round"
        />
      );
    });
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center py-2">
      <svg viewBox="0 0 100 100" className="xl:w-50 xl:h-50 md:w-45 md:h-45 h-35 w-35">
        {renderSegments()}

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="fill-[#e5e7eb] text-[12px] font-bold"
        >
          {Math.round(animatedPercent)}%
        </text>
      </svg>

      <p className="text-gray-400 md:text-xl font-semibold mt-2 text-center">
        {label}
      </p>
    </div>
  );
};

export default function Skills() {
  const [loader] = useState(false);

  const logosArray = Object.entries(logos);
  let index = 0;

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

      <div className="sm:px-10 sm:space-y-10 py-5 min-h-[calc(100dvh-84px)]">

        {/* HEADER */}
        <div className="flex flex-col items-center space-y-4">

          <motion.h1
            className="md:text-6xl sm:text-4xl text-3xl underline w-full flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform text-center pb-4 underline-offset-4 decoration-2"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            Technical Skills
          </motion.h1>

          <motion.p
            className="xl:px-60 text-center text-sm sm:text-[18px] text-[#b3b3b3] font-semibold px-10 transform-gpu will-change-transform"
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
        <div className="xl:px-20 pt-10 sm:pt-0">

          <div className="flex flex-col items-center gap-6 w-full">
            {rows.map((count, rowIndex) => {
              const rowItems = logosArray.slice(index, index + count);
              index += count;

              return (
                <motion.div
                  key={rowIndex}
                  className="flex justify-center md:gap-15 gap-5 transform-gpu will-change-transform"
                  variants={Container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.4 }}
                >
                  {rowItems.map(([name, url], idx) => (
                    <motion.div
                      className="flex flex-col justify-center items-center transform-gpu will-change-transform"
                      variants={fadeIn}
                      viewport={{ once: false, amount: 0.4 }}
                      key={idx}
                    >
                      <img
                        src={url}
                        alt={name}
                        className="sm:w-14 sm:h-14 h-5 w-5 object-contain"
                      />
                      <span className="text-gray-400 text-[6px] sm:text-sm">{name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* PROFESSIONAL SKILLS */}
        <div className="py-10 text-center lg:px-20 space-y-10">

          <motion.h1
            className="md:text-6xl sm:text-4xl text-3xl underline w-full flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform pb-4 underline-offset-4 decoration-2"
            variants={springUp}
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
