import { useState, useEffect, useRef, useId } from "react";
import { motion } from "framer-motion";
import { Container, fadeIn, springUp } from "/src/animation";


const rows = [5, 4, 2, 1];

const logos = {
  HTML: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  CSS: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
  Tailwind: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
  JavaScript: "/javascript.webp",
  "React JS": "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
  "React Native": "https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000",
  "Node JS": "/nodeJS.webp",
  "Express JS": "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp",
  "Mongo DB": "https://d2lgmzy8vjj79z.cloudfront.net/mongodb.svg",
  SQL: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
  Git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  "GitHub": "/github.webp"
};

const skills = [
  { label: "Teamwork", percent: 85, sc: "#f0426a", ec: "#ff7849" },
  { label: "Creativity", percent: 95, sc: "#a78bfa", ec: "#f0426a" },
  { label: "Project Management", percent: 90, sc: "#22d3ee", ec: "#a78bfa" },
  { label: "Communication", percent: 80, sc: "#4ade80", ec: "#22d3ee" },
];


const SegmentedCircle = ({ percent, label, sc, ec }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  const gradientId = useId();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          animateCircle();

          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [percent]);

  const animateCircle = () => {
    const duration = 1200;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min(
        (time - start) / duration,
        1
      );

      setAnimatedPercent(progress * percent);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const radius = 46;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference -
    (animatedPercent / 100) * circumference;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center"
    >
      <svg
        viewBox="0 0 110 110"
        className="h-35 w-35 md:h-45 md:w-45 xl:h-50 xl:w-50"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={sc} />
            <stop offset="100%" stopColor={ec} />
          </linearGradient>
        </defs>

        {/* Background */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,.06)"
          strokeWidth="13"
        />

        {/* Glow / Track */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={
            circumference -
            (percent / 100) * circumference
          }
          opacity="0.15"
          transform="rotate(-90 55 55)"
        />

        {/* Animated Progress */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 55 55)"
        />

        {/* Percentage */}
        <text
          x="55"
          y="55"
          textAnchor="middle"
          dy=".3em"
          fill={`url(#${gradientId})`}
          className="text-base font-bold font-bricolage"
        >
          {Math.round(animatedPercent)}%
        </text>
      </svg>

      <p className="mt-2 text-center font-instrumentSans text-gray-400 font-semibold tracking-wide md:text-xl">
        {label}
      </p>
    </div>
  );
};



export default function Skills() {

  const logosArray = Object.entries(logos);
  let index = 0;

  return (
    <div className="sm:px-10 sm:space-y-10 py-15">

      {/* HEADER */}
      <div className="flex flex-col items-center space-y-4">

        <motion.span
          variants={springUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-base tracking-wider uppercase bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bricolage"
        >
         technical skills
        </motion.span>
        <motion.h4
          className="md:text-6xl sm:text-4xl text-3xl w-full flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform pb-2 underline-offset-4 decoration-2 font-bricolage relative gap-2 mt-2"
          variants={springUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-[#f1f1f5]">My</span> Toolkit
          <div className="absolute top-full bg-linear-to-r from-pink-500 to-orange-500 h-1 w-15 rounded-r-full rounded-l-full" />
        </motion.h4>

        <motion.p
          className="xl:px-60 text-center text-sm sm:text-[18px] text-[#b3b3b3] tracking-wide px-10 transform-gpu will-change-transform font-instrumentSans font-medium"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Technologies I use to build responsive, performant, and user-friendly products.
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
                viewport={{ once: true, amount: 0.4 }}
              >
                {rowItems.map(([name, url], idx) => (
                  <motion.div
                    className="flex flex-col justify-center items-center transform-gpu will-change-transform"
                    variants={fadeIn}
                    viewport={{ once: true, amount: 0.4 }}
                    key={idx}
                  >
                    <img
                      src={url}
                      alt={name}
                      className="sm:w-14 sm:h-14 h-10 w-10 object-contain"
                    />
                    <span className="text-gray-400 text-[10px] sm:text-sm font-instrumentSans">{name}</span>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* PROFESSIONAL SKILLS */}
      <div className="py-10 text-center lg:px-20 space-y-10">

        <motion.span
          variants={springUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-base tracking-wider uppercase bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bricolage"
        >
          professional skills
        </motion.span>
        <motion.h4
          className="md:text-6xl sm:text-4xl text-3xl w-full flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform pb-2 underline-offset-4 decoration-2 font-bricolage relative gap-2 mt-2"
          variants={springUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="text-[#f1f1f5]">Soft</span> Skills
          <div className="absolute top-full bg-linear-to-r from-pink-500 to-orange-500 h-1 w-15 rounded-r-full rounded-l-full" />
        </motion.h4>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <SegmentedCircle key={idx} {...skill} />
          ))}
        </div>

      </div>

    </div>
  );
}
