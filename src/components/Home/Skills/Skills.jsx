import React from 'react';
import Lottie from 'lottie-react'
import Html from '../../../assets/html-5.json'
import Mongodb from '../../../assets/mongo.json'
import Nodejs from '../../../assets/nodejs.json'
import react from '../../../assets/react-logo-spinning.json'
import CSS from '../../../assets/css3.json'
import Bootstrap from '../../../assets/b_new.jpg'
import Tailwind from '../../../assets/Tailwind.png'
import JavaScript from '../../../assets/javascript.json'


const Skills = () => {
    return (
        <div className='mx-16 md:mx-28 lg:mx-28 mb-12' id='skills'>
            <div className="md:w-3/12 mx-auto text-center">
                <p className="text-amber-600 mb-2 text-2xl uppercase">My Skills</p>
                <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around'>
                <div>
                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-36 ">
                                {/* <img className='rounded-full' src="../../../../public/pp.jpg" /> */}
                                <Lottie animationData={Html}/>       
                        </div>

                        <div className='text-gray-300'>
                            <h3 className="font-bold">HTML</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-28 ">
                                <img className='rounded-full ' src={Bootstrap} />
                              
                        </div>
                        <div className='text-gray-300 pl-7'>
                            <h3 className="font-bold">Bootstrap</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-36 ">
                              
                                <Lottie animationData={JavaScript}/>       
                        </div>
                        
                        <div className='text-gray-300'>
                            <h3 className="font-bold">JavaScript</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-36 ">
                              
                                <Lottie animationData={Mongodb}/>       
                        </div>
                        
                        <div className='text-gray-300'>
                            <h3 className="font-bold">MongoDb</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>
                   
                </div>
{/*  */}
                <div>
                     <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-36 ">
                                {/* <img className='rounded-full' src="../../../../public/pp.jpg" /> */}
                                <Lottie animationData={CSS}/>       
                        </div>
                        
                        <div className='text-gray-300'>
                            <h3 className="font-bold">CSS</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-36 ">
                                <img className='rounded-full' src = {Tailwind} />
                                
                        </div>
                        <div className='text-gray-300'>
                            <h3 className="font-bold">Tailwind</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>

                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-28 ">
                               
                                <Lottie animationData = {react}/>       
                        </div>
                        
                        <div className='text-gray-300 pl-7'>
                            <h3 className="font-bold">React</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center justify-center '>
                        <div className="avatar rounded-full flex items-center justify-center w-36 ">
                               
                                <Lottie animationData = {Nodejs}/>       
                        </div>
                        
                        <div className='text-gray-300'>
                            <h3 className="font-bold">Nodejs</h3>
                            <div className="text-xs">You have 1 unread message</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;