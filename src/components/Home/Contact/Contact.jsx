import React, { useRef } from "react";
import contact from "../../../assets/contact-us.json";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your email",
            showConfirmButton: false,
            timer: 1500,
        });
        reset();
        e.preventDefault();
        emailjs
            .sendForm(
                "service_t0gez6h",
                "template_ksydh1v",
                form.current,
                "mgTsmNEthVNxhKcCu",
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };

    return (
        <section className="px-4 sm:px-8 md:px-16 lg:px-28 mb-20" id="contact">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center gap-3">
                <span className="text-xs uppercase tracking-[4px] text-gray-400 font-medium">
                    Get In Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
                    Contact <span className="text-[#02bfbf]">Me</span>
                </h2>
                <div className="flex items-center gap-2 mt-1">
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-3 h-3 rounded-full border-2 border-[#02bfbf]"></div>
                    <div className="w-12 h-[3px] bg-[#02bfbf] rounded-full"></div>
                    <div className="w-8 h-[2px] bg-gray-600 rounded-full"></div>
                </div>
                <p className="text-gray-400 text-sm text-center max-w-md mt-1">
                    Have a project in mind or just want to say hi? My inbox is
                    always open.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left - Info + Lottie */}
                <div className="flex flex-col gap-6">
                    {/* Lottie */}
                    <div className="w-full max-w-sm mx-auto lg:max-w-full">
                        <Lottie animationData={contact} />
                    </div>

                    {/* Contact info cards */}
                    {/* <div className="flex flex-col gap-3">
                        <a
                            href="mailto:zmahmud26@gmail.com"
                            className="group flex items-center gap-4 bg-gray-900 rounded-2xl p-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#02bfbf]/20 transition-all duration-300">
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
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                                    Email
                                </p>
                                <p className="text-white font-semibold text-sm">
                                    zmahmud26@gmail.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/"
                            target="_blank"
                            className="group flex items-center gap-4 bg-gray-900 rounded-2xl p-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#02bfbf]/20 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-[#02bfbf]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                                    GitHub
                                </p>
                                <p className="text-white font-semibold text-sm">
                                    github.com/mahmud
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            className="group flex items-center gap-4 bg-gray-900 rounded-2xl p-4 shadow-[0_0px_20px_rgba(8,112,184,0.3)] hover:shadow-[0_0px_25px_rgba(2,191,191,0.4)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#02bfbf]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#02bfbf]/20 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-[#02bfbf]"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-xs uppercase tracking-wider mb-0.5">
                                    LinkedIn
                                </p>
                                <p className="text-white font-semibold text-sm">
                                    linkedin.com/in/mahmud
                                </p>
                            </div>
                        </a>
                    </div> */}
                </div>

                {/* Right - Form */}
                <div className="w-full">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-[0_0px_30px_rgba(8,112,184,0.3)] flex flex-col gap-5"
                    >
                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs uppercase tracking-wider">
                                Your Name
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. John Doe"
                                name="from_name"
                                required
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs uppercase tracking-wider">
                                Your Email
                            </label>
                            <input
                                type="email"
                                placeholder="e.g. john@email.com"
                                name="from_email"
                                required
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-gray-400 text-xs uppercase tracking-wider">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                required
                                rows={5}
                                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-[#02bfbf] transition-all duration-300 placeholder-gray-500 resize-none w-full"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-[#02bfbf] text-gray-900 font-bold rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 text-sm shadow-[0_0px_20px_rgba(2,191,191,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)] flex items-center justify-center gap-2"
                        >
                            Send Message
                            {/* <svg
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
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg> */}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
