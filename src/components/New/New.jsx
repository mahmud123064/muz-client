import React from 'react';
import Lottie from 'lottie-react'
import contact from '../../assets/contact-us.json'
import { useForm } from 'react-hook-form';

const New = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
    }



    return (
        <div>
            <section className='mx-16 md:mx-28 lg:mx-28 mb-12 ' id='contact'>
                <div className="md:w-3/12 mx-auto text-center">

                    <h2 className="text-3xl border-y-4 uppercase"></h2>
                    <p className="text-amber-600  text-2xl mt-16 uppercase">Please Register</p>
                    <h2 className="text-3xl border-y-4  mb-8 uppercase"></h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                    <div className=''>
                        <Lottie animationData={contact} />
                    </div>
                    <div className='text-gray-400'>

                        <form onSubmit={handleSubmit(onSubmit)} className='card-body bg-gray-900 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-gray-400">Name :</span>
                                </label>
                                <input type="name"
                                    {...register("name", { required: true })}
                                    placeholder="Write your Name " name='name' className="input input-bordered w-full bg-gray-700" />
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-gray-400">Email :</span>
                                </label>
                                <input type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Write your Email " name='email' className="input input-bordered w-full bg-gray-700" />
                            </div>

                            {/* <div className="form-control w-full mb-10">
                                <label className="label">
                                    <span className="label-text text-gray-400">Password :</span>
                                </label>
                                <input type="password" placeholder="Write your Password " password='password' className="input input-bordered w-full bg-gray-700" />
                            </div> */}
                            <div className="form-control w-full mb-10">
                                <label className="label">
                                    <span className="label-text text-gray-400">Password</span>
                                </label>
                                <input type="password" {...register("password",
                                    {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*)/
                                    })} name="password" placeholder="password" className="input input-bordered bg-gray-700  " />
                                {errors.password && <span className="text-red-500">Password  is required</span>}

                                {errors.password?.type === 'minLength' && <p role="alert">Password must have 6 characters</p>}

                                {errors.password?.type === 'maxLength' && <p role="alert">Password must have less than 20 characters</p>}

                                {errors.password?.type === 'pattern' && <p role="alert">Password must have one lower case one upper case, one number and one special character</p>}
                            </div>

                            <input type="submit" value="Register" className='btn bg-sky-500 border-none text-white w-full' />

                        </form>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default New;