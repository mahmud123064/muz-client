import Socialicon from "../../Socialicon/Socialicon";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Socialicon></Socialicon>
           <Services></Services>
           <About></About>
           <Skills></Skills>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;