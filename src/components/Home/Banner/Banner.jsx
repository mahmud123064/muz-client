import React from 'react';
import img1 from "../../../../public/my_picture-removebg-preview.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const resumeUrl = 'Resume of Mahmud_Uz_Zaman.pdf'
const Banner = () => {

    const handleDownload = (url) => {
        const angcor = document.createElement('a')
        angcor.href = url
        angcor.setAttribute('download', "Resume of Mahmud_Uz_Zaman.pdf")
        document.body.appendChild(angcor)
        angcor.click()
        angcor.remove()
    }

    {/* <Typewriter
options={{
    autoStart: true,
    loop: true,
    delay: 100,
    strings: ['Hey ! I m Mahmud']
}}
/> */}

    return (
        <div className='mb-12'>
            <section id='banner' className='lg:h-[85vh] flex items-center bg-slate-800 lg:bg-cover lg:bg-cover lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
                <div className='container mx-auto h-full'>
                    <div className='flex items-center h-full pt-8 mx-28'>
                        {/* left */}
                        <div className='flex-1 flex flex-col items-center mx-auto lg:items-start'>
                            <p className='text-lg text-accent mb-[22px]'>
                                Hey! I'm Mahmud Uz Zaman
                            </p>
                            <p className='text-3xl text-white leading-[44px] md:text-4xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:traking-[-2px] mb-[22px]'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                        strings: ['MERN stack Developer from Naogaon, Bangladesh']
                                    }}
                                />
                            </p>

                            <button onClick={() => handleDownload(resumeUrl)} className="btn btn-outline btn-secondary ">Download Resume</button>

                        </div>
                        {/* right */}
                        <div className="hidden lg:flex flex-1 justify-end" data-aos="fade-up" data-aos-duration="3000">
                            <img className='w-[450px]' src={img1} alt="" />
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;