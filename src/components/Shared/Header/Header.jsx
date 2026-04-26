import { Link } from "react-router-dom";
import logo from "../../../../public/My_logo.png";
import { useState } from "react";

const Header = () => {
    const [active, setActive] = useState("home");

    const navItems = [
        { id: "home", label: "Home", href: "#banner" },
        { id: "about", label: "About", href: "#about" },
        { id: "skills", label: "Skills", href: "#skills" },
        { id: "projects", label: "Projects", href: "#projects" },
        { id: "blog", label: "Blog", href: "/blog" },
    ];

    const navOptions = (
        <>
            {navItems.map((item) => (
                <li key={item.id}>
                    <a
                        href={item.href}
                        onClick={() => setActive(item.id)}
                        className={`transition-colors duration-300 text-sm uppercase tracking-wider font-medium
                            ${
                                active === item.id
                                    ? "text-[#02bfbf] border-b-1 border-[#02bfbf]"
                                    : "text-gray-300 hover:text-[#02bfbf]"
                            }`}
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </>
    );

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
                <div className="navbar text-white flex items-center mx-auto max-w-screen-xl px-4">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[999] p-3 shadow-xl bg-slate-900 border border-gray-700 rounded-2xl w-52 flex flex-col gap-1"
                            >
                                {navOptions}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost normal-case">
                            <img
                                className="w-20 md:w-24 mix-blend-lighten"
                                src={logo}
                                alt="logo"
                                style={{
                                    filter: "brightness(1.1) contrast(1.1) drop-shadow(0 0 6px #02bfbf)",
                                }}
                            />
                        </Link>
                    </div>

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-2">
                            {navOptions}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        <a
                            href="#contact"
                            className="px-5 py-2.5 bg-[#02bfbf] text-gray-900 font-bold text-sm rounded-xl hover:bg-[#02bfbf]/80 transition-all duration-300 shadow-[0_0px_20px_rgba(2,191,191,0.3)] hover:shadow-[0_0px_30px_rgba(2,191,191,0.5)]"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
            <div className="h-16"></div>
        </>
    );
};

export default Header;
