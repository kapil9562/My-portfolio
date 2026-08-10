export const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9 } },
};

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.5 } },
};

export const Container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
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