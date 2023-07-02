import { Link } from "react-router-dom";

const Header = () => {

    const navOptions = <>
        <li><Link>Home</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Gallery</Link></li>
        <li><Link>Blog</Link></li>
    </>

    // navbar absolute z-10  md:max-w-6xl mx-auto

    return (
        <div className="">
            <div className="navbar bg-slate-800 text-white flex absolute items-center top-0   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase text-white">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 uppercase text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link className="btn btn-warning">CONTACT ME</Link> */}
                    <Link to = "" className = "relative px-5 py-2 font-medium text-white group shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                        <span class="relative">CONTACT ME</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;