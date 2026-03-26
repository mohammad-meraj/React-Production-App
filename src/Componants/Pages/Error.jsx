import React from 'react';
import errorPic from './../../assets/error-404.png';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20 text-center gap-3'>
            <img src={errorPic} alt="" srcset="" />
                                <p className='text-4xl font-semibold'>Oops, page not found!</p>
                                <p className='text-sm text-gray-400'>The page you are looking for is not available.</p>
                                <Link to='/'><button className='btn bg-gradient-to-r from-[#6633dd] to-[#9F62F2] text-white px-6'>Go Back</button></Link>
        </div>
    );
};

export default Error;