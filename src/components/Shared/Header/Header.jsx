import { Link } from "react-router-dom";
import logo from '../../../../public/My_logo.png'

const Header = () => {

    const navOptions = <>
        <li><a className="hover:text-teal-400">Home</a></li>
        <li><a className="hover:text-teal-400" href="#about">About</a></li>
        <li><a className="hover:text-teal-400" href="#contact">Contact</a></li>
        <li><a className="hover:text-teal-400" href="#projects">Projects</a></li>
        <li><a className="hover:text-teal-400" href="#skills">Skills</a></li>
        {/* <li><a className="hover:text-teal-400">Gallery</a></li> */}
        <li><a className="hover:text-teal-400" href="/">Blog</a></li>
    </>


    return (
       
            <div className="navbar bg-slate-800 text-white flex items-center top-0 mx-auto max-w-screen-xl	 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-gray-500">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to= '/' className="btn btn-ghost normal-case text-xl">
                        <img className="w-24" src = {logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 uppercase text-white ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link className="btn btn-warning">CONTACT ME</Link> */}
                    <a href="#contact" className = "relative px-5 py-2 font-medium text-white group shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                        <span class="relative">CONTACT ME</span>
                    </a>
                </div>
            </div>
        
    );
};

export default Header;