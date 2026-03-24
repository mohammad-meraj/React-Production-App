import React from 'react';
import bannerImg from './../../assets/hero.png'
const Banner = () => {
    return (
        <div>
            <div className='items-center flex justify-center px-6'>
            <img src={bannerImg} alt="" className='w-[700px]' />
        </div>
        <div className='text-center bg-gradient-to-r from-[#6633dd] to-[#9F62F2] py-10 space-y-5'>
            <h1 className='text-4xl text-white font-bold'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-wrap justify-center font-bold text-white items-center gap-5'>
                {/* card */}
                <div className='p-5 space-y-4'>
                    <h4 className='text-sm'>Total Downloads</h4>
                    <h2 className='text-4xl'>29.6M</h2>
                    <h4 className='text-sm'>21% more than last month</h4>
                </div>
                <div className='p-5 space-y-4'>
                    <h4 className='text-sm'>Total Reviews</h4>
                    <h2 className='text-4xl'>906K</h2>
                    <h4 className='text-sm'>46% more than last month</h4>
                </div>
                <div className='p-5 space-y-4'>
                    <h4 className='text-sm'>Active Apps</h4>
                    <h2 className='text-4xl'>132+</h2>
                    <h4 className='text-sm'>31 more will Launch</h4>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;