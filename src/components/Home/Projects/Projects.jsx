import React from 'react';
import Sports from '../../../../public/muz-sports.png'
import Alhub from '../../../../public/screencapt.png'
import Toy from '../../../../public/toy-truck.png'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    return (
        <div className='mx-16 md:mx-28 lg:mx-28 mb-12 ' id='projects'>
            <div className="md:w-3/12 mx-auto text-center">
                <p className="text-amber-600 mb-2 text-2xl uppercase">My Works</p>
                <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2>
            </div>
            <h4 className='text-gray-400  font-bold text-center mb-5'>  These are some of my best projects. I have built these with React, MERN and vanilla CSS. Some are on going. Check them out.</h4>


            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 '>
                <div className="card w-80 bg-base-100 bg-gray-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-2xl"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <figure>
                        <div className='h-60 hover:overflow-scroll'>
                            <img src={Sports} alt="" />
                        </div>
                    </figure>
                    <div className="card-body">

                        <div className="card-actions justify-end">

                            <Link to='https://muz-sports.web.app/' class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span class="relative">LIVE</span>
                            </Link>


                        </div>
                        <div>
                            <h3 className='text-gray-300 font-bold'>Features</h3>
                            <div className='text-gray-300'>
                                <li>Login and Registration system</li>
                                <li>Classes section for add class</li>
                                <li>Dashboard section</li>
                                <li>Three types of Dashboard</li>
                                <li>Student, Instructor and Admin Dashboard</li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 bg-gray-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-2xl"  data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <figure>
                        <div className='h-60 hover:overflow-scroll'>
                            <img src={Alhub} alt="" />
                        </div>
                    </figure>
                    <div className="card-body">

                        <div className="card-actions justify-end">

                            <Link to='https://snazzy-boba-522246.netlify.app/' class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span class="relative">LIVE</span>
                            </Link>


                        </div>
                        <div>
                            <h3 className='text-gray-300 font-bold'>Features</h3>
                            <div className='text-gray-300'>
                                <li>Feature jobs section</li>
                                <li>Jobs category remote or full-time</li>
                                <li>Details option and Apply</li>
                                <li>There is a statistics option</li>
                                <li>A Blog options</li>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 bg-gray-500 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-2xl" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <figure>
                        <div className='h-60 hover:overflow-scroll'>
                            <img src={Toy} alt="" />
                        </div>
                    </figure>
                    <div className="card-body">

                        <div className="card-actions justify-end">

                            <Link to='https://toy-truck-7f908.web.app/' class="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
                                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span class="relative">LIVE</span>
                            </Link>


                        </div>
                        <div>
                            <h3 className='text-gray-300 font-bold'>Features</h3>
                            <div className='text-gray-300'>
                                <li>Login and Registration system</li>
                                <li>User can Add a toy</li>
                                <li>User can only see his added toy on my toy section</li>
                                <li>Every one can see all toy</li>
                                <li>Top selling option and blog</li>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;