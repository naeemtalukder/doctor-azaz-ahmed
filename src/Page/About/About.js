import React from 'react';
import img from '../../images/image.jpg';
const About = () => {

    return (
        <div className='container mb-5'>
            <h3 className='text-center text-info my-lg-5 my-sm-2'>Hello! I am Naeem Talukder</h3>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                    <img
                        className='w-100'
                        src={img} alt="" />
                </div>
                <div className='col-lg-8 pt-3 col-sm-12'>
                    <p>My dream is to be a full stack web developer. So I do a lot of parachute every day. I will not give up the flag until I can be a good developer. If you see a dream, you don't have to do it.

                        My mission this time is to be a good quality programmer. This mission will be cess when I will be a good quality programmer. I have to fulfill my dream. So I have to do a lot of work. Otherwise I will not be able to win the dream.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;