
import Lottie from 'lottie-react'
import contact from '../../assets/contact-us.json'




const Login = () => {



    return (

        <section className='mx-16 md:mx-28 lg:mx-28 mb-12 ' id='contact'>
            <div className="md:w-3/12 mx-auto text-center">
                {/* <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2>
                <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2> */}
                <h2 className="text-3xl border-y-4 uppercase"></h2>
                <p className="text-amber-600  text-2xl mt-16 uppercase">Please Login  </p>
                <h2 className="text-3xl border-y-4  mb-8 uppercase"></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                <div className=''>
                    <Lottie animationData={contact} />
                </div>
                <div className='text-gray-400'>

                    <form className='card-body bg-gray-900 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-gray-400">Email :</span>
                            </label>
                            <input type="email" placeholder="Write your Email " name='from_name' className="input input-bordered w-full bg-gray-700" />
                        </div>
                        <div className="form-control w-full mb-10">
                            <label className="label">
                                <span className="label-text text-gray-400">Password :</span>
                            </label>
                            <input type="password" placeholder="Write your Password " name='from_email' className="input input-bordered w-full bg-gray-700" />
                        </div>

                        

                        <input type="submit" value="Send" className='btn bg-sky-500 border-none text-white w-full' />

                    </form>
                </div>
            </div>
        </section>
    )
};

export default Login;
