import React from 'react';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div className='mx-16 md:mx-28 lg:mx-28 mb-12'>
            <div className="md:w-3/12 mx-auto text-center">
                <p className="text-amber-600 mb-2 text-2xl uppercase">About Me</p>
                <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2>
            </div>
     
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:gap-20 lg:gap-20 mb-7'>
                <div className=''>
                    <p className='mb-3 text-white'>Hi, I'm <span className='text-2xl font-bold text-indigo-800'>Mahmud Uz Zaman</span></p>
                    <p className='text-justify text-white'>As a MERN stack developer, I possess a comprehensive skill set that enables me to design and develop full-stack web applications with efficiency and effectiveness. The MERN stack, consisting of MongoDB, Express.js, React, and Node.js, forms the backbone of my development process. With MongoDB, a powerful NoSQL database, I can efficiently store and manage data, allowing for scalability and flexibility in application development. Express.js, a minimalist web application framework for Node.js, empowers me to create robust and scalable server-side applications, handle routing, and manage server operations.</p>
                </div>
                <div className=''>
                    <div className='h-[150px] w-[150px] bg-yellow-500 rounded-full relative mb-3 mx-auto shadow-[0_15px_25px_rgb(255, 255, 0)] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                        <div>
                            <h2 className='absolute text-9xl text-center'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 100,
                                        strings: ['01']
                                    }}
                                /></h2>
                        </div>
                    </div>
                    <p className=' font-bold text-2xl text-center text-white'>Years of Experiance</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-4 md:gap-20 lg:gap-20 text-white'>
                <div>
                    <p>Name: </p>
                    <p className='font-bold'>Mahmud Uz Zaman</p>
                </div>
                <div>
                    <p>Email: </p>
                    <p className='font-bold'>zmahmud26@gmail.com</p>
                </div>
                <div>
                    <p>Date Of Birth: </p>
                    <p className='font-bold'>28th August 1994</p>
                </div>
                <div>
                    <p>From: </p>
                    <p className='font-bold'>Naogaon, Bangladesh</p>
                </div>
            </div>
        </div>
    );
};

export default About;