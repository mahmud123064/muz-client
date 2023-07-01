import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    return (
        <div className="mx-16 md:mx-28 lg:mx-28 mb-12">
            <div>
                <div className="md:w-3/12 mx-auto text-center">
                    <p className="text-amber-600 mb-2 text-2xl uppercase">Services</p>
                    <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="p-4 hover:shadow-2xl hover:rounded-lg" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img className="w-16 mx-auto mb-5" src="../../../../public/web_dev.png" />
                        <h3 className="text-center mb-3 text-2xl text-yellow-400">Web Development</h3>
                        <p className="text-justify">Web development is my passion and expertise, and it empowers my to bring ideas to life through code. With my mastery of front-end technologies like HTML, CSS, and JavaScript, transform designs into interactive interfaces that captivate users.</p>
                    </div>
                    <div className="p-4 hover:shadow-2xl hover:rounded-lg" data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img className="w-16 mx-auto mb-5" src="../../../../public/responsive (1).png" />
                        <h3 className="text-center mb-3 text-2xl text-yellow-400">Responsive Development</h3>
                        <p className="text-justify">Responsive web design is an essential concept in modern web development, and as a web developer, it is crucial to understand and implement it effectively. In today's digital landscape, users access websites using a wide range of devices such as desktop computers, laptops, tablets, and smartphones. </p>
                    </div>
                    <div className="p-4 hover:shadow-2xl hover:rounded-lg" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        <img className="w-16 mx-auto mb-5" src="../../../../public/web-development.png" />
                        <h3 className="text-center mb-3 text-2xl text-yellow-400">Web Maintenance</h3>
                        <p className="text-justify">Web maintenance is a crucial aspect of being a web developer, as it involves the ongoing management, monitoring, and updates required to keep a website running smoothly and effectively. As a web developer, I understand the importance of providing a seamless user experience and ensuring that websites remain secure, up-to-date.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;