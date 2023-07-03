import React, { useRef } from 'react';
import contact from '../../../assets/contact-us.json'
import Lottie from 'lottie-react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t0gez6h', 'template_ksydh1v', form.current, 'mgTsmNEthVNxhKcCu')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section className='mx-16 md:mx-28 lg:mx-28 mb-12' id='contact'>
            <div className="md:w-3/12 mx-auto text-center">
                <p className="text-amber-600 mb-2 text-2xl uppercase">Contact with me </p>
                <h2 className="text-3xl border-y-4 py-4 mb-8 uppercase"></h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 items-center'>
                <div className=''>
                    <Lottie animationData={contact} />
                </div>
                <div className='text-gray-400'>

                    <form ref={form} onSubmit={sendEmail} className='card-body bg-gray-900 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-gray-400">Name :</span>
                            </label>
                            <input type="text" placeholder="Write your name " name='from_name' className="input input-bordered w-full bg-gray-700" />
                        </div>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-gray-400">Name :</span>
                            </label>
                            <input type="email" placeholder="Write your Email " name='from_email' className="input input-bordered w-full bg-gray-700" />
                        </div>

                        <div className="form-control mb-7">
                            <label className="label">
                                <span className="label-text text-gray-400">Message</span>
                            </label>
                            <textarea className="input textarea-bordered h-36 bg-gray-700" name='message' placeholder="Write Your Message"></textarea>
                        </div>

                        <input type="submit" value="Send"  className='btn bg-sky-500 border-none text-white w-full' />

                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;