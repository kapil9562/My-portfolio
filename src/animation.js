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

export const navContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};