import React from "react";
import img1 from "../../../../public/animation_banner.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const resumeUrl = "Resume of Mahmud_Uz_Zaman.pdf";
const Banner = () => {
    const handleDownload = (url) => {
        const angcor = document.createElement("a");
        angcor.href = url;
        angcor.setAttribute("download", "Resume of Mahmud_Uz_Zaman.pdf");
        document.body.appendChild(angcor);
        angcor.click();
        angcor.remove();
    };

    return (
        <div className="mb-20">
            <section
                id="banner"
                className="min-h-screen flex items-center bg-slate-900 overflow-hidden relative"
            >
                {/* Background decorative blobs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#02bfbf]/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-28 py-24 lg:py-0">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
                        {/* Left */}
                        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                            {/* Badge */}
                            <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-full">
                                <span className="w-2 h-2 bg-[#02bfbf] rounded-full animate-pulse"></span>
                                <span className="text-gray-300 text-sm">
                                    Available for Hire
                                </span>
                            </div>

                            {/* Greeting */}
                            <div>
                                <p className="text-gray-400 text-lg mb-2 tracking-wide">
                                    Hey! I'm
                                </p>
                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-3">
                                    <span className="text-[#02bfbf]">
                                        {" "}
                                        Mahmud{" "}
                                    </span>{" "}
                                    Uz Zaman
                                </h1>

                                {/* Typewriter */}
                                <div className="text-xl md:text-2xl font-semibold text-purple-400 h-10">
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 80,
                                            strings: [
                                                "MERN Stack Developer",
                                                "React & Next.js Developer ",
                                                "Full Stack Developer",
                                                "From Naogaon, Bangladesh",
                                            ],
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Short bio */}
                            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                                I build fast, scalable, and modern web
                                applications using the MERN stack. Passionate
                                about clean code, great UI, and delivering
                                real-world solutions.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => handleDownload(resumeUrl)}
                                    className="px-6 py-3 bg-[#02bfbf] text-gray-900 font-semibold rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 text-sm shadow-[0_0px_20px_rgba(2,191,191,0.4)]"
                                >
                                    Download Resume
                                </button>
                                <a
                                    href="#contact"
                                    className="px-6 py-3 border border-[#02bfbf] text-[#02bfbf] font-semibold rounded-xl hover:bg-[#02bfbf]/10 transition-all duration-300 text-sm"
                                >
                                    Hire Me
                                </a>
                            </div>

                            {/* Social links */}
                            <div className="flex items-center gap-4 mt-2">
                                <span className="text-gray-500 text-xs uppercase tracking-widest">
                                    Find me on
                                </span>
                                <div className="w-8 h-[1px] bg-gray-600"></div>
                                <div className="flex gap-3">
                                    <a
                                        href="https://github.com/mahmud123064"
                                        target="_blank"
                                        className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#02bfbf] hover:border-[#02bfbf] transition-all duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/md-mahmud-uz-zaman-a853a782/"
                                        target="_blank"
                                        className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#02bfbf] hover:border-[#02bfbf] transition-all duration-300"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="mailto:zmahmud26@gmail.com"
                                        className="w-9 h-9 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#02bfbf] hover:border-[#02bfbf] transition-all duration-300"
                                    >
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
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex-1 flex justify-center lg:justify-end relative">
                            {/* Decorative rings */}
                            <div
                                className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-[#02bfbf]/20 animate-spin"
                                style={{ animationDuration: "20s" }}
                            ></div>
                            <div
                                className="absolute w-[280px] h-[280px] md:w-[370px] md:h-[370px] rounded-full border border-purple-500/20 animate-spin"
                                style={{
                                    animationDuration: "15s",
                                    animationDirection: "reverse",
                                }}
                            ></div>

                            {/* Lottie */}
                            <div className="w-[280px] md:w-[380px] lg:w-[430px] relative z-10">
                                <Lottie animationData={img1} />
                            </div>

                            {/* Floating badge - React */}
                            <div
                                className="absolute top-4 left-4 md:top-8 md:left-0 bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg z-20"
                                style={{
                                    animation:
                                        "floatUp 3s ease-in-out infinite",
                                }}
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                    className="w-5 h-5"
                                    alt="React"
                                />
                                <span className="text-white text-xs font-medium">
                                    React.js
                                </span>
                            </div>

                            {/* Floating badge - Node */}
                            <div
                                className="absolute bottom-8 left-0 md:bottom-12 md:-left-4 bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg z-20"
                                style={{
                                    animation:
                                        "floatDown 4s ease-in-out infinite",
                                }}
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                    className="w-5 h-5"
                                    alt="Node"
                                />
                                <span className="text-white text-xs font-medium">
                                    Node.js
                                </span>
                            </div>

                            {/* Floating badge - MongoDB */}
                            <div
                                className="absolute top-1/4 -right-2 md:-right-4 bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg z-20"
                                style={{
                                    animation:
                                        "floatSide 3.5s ease-in-out infinite",
                                }}
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                                    className="w-5 h-5"
                                    alt="MongoDB"
                                />
                                <span className="text-white text-xs font-medium">
                                    MongoDB
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
