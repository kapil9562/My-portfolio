export const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const fadeInDiagonalDownLeft = {
  hidden: { opacity: 0, x: -30, y: -30 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9 } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export const fadeInDiagonalDownRight = {
  hidden: { opacity: 0, x: 30, y: -30 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.5 } },
};

export const Container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};


export const bounceIn = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { 
        opacity: 1, 
        scale: [0.5, 1.2, 0.9, 1], 
        transition: { duration: 0.8, ease: "easeOut" } 
    },
};

export const rotateIn = {
    hidden: { opacity: 0, rotate: -180 },
    show: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const slideInLeft = {
    hidden: { x: -200, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const slideInRight = {
    hidden: { x: 200, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export const springUp = {
    hidden: { y: 50, opacity: 0 },
    show: { 
        y: 0, 
        opacity: 1, 
        transition: { type: "spring", stiffness: 100, damping: 10 } 
    },
};

export const shake = {
    hidden: { x: 0 },
    show: { 
        x: [0, -10, 10, -10, 10, 0], 
        transition: { duration: 0.6 } 
    },
};

export const fadeInUpBig = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export const fadeOut = {
    hidden: { opacity: 1 },
    show: { opacity: 0, transition: { duration: 0.5 } },
};
