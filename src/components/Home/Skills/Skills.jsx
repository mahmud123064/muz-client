import React from "react";
import Lottie from "lottie-react";
import HTMLAnimation from "../../../assets/New/HTML.json";
import CSSAnimation from "../../../assets/New/CSS.json";
import JSAnimation from "../../../assets/New/JS.json";
import ReactAnimation from "../../../assets/New/React.json";
import NodeJsAnimation from "../../../assets/New/nodeJS.json";
import MongoAnimation from "../../../assets/New/Mongo.json";

const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "Next.JS",
            description:
                "Experienced in building server-side rendered and statically generated apps using Next.js.",
            badge: "Framework",
            badgeColor: "bg-green-500/20 text-green-400",
            duration: "900",
            type: "image",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            iconStyle: { filter: "invert(1)" },
        },
        {
            id: 2,
            name: "React.JS",
            description:
                "Skilled in developing interactive and scalable user interfaces using the React JavaScript library.",
            badge: "Framework",
            badgeColor: "bg-green-500/20 text-green-400",
            duration: "800",
            type: "lottie",
            icon: ReactAnimation,
        },
        {
            id: 3,
            name: "React Native",
            description:
                "Building cross-platform mobile applications for iOS and Android using React Native.",
            badge: "Mobile",
            badgeColor: "bg-green-500/20 text-green-400",
            duration: "600",
            type: "image",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            id: 4,
            name: "JavaScript",
            description:
                "Proficient in using JavaScript to create interactive and dynamic elements on web pages.",
            badge: "Language",
            badgeColor: "bg-purple-500/20 text-purple-400",
            duration: "600",
            type: "lottie",
            icon: JSAnimation,
        },
        {
            id: 5,
            name: "TypeScript",
            description:
                "Experienced in using TypeScript for type-safe and scalable JavaScript application development.",
            badge: "Language",
            badgeColor: "bg-purple-500/20 text-purple-400",
            duration: "700",
            type: "image",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
         {
            id: 6,
            name: "Redux",
            description:
                "Proficient in managing complex application state using Redux and Redux Toolkit.",
            badge: "State",
            badgeColor: "bg-green-500/20 text-green-400",
            duration: "700",
            type: "image",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
            id: 7,
            name: "Node.JS",
            description:
                "Experienced in building server-side applications and APIs using Node.js for efficient back-end development.",
            badge: "Backend",
            badgeColor: "bg-orange-500/20 text-orange-400",
            duration: "800",
            type: "lottie",
            icon: NodeJsAnimation,
        },
        {
            id: 8,
            name: "MongoDB",
            description:
                "Proficient in working with MongoDB, a NoSQL database, for storing and retrieving data in web applications.",
            badge: "Backend",
            badgeColor: "bg-orange-500/20 text-orange-400",
            duration: "900",
            type: "lottie",
            icon: MongoAnimation,
        },
        {
            id: 9,
            name: "Tailwind",
            description:
                "Experienced in using Tailwind CSS framework for efficient and rapid UI development.",
            badge: "Frontend",
            badgeColor: "bg-sky-500/20 text-sky-400",
            duration: "800",
            type: "image",
            icon: "https://i.postimg.cc/nhSdrS5F/Tailwind.png",
        },
        {
            id: 10,
            name: "Bootstrap",
            description:
                "Proficient in utilizing Bootstrap framework for responsive and mobile-friendly web design.",
            badge: "Frontend",
            badgeColor: "bg-sky-500/20 text-sky-400",
            duration: "900",
            type: "image",
            icon: "https://i.postimg.cc/90XTGCRv/Bootstrap.png",
        },
        {
            id: 11,
            name: "HTML",
            description:
                "Proficient in creating structured and semantically meaningful web pages.",
            badge: "Frontend",
            badgeColor: "bg-sky-500/20 text-sky-400",
            duration: "600",
            type: "lottie",
            icon: HTMLAnimation,
        },
        {
            id: 12,
            name: "CSS",
            description:
                "Skilled in designing and styling web pages, enhancing visual appeal and user experience.",
            badge: "Frontend",
            badgeColor: "bg-sky-500/20 text-sky-400",
            duration: "700",
            type: "lottie",
            icon: CSSAnimation,
        },
        
       
    ];
    return (
        <div id="skills" className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20">
            <div className="mb-12 flex flex-col items-center gap-3">
                {/* Top label */}
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    What I Know
                </span>

                {/* Main title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    My <span className="text-[#02bfbf]">Skills</span>
                </h2>

                {/* Decorative underline */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    A growing set of tools and technologies I use to build
                    modern, scalable web applications.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skills.map((skill) => (
                    <div
                        key={skill.id}
                        data-aos="fade-up"
                        data-aos-duration={skill.duration}
                        className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col items-center text-center gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center ring-2 ring-sky-500 group-hover:ring-[#02bfbf] transition-all duration-300">
                            {skill.type === "lottie" ? (
                                <Lottie
                                    animationData={skill.icon}
                                    className="w-14 h-14"
                                />
                            ) : (
                                <img
                                    className="w-12 h-12"
                                    src={skill.icon}
                                    alt={skill.name}
                                    style={skill.iconStyle || {}}
                                />
                            )}
                        </div>

                        {/* Text */}
                        <div>
                            <h1 className="text-xl font-bold text-sky-500 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                                {skill.name}
                            </h1>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {skill.description}
                            </p>
                        </div>

                        {/* Badge */}
                        <span
                            className={`absolute top-3 right-3 text-xs px-2 py-1 rounded-full ${skill.badgeColor}`}
                        >
                            {skill.badge}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
