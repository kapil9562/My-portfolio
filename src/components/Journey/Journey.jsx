import React from 'react';
import { motion } from "framer-motion";
import {
    Container,
    springUp,
    slideInRight,
    slideInLeft
} from "/src/animation";
import Pointer from '../../assets/pointer.json';
import Lottie from 'lottie-react';

// 1. Define your data here
const timelineData = [
    {
        id: 1,
        title: "Soban Singh Jeena University Almora, Uttarakhand",
        date: "2024 - Present",
        description:
            "Studying Bachelor of Computer Applications (BCA) with focus on React.js, MERN stack, backend development, and modern web technologies."
    },
    {
        id: 2,
        title: "Vivekanand Inter College Almora, Uttarakhand",
        description: "P.C.M - 11 & 12",
        date: "2024"
    },
    {
        id: 3,
        title: "Vivekanand Inter College Almora, Uttarakhand",
        description: "High School",
        date: "2022"
    },
    {
        id: 4,
        title: "Born",
        company: "",
        date: "2007",
        description: "",
    },
];

const isMd = window.matchMedia("(min-width: 640px)").matches;

const Journey = () => {
    return (
        <section
            id="journey"
            aria-label="Education and career journey"
            className="flex flex-col md:flex-row py-15"
        >
            <div className="flex flex-col justify-center items-center w-full">

                {/* Header */}
                <motion.span
                    variants={springUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-base tracking-wider uppercase bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-bricolage"
                >
                    my journey
                </motion.span>
                <motion.h3
                    className="md:text-6xl sm:text-4xl text-3xl w-full flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent transform-gpu will-change-transform pb-2 decoration-2 font-bricolage relative gap-2 mt-2 mb-16"
                    variants={springUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <span className="text-[#f1f1f5]">The</span> Timeline
                    <div className="absolute top-full bg-linear-to-r from-pink-500 to-orange-500 h-1 w-15 rounded-r-full rounded-l-full" />
                </motion.h3>

                {/* Timeline Container */}
                <div className="relative mx-auto w-full">

                    {/* The Vertical Line */}
                    <div className="absolute sm:left-1/2 left-10 transform sm:-translate-x-1/2 h-full w-1 bg-gray-500"></div>

                    {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.id}
                                className={`will-change-transform transform-gpu relative w-full mb-12 flex items-center flex-row  ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
                                variants={Container}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                {/* Empty space to push content to left or right */}
                                <div className="sm:flex-1"></div>

                                {/* The Center Dot */}
                                {item.id !== 1 ?
                                    <div className="absolute sm:left-1/2 left-10 transform -translate-x-1/2 flex items-center justify-center z-10">
                                        <div className={`w-5 h-5 rounded-full bg-green-500`}></div>
                                    </div>
                                    :
                                    <div className="absolute sm:left-1/2 left-10 transform -translate-x-1/2 flex items-center justify-center z-10">
                                        <Lottie animationData={Pointer} loop={true} className='h-15 w-15' />
                                    </div>
                                }

                                {/* The Content Card */}
                                <motion.div
                                    className="ml-5 w-full sm:w-1/2 pl-10 sm:px-10 will-change-transform transform-gpu"
                                    variants={isMd ? isEven ? slideInLeft : slideInRight : slideInRight}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className={`sm:p-6 pl-6 pr-2 rounded-lg flex flex-col justify-center ${isEven ? "sm:items-end" : "sm:items-start"} w-full`}>

                                        {/* Date Badge */}
                                        <span className="inline-block font-normal tracking-wider text-[#ffffff80]  uppercase rounded-full mb-1 font-instrumentSans">
                                            {item.date}
                                        </span>

                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className={`md:text-3xl sm:text-2xl text-xl font-bricolage font-medium text-[#FFFFFFBF] ${isEven ? "sm:text-end" : "sm:text-start"}`}>
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Company/Location */}
                                        <p className={`text-[#AAAAAA] font-normal mb-3 whitespace-wrap ${isEven ? 'sm:text-end' : 'sm:text-start'} font-instrumentSans`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Journey;