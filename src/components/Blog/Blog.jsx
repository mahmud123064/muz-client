import React from 'react';
import Typewriter from 'typewriter-effect';

const Blog = () => {
    return (
        <div>
            <h3>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ['This Section is comming soon....']
                    }}
                />
            </h3>
            <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus temporibus perspiciatis porro magnam placeat consequuntur totam impedit eaque praesentium delectus rem similique neque, dignissimos sed, provident veniam. Adipisci maxime est dicta provident porro minus eveniet odit, incidunt vel ea nobis, quibusdam esse cupiditate nisi. Ea iure vitae mollitia incidunt totam repellat sunt error corrupti magnam. Quos dolore blanditiis a nemo, labore eum officia repellendus, doloremque neque, nisi magni. Asperiores, quisquam? Ullam rem quod minima aut, excepturi fugiat rerum facere eos perspiciatis ratione repellat nihil iste! Veniam consequatur a tenetur inventore. Veniam mollitia nobis eveniet laborum nisi sapiente commodi nesciunt vel.</p>
        </div>
    );
};

export default Blog;