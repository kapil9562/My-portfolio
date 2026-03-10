import React from 'react';
import { CheckCircle, Briefcase, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { FaHandsHoldingChild } from "react-icons/fa6";

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

const Journey = () => {
    return (
        <div className="min-h-screen pt-20 w-full">
            <div className="flex flex-col justify-center items-center w-full">

                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-6xl underline w-fit flex justify-center items-center font-bold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent ">
                        JOURNEY
                    </h2>
                </div>

                {/* Timeline Container */}
                <div className="relative mx-auto w-full">

                    {/* The Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-500"></div>

                    {timelineData.map((item, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={item.id}
                                className={`relative w-full mb-12 flex flex-col md:flex-row items-center  ${isEven ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Empty space to push content to left or right */}
                                <div className="flex-1"></div>

                                {/* The Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full border-4 border-orange-600 shadow-sm z-10">
                                    <div className={`w-3 h-3 rounded-full bg-orange-500`}></div>
                                </div>

                                {/* The Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-10">
                                    <div className={` p-6 rounded-lg flex flex-col justify-center ${isEven? "items-end": "items-start"} w-full`}>

                                        {/* Date Badge */}
                                        <span className="inline-block font-normal tracking-wider text-[#ffffff80]  uppercase rounded-full mb-1">
                                            {item.date}
                                        </span>

                                        {/* Icon & Title */}
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className={`text-3xl font-medium text-[#FFFFFFBF] font-sans ${isEven? "text-end" : "text-start"}`}>
                                                {item.title}
                                            </h3>
                                        </div>

                                        {/* Company/Location */}
                                        <p className={`text-[#AAAAAA] font-normal mb-3 whitespace-wrap ${isEven? 'text-end' : 'text-start'}`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Journey;