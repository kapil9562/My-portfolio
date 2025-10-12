import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { motion } from "framer-motion";
import { fadeInDown, fadeInLeft, fadeInRight, navContainer } from "/src/animation";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {

  const icons = [
    { icon: "fa-github", link: "https://github.com/kapil9562" },
    { icon: "fa-instagram", link: "https://www.instagram.com/kapil_art_official" },
    { icon: "fa-linkedin", link: "https://www.linkedin.com/in/kapil9562" }
  ];

  const handleClick = (url) => {
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 300);
  };

  const tabs = ["/", "/About", "/Skills", "/Projects", "/Experiences"];

  return (
    <footer className="bg-[#432901] text-white py-10 px-5 md:px-20 shadow-2xl flex flex-col justify-center items-center z-100">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 sm:text-left">

        {/* Contact Info */}
        <div className="font-bold">
          <h2 className="text-xl mb-4">Contact Me</h2>
          <p className="space-y-2 text-[16px] break-all whitespace-normal">
            <span>Email: <a href="adhikarikapil389@gmail.com" className="hover:text-white font-semibold hover:underline">adhikarikapil389@gmail.com</a></span>
            <span>Phone: <a href="tel:+918791029562" className="hover:text-white font-semibold hover:underline">+91-8791029562</a></span>
            <span>Location: <a className="hover:text-white font-semibold">Almora, Uttarakhand, India</a></span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className='sm:flex flex-col sm:gap-5 md:gap-10 text-[16px] sm:font-semibold justify-center items-start'>
            <div className="flex flex-col space-y-2">
              {tabs.map((path, index) => (
                <div key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${isActive ? 'underline underline-offset-4 text-[#ae6d05]' : 'relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-white after:w-0 after:transition-all after:duration-500 hover:after:w-full'}`
                    }
                  >
                    {path === "/" ? "Home" : path.replace("/", "")}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social & CTA */}
        <div className="flex flex-col sm:items-start">
          <h2 className="text-xl font-bold mb-4">Connect & Download</h2>
          <div className="flex space-x-4 mb-4">
            <div
              className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 lg:gap-2">
              {icons.map((item, idx) => (
                <div key={idx} className="h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 border-[#6D4300]
                 flex items-center justify-center text-white
                 hover:bg-[#6D4300] hover:scale-110 
                 transition-all duration-300 ease-in-out cursor-pointer active:text-white active:scale-95 active:bg-[#6D4300] active:duration-100"
                  onClick={() => handleClick(item.link)}>
                  <i className={`fa-brands ${item.icon} md:text-2xl`}></i>
                </div>
              ))}
            </div>
          </div>
          <button
            className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 shadow-lg shadow-yellow-500/50 font-semibold w-fit cursor-pointer active:bg-[#6D4300] transition:colors duration-100 border-yellow-500 border-2 active:text-white"
          >
            <a href='./resume.pdf' download="resume.pdf">Download CV</a>
          </button>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#603b03] pt-5 text-center text-[#ffffff] sm:text-md w-full">
        © 2025 Kapil Adhikari. Made with ❤️ and ☕ in India.
      </div>
    </footer>

  );
};

export default Footer;
