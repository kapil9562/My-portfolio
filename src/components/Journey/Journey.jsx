import React from 'react';
import { motion } from "framer-motion";
import {
    Container,
    springUp,
    slideInRight,
    slideInLeft
} from "/src/animation";

// 1. Define your data here
const timelineData = [
    {
        id: 1,
        title: "Soban Singh Jeena University Almora, Uttarakhand",
        date: "2024 - Present",
        description: "Bachelor of Computer Applications."
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
        <div className="flex flex-col md:flex-row pb-5 min-h-[calc(100dvh-84px)]">
            <div className="flex flex-col justify-center items-center w-full">

                {/* Header */}
                <motion.div
                    className="mb-16 will-change-transform transform-gpu"
                    variants={springUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <h2 className="md:text-6xl text-5xl underline w-fit flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent pb-4 underline-offset-4 decoration-2">
                        JOURNEY
                    </h2>
                </motion.div>

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
                                viewport={{ once: false, amount: 0.4 }}
                            >
                                {/* Empty space to push content to left or right */}
                                <div className="sm:flex-1"></div>

                                {/* The Center Dot */}
                                <div className="absolute sm:left-1/2 left-10 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-orange-600 shadow-sm z-10">
                                    <div className={`w-3 h-3 rounded-full bg-orange-500`}></div>
                                </div>

                                {/* The Content Card */}
                                <motion.div
                                    className="ml-5 w-full sm:w-1/2 pl-10 sm:px-10 will-change-transform transform-gpu"
                                    variants={isMd ? isEven ? slideInLeft : slideInRight : slideInRight}
                                    viewport={{ once: false, amount: 0.4 }}
                                >
                                    <div className={`sm:p-6 pl-6 pr-2 rounded-lg flex flex-col justify-center ${isEven ? "sm:items-end" : "sm:items-start"} w-full`}>

                                        {/* Date Badge */}
                                        <span className="inline-block font-normal tracking-wider text-[#ffffff80]  uppercase rounded-full mb-1">
                                            {item.date}
                                        </span>

                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className={`md:text-3xl sm:text-2xl text-xl font-medium text-[#FFFFFFBF] font-sans ${isEven ? "sm:text-end" : "sm:text-start"}`}>
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Company/Location */}
                                        <p className={`text-[#AAAAAA] font-normal mb-3 whitespace-wrap ${isEven ? 'sm:text-end' : 'sm:text-start'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Journey;