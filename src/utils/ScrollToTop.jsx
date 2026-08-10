import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollToTop = () => {
  const lenis = useLenis();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = ({ scroll }) => {
      setShow(scroll > 100);
    };

    lenis.on("scroll", handleScroll);

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  const handleClick = () => {
    lenis.scrollTo(0, {
      duration: 1.5,
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`text-gray-100 p-2.5 rounded-full border-2 border-gray-800/60 bg-black cursor-pointer hover:text-[#f0426a] transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <IoArrowUpOutline
        size={25}
        className="pointer-events-none"
      />
    </div>
  );
};

export default ScrollToTop;