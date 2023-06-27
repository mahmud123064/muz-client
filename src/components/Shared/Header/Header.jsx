import { Link } from "react-router-dom";

const Header = () => {

    const navOptions = <>
     <li><Link>Home</Link></li>
     <li><Link>About</Link></li>
     <li><Link>Contact</Link></li>
     <li><Link>Gallery</Link></li>
     <li><Link>Blog</Link></li>
    </>
    return (
        <div className="">
            <div className="navbar bg-slate-800 text-white flex items-center fixed top-0  max-w-screen-xl mx-auto z-10 transition-all duration-300 ">
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
                    <Link className="btn btn-warning">CONTACT ME</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;