import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20" id="about">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    Who I Am
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    About <span className="text-[#02bfbf]">Me</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    A passionate MERN Stack Developer from Bangladesh building
                    modern web experiences.
                </p>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                {/* Left - Text */}
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                            Hello, I'm
                        </p>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Mahmud Uz{" "}
                            <span className="text-[#02bfbf]">Zaman</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            As a MERN stack developer, I possess a comprehensive
                            skill set that enables me to design and develop
                            full-stack web applications with efficiency and
                            effectiveness. The MERN stack — MongoDB, Express.js,
                            React, and Node.js — forms the backbone of my
                            development process.
                        </p>
                        <p className="text-gray-400 leading-relaxed text-sm mt-3">
                            With MongoDB I efficiently store and manage data for
                            scalable applications. Express.js empowers me to
                            build robust server-side apps, while React lets me
                            craft beautiful, interactive UIs and Node.js ties it
                            all together on the backend.
                        </p>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/Resume of Mahmud_Uz_Zaman.pdf"
                            download
                            className="px-6 py-3 bg-[#02bfbf] text-gray-900 font-semibold rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 text-sm"
                        >
                            Download CV
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 border border-[#02bfbf] text-[#02bfbf] font-semibold rounded-xl hover:bg-[#02bfbf]/10 transition-all duration-300 text-sm"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Right - Experience + Stats */}
                <div className="flex flex-col gap-6">
                    {/* Experience card */}
                    <div className="bg-gray-900 rounded-2xl p-6 shadow-[0_0px_20px_rgba(8,112,184,0.3)] flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-[#02bfbf]/10 border-2 border-[#02bfbf] flex flex-col items-center justify-center flex-shrink-0">
                            <span className="text-3xl font-bold text-[#02bfbf]">
                                3+
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                                Years
                            </span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">
                                Years of Experience
                            </h4>
                            <p className="text-gray-400 text-sm">
                                Building and shipping real-world web
                                applications using the MERN stack and modern
                                frontend tools.
                            </p>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] transition-all duration-300">
                            <span className="text-2xl font-bold text-[#02bfbf]">
                                7+
                            </span>
                            <span className="text-gray-400 text-xs mt-1">
                                Projects
                            </span>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] transition-all duration-300">
                            <span className="text-2xl font-bold text-[#02bfbf]">
                                12+
                            </span>
                            <span className="text-gray-400 text-xs mt-1">
                                Skills
                            </span>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-4 flex flex-col items-center text-center shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] transition-all duration-300">
                            <span className="text-2xl font-bold text-[#02bfbf]">
                                100%
                            </span>
                            <span className="text-gray-400 text-xs mt-1">
                                Dedication
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info cards row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-gray-900 rounded-2xl p-5 flex items-center gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-[#02bfbf]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                            Name
                        </p>
                        <p className="text-white font-semibold text-sm">
                            Mahmud Uz Zaman
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-5 flex items-center gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-[#02bfbf]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                            Email
                        </p>
                        <p className="text-white font-semibold text-sm">
                            zmahmud26@gmail.com
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-5 flex items-center gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-[#02bfbf]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                            Date of Birth
                        </p>
                        <p className="text-white font-semibold text-sm">
                            28th August 1994
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-5 flex items-center gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-[#02bfbf]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                            From
                        </p>
                        <p className="text-white font-semibold text-sm">
                            Naogaon, Bangladesh
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
