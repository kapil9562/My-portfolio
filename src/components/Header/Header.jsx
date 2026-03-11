import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp, Container } from "/src/animation";

function Header() {

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const MotionNavLink = motion.create(NavLink);
  const tabs = ["/#home", "/#about", "/#journey", "/#skills", "/#projects", "/#experiences"];

  const [isActiveSec, setActiveSec] = useState("");

  useEffect(() => {
    location.hash === "/" ? setActiveSec("#home") : setActiveSec(location.hash);
  }, [location.hash]);

  useEffect(() => {
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
      { threshold: 0.6 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <header className='sticky w-full z-99 top-0'>
      <nav className='flex-row flex justify-between px-5 py-2 md:px-20 lg:px-50 sm:py-5  backdrop-blur-md'>
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="show"
        >
          <Link className='text-red-500 text-2xl font-bold [text-shadow:2px_2px_4px_#C1856D]'>
            <img src="/KA.png" alt="logo" className='md:h-10 h-8 w-fit' />
          </Link>
        </motion.div>
        <div className='p-1 sm:flex flex-row sm:gap-5 md:gap-10 text-1xl font-semibold justify-center items-center hidden'>
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
            <NavLink to="/contact">LET'S TALK</NavLink>
          </motion.div>
        </div>
        <div className='h-10 w-10 sm:hidden text-2xl text-[#F5EBFA] hover:bg-[#6D430030] rounded-full text-center content-center cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <ul className={`rounded-2xl absolute right-5 top-12 justify-center items-start text-[16px] flex flex-col text-white bg-[#6D4300] shadow-2xl z-20 w-50 sm:hidden ${isOpen ? "flex" : "hidden"}`}>
          {tabs.map((path, index) => (
            <div className='w-full px-4  active:bg-[#815003] transition-colors duration-150 rounded-xl' key={index}>
              <li className="w-full cursor-pointer pt-2 pb-2 border-b-2 border-b-[#815003]">
                <a
                  href={path}
                  onClick={() => setIsOpen(false)}
                  className={
                    `h-full w-full ${isActiveSec === path.replace("/", "") ? 'underline underline-offset-4 text-[#6D4300]' : 'relative inline-block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-black after:w-0 after:transition-all after:duration-500 hover:after:w-full'}`
                  }
                >
                  {path.replace("/#", "")}
                </a>
              </li>
            </div>

          ))}
          <div className='w-full px-4  active:bg-[#815003] transition-colors duration-150 rounded-xl'>
            <li className='w-full cursor-pointer pt-2 pb-2 py-1 border-b-2 border-b-[#815003]'>
              <MotionNavLink
                to='/contact'
                className={({ isActive }) =>
                  `${isActive ? 'text-[#EBCB90]' : ''} block w-full h-full`
                }>LET'S TALK
              </MotionNavLink>
            </li>
          </div>
        </ul>

      </nav>
    </header>
  )
}

export default Header