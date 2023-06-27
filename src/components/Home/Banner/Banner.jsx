import React from 'react';
import img1 from "../../../../public/my_picture-removebg-preview.png"

const Banner = () => {
    return (
        <div>
            {/* <div className="carousel w-full mb-6 h-[650px]">
                <div id="slide1" className="carousel-item relative w-full">
                    
                    <div className="absolute rounded-xl flex items-center h-full left-0 right-5 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className="text-white space-y-7 w-1/2 pl-24">
                            <h2 className="text-6xl font-semibold ">Affordable Price For Car Servicing</h2>
                            <p className="font-medium">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-outline btn-secondary">Download Resume</button>
                            </div>
                        </div>
                        <div>
                        <img src={img1} className="w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            </div> */}

            {/* /////// */}

            <section id='banner' className='lg:h-[85vh] flex items-center bg-slate-800 lg:bg-cover lg:bg-cover lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
                <div className='container mx-auto h-full'>
                    <div className='flex items-center h-full pt-8 mx-20'>
                        {/* left */}
                        <div className='flex-1 flex flex-col items-center mx-auto lg:items-start'>
                            <p className='text-lg text-accent mb-[22px]'>Hey ! I'm Mahmud</p>
                            <p className='text-3xl text-white leading-[44px] md:text-4xl md:leading-tight lg:text-4xl lg:leading-[1.2] font-bold md:traking-[-2px] mb-[22px]'>I’m creative Web Developer from Bangladesh, and I’m very passionate and dedicated to my work.</p>
                            
                            <button className="btn btn-outline btn-secondary ">Download Resume</button>
                    
                        </div>
                        {/* right */}
                        <div className='hidden lg:flex flex-1 justify-end'>
                            <img className='w-[450px]' src={img1} alt="" />
                        </div>

                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;