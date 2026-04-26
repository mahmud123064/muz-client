import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    return (
        <div className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20">
            <div className="mb-12 flex flex-col items-center gap-3">
                {/* Top label */}
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    What I Offer
                </span>

                {/* Main title */}
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    My <span className="text-[#02bfbf]">Services</span>
                </h2>

                {/* Animated underline */}
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>

                {/* Subtitle */}
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    Turning ideas into real-world products with clean code and
                    modern technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Full Stack Web Development */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-[#02bfbf]/10 transition-all duration-300">
                        <img
                            className="w-8 h-8"
                            src="https://i.ibb.co/7vD4L4R/web-dev.png"
                            alt="Full Stack"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                            Full Stack Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building complete web applications from front to
                            back using the MERN stack — MongoDB, Express.js,
                            React, and Node.js — delivering fast, scalable, and
                            production-ready solutions.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            React
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Node.js
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            MongoDB
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Express
                        </span>
                    </div>
                </div>

                {/* Frontend Development */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-[#02bfbf]/10 transition-all duration-300">
                        <img
                            className="w-8 h-8"
                            src="https://i.ibb.co/1mXwBPC/responsive-1.png"
                            alt="Frontend"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                            Frontend Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting pixel-perfect, responsive, and interactive
                            UIs using React.js, Next.js, Tailwind CSS, and
                            Bootstrap — ensuring a smooth experience across all
                            devices and screen sizes.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Next.js
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Tailwind
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Bootstrap
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            CSS
                        </span>
                    </div>
                </div>

                {/* Mobile App Development */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-[#02bfbf]/10 transition-all duration-300">
                        <img
                            className="w-8 h-8"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                            alt="Mobile"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                            Mobile App Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Developing cross-platform mobile applications for
                            both iOS and Android using React Native — delivering
                            native-like performance with a single codebase.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            React Native
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            iOS
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Android
                        </span>
                    </div>
                </div>

                {/* REST API Development */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-[#02bfbf]/10 transition-all duration-300">
                        <img
                            className="w-8 h-8"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                            alt="API"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                            REST API Development
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Designing and building secure, efficient, and
                            well-structured REST APIs using Node.js and
                            Express.js — powering web and mobile applications
                            with reliable back-end services.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Node.js
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Express
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            REST
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            JWT
                        </span>
                    </div>
                </div>

                {/* State Management */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="700"
                    className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-[#02bfbf]/10 transition-all duration-300">
                        <img
                            className="w-8 h-8"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                            alt="Redux"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                            State Management
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Managing complex application state efficiently using
                            Redux and Redux Toolkit — ensuring predictable data
                            flow, clean architecture, and seamless user
                            experiences in large-scale apps.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Redux
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Redux Toolkit
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Context API
                        </span>
                    </div>
                </div>

                {/* Web Maintenance */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="group relative bg-gray-900 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] transition-all duration-300 hover:-translate-y-2"
                >
                    <div className="w-14 h-14 rounded-xl bg-sky-500/10 flex items-center justify-center group-hover:bg-[#02bfbf]/10 transition-all duration-300">
                        <img
                            className="w-8 h-8"
                            src="https://i.ibb.co/7Cwxtzb/web-development.png"
                            alt="Maintenance"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-yellow-400 group-hover:text-[#02bfbf] transition-colors duration-300 mb-2">
                            Web Maintenance
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Providing ongoing support, bug fixing, performance
                            optimization, and feature updates to keep your web
                            application running smoothly, securely, and up to
                            date.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700">
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Bug Fixing
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Performance
                        </span>
                        <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-1 rounded-full">
                            Updates
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
