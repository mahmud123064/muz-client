import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Socialicon = () => {
    return (
        <div className="flex flex-col top-[35%] left-0 absolute">
            <ul>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-lg duration-300">
                    <Link to = '' className="flex justify-between items-center w-full text-white">LinkedIn<FaLinkedin size={30}></FaLinkedin></Link>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-lg duration-300">
                    <Link to = '' className="flex justify-between items-center w-full text-white">Github<FaGithub size={30}></FaGithub></Link>
                </li>
                <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-lg duration-300">
                    <Link to = '' className="flex justify-between items-center w-full text-white">Twitter<FaTwitter size={30}></FaTwitter></Link>
                </li>
            </ul>
        </div>
    );
};

export default Socialicon;