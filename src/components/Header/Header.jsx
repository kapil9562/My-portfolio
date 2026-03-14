import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, Container, fadeIn } from "/src/animation";

function Header({ showIntro, showContent }) {

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const MotionNavLink = motion.create(NavLink);
  const tabs = ["/#home", "/#about", "/#journey", "/#skills", "/#projects"];

  const [isActiveSec, setActiveSec] = useState("");

  useEffect(() => {
    if (!location.hash) {
      setActiveSec("#home");
    } else {
      setActiveSec(location.hash);
    }
  }, [location.hash]);

  useEffect(() => {

    if (!showContent) return;

    const sections = tabs.map((path) =>
      document.getElementById(path.replace("/#", ""))
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSec(`#${id}`);
            window.history.replaceState(null, "", `/#${id}`);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-100px 0px -20% 0px" }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, [showContent]);

  const openLink = (link) => {
    if (!link) return;
    const newWindow = window.open(link, "_blank");
    if (!newWindow) {
      window.location.href = link;
    }
  };

  return (
    <header className='sticky w-full z-99 top-0'>
      <nav className='flex-row flex justify-between h-15 md:h-21 px-5 py-2 lg:px-20 xl:px-50 sm:py-2 items-center bg-black/30  backdrop-blur-md'>
        {!showIntro && (
          <>
            <Link to="/#home">
              <motion.img
                transition={{duration: 0.7}}
                layout
                layoutId="logo"
                src="/KA.png"
                alt="logo"
                className="object-contain h-13 w-13 will-change-transform transform-gpu z-999"
              />
            </Link>

            <div className='p-1 md:flex flex-row sm:gap-5 md:gap-10 text-lg font-semibold justify-center items-center hidden'>
              <motion.div
                variants={Container}
                initial="hidden"
                animate="show"
                className="flex gap-6"
              >
                {tabs.map((path, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <a
                      href={path}
                      className={
                        `${isActiveSec === path.replace("/", "") ? 'underline underline-offset-4 text-orange-500' : 'relative inline-block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-orange-500 after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:text-orange-500'} text-[#F5EBFA]`
                      }
                    >
                      {path.replace("/#", "")}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className='bg-linear-to-r from-pink-500 to-orange-500 text-white p-1 px-3 rounded-2xl hover:bg-[#8B5E2A] cursor-pointer active:scale-95 transition-[scale] duration-200 border-2 border-orange-600'
                variants={fadeInUp}
                initial="hidden"
                animate="show">
                <button onClick={() => openLink("mailto:adhikarikapil389@gmail.com")} className='cursor-pointer'>LET'S TALK</button>
              </motion.div>
            </div>
            <div className='h-10 w-10 md:hidden text-2xl text-[#fcb49e] hover:bg-[#6D430030] rounded-full text-center content-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </>
        )}
      </nav>

      <ul className={`rounded-xl absolute right-5 top-15 border border-gray-700 justify-center items-start text-[16px] flex-col text-white shadow-gray-800 shadow-md z-99 bg-black/50 backdrop-blur-lg w-50 md:hidden flex ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-60 invisible"} transition-all origin-top-right duration-500`}>
        {tabs.map((path, index) => (
          <div className='w-full  active:bg-black/60 transition-colors duration-150 rounded-xl' key={index}>
            <li className="w-full cursor-pointer pt-2 pb-2 border-b border-b-gray-700 px-4">
              <a
                href={path}
                onClick={() => setIsOpen(false)}
                className={
                  `h-full w-full font-medium ${isActiveSec === path.replace("/", "") ? 'text-orange-400' : 'hover:text-orange-500'}`
                }
              >
                {path.replace("/#", "").toUpperCase()}
              </a>
            </li>
          </div>

        ))}
        <div className='w-full px-4  active:bg-black/60 transition-colors duration-150 rounded-xl'>
          <button onClick={() => openLink("mailto:adhikarikapil389@gmail.com")} className='w-full h-full text-start font-semibold cursor-pointer pt-2 pb-2 py-1'>
            LET'S TALK
          </button>
        </div>
      </ul>
    </header>
  )
}

export default Header