import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLocation } from "react-router-dom";

const Footer = ({ showContent }) => {

  const icons = [
    { icon: "fa-github", link: "https://github.com/kapil9562" },
    { icon: "fa-instagram", link: "https://www.instagram.com/kapil_art_official" },
    { icon: "fa-linkedin", link: "https://www.linkedin.com/in/kapil-adhikari9562" }
  ];

  const handleClick = (url) => {
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, 300);
  };

  const location = useLocation();

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
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, [showContent]);

  return (
    <footer className="text-white shadow-2xl flex flex-col justify-center items-center z-88 relative border-t border-[#FFFFFF30]">

      <img src="https://plus.unsplash.com/premium_photo-1681400038462-38b5f8aa51a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute top-0 left-0 h-full w-full opacity-50 -z-10" />

      <div className="relative z-95 backdrop-blur-2xl pb-20 w-full">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 sm:text-left py-10 px-5 md:px-20">

          {/* Contact Info */}
          <div className="font-bold">
            <h2 className="text-xl mb-4">Contact Me</h2>
            <p className="space-y-2 text-[16px] break-all whitespace-normal flex flex-col">
              <span>Email: <a href="mailto:adhikarikapil389@gmail.com" className="hover:text-white font-semibold hover:underline">adhikarikapil389@gmail.com</a></span>
              <span>Phone: <a href="tel:+918791029562" className="hover:text-white font-semibold hover:underline">+91-8791029562</a></span>
              <span>Location: <a className="hover:text-white font-semibold">Almora, Uttarakhand, India</a></span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <div className='sm:flex flex-col sm:gap-5 md:gap-10 text-[16px] sm:font-semibold justify-center items-start'>
              <div className="flex flex-col space-y-2">
                {tabs.map((path) => (
                  <div key={path}>
                    <a
                      href={path}
                      className={
                        `${isActiveSec === path.replace("/", "") ? 'underline underline-offset-4 text-orange-500' : 'relative inline-block after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-orange-500 after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:text-orange-500'} text-[#F5EBFA]`
                      }
                    >
                      {path.replace("/#", "")}
                    </a>
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
                  <div
                    key={idx}
                    onClick={() => handleClick(item.link)}
                    className="transform-gpu"
                  >
                    <div
                      className="h-12 w-12 rounded-full border-2 border-[#FC5464]
                                  flex items-center justify-center text-[#FFFFFF]
                                  hover:bg-[#FC5464] hover:text-white hover:-translate-y-1
                                  transition-all duration-300 ease-in-out cursor-pointer
                                  active:text-white active:scale-95 active:bg-[#FC5464]"
                    >
                      <i className={`fa-brands ${item.icon} text-2xl`}></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              className="bg-linear-to-b from-pink-500 to-orange-500 text-white inline-block px-4 py-2 rounded-lg shadow-lg shadow-white/20 font-semibold w-fit cursor-pointer active:scale-95 transition-transform duration-300 will-change-transform"
            >
              <a href='./resume.pdf' download="resume.pdf">Download CV</a>
            </button>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-[#603b03] pt-5 text-center text-[#ffffff] sm:text-md w-full py-10 px-5 md:px-20">
          © 2025 Kapil Adhikari. Made with ❤️ and ☕ in India.
        </div>
      </div>
    </footer>

  );
};

export default Footer;
