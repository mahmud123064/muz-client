import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    const projects = [
        {
            id: 1,
            number: "01",
            title: "Address Bangladesh",
            description:
                "A responsive NGO website built with Next.js 16 and Tailwind CSS, featuring dark/light theme, EN/BN language switching, dynamic project pages, filterable gallery, and SEO optimization.",
            image: "https://res.cloudinary.com/dhksln9ks/image/upload/v1777219182/screencapture-addressbangladesh-org-2026-04-26-20_41_18_d20qyd.png",
            alt: "Sports project",
            liveUrl: "https://www.addressbangladesh.org/",
            duration: "600",
            features: [
                "Built a responsive NGO website with Next.js 16, dark/light theme, and bilingual (EN/BN) support.",
                "Implemented dynamic project pages, filterable gallery with lightbox, and Swiper testimonial slider.",
                "SEO-optimized with static generation, Open Graph metadata, and a centralized TypeScript data layer.",
            ],
            techTags: ["Nextjs", "Firebase", "MongoDB"],
        },
        {
            id: 2,
            number: "02",
            title: "Al Hub Job Portal",
            description:
                "A job listing platform with category filtering, detailed job views, application system and a statistics dashboard.",
            image: "https://res.cloudinary.com/dhksln9ks/image/upload/v1777357129/screencapt_pzonfe.png",
            alt: "Alhub project",
            liveUrl: "https://snazzy-boba-522246.netlify.app/",
            duration: "700",
            features: [
                "Featured jobs section",
                "Remote or full-time category filter",
                "Statistics & Blog section",
            ],
            techTags: ["React", "Tailwind", "Node.js"],
        },
        {
            id: 3,
            number: "03",
            title: "Toy Truck Store",
            description:
                "An e-commerce toy store where users can add, manage, and browse toys with a personalized dashboard and top-selling section.",
            image: "https://res.cloudinary.com/dhksln9ks/image/upload/v1777357133/toy-truck_wbwf9w.png",
            alt: "Toy project",
            liveUrl: "https://toy-truck-7f908.web.app/",
            duration: "800",
            features: [
                "Login & Registration system",
                "User can add & manage toys",
                "Top selling section & Blog",
            ],
            techTags: ["MERN", "Firebase", "JWT"],
        },
    ];

    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20" id="projects">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    What I've Built
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    My <span className="text-[#02bfbf]">Projects</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    A collection of my best work built with React, MERN stack,
                    and modern web technologies.
                </p>
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        data-aos="fade-up"
                        data-aos-duration={project.duration}
                        className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                    >
                        {/* Image */}
                        <div className="relative h-52 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.alt}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>

                            {/* Live badge */}
                            <div className="absolute top-3 right-3">
                                <span className="flex items-center gap-1 bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                    Live
                                </span>
                            </div>

                            {/* Project number */}
                            <div className="absolute top-3 left-3">
                                <span className="text-[#02bfbf] text-xs font-bold tracking-widest bg-gray-900/70 px-2 py-1 rounded-full">
                                    {project.number}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-4">
                            <div>
                                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#02bfbf] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {project.description}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="flex flex-col gap-1">
                                {project.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2 text-gray-400 text-sm"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#02bfbf] flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Tech tags + Visit link */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-700 mt-auto">
                                <div className="flex gap-2 flex-wrap">
                                    {project.techTags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    to={project.liveUrl}
                                    target="_blank"
                                    className="flex items-center gap-1 text-sm text-[#02bfbf] hover:text-white font-medium transition-colors duration-200"
                                >
                                    Visit
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
