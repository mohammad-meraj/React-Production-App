import React from 'react';
import TrandingApp from './TrandingApp';
import { Link } from 'react-router';

const TrandingSection = ({fetchData}) => {
    return (
        <div className='max-w-11/12 mx-auto mb-10'>
            <div className='text-center space-y-3 py-8 pt-12'>
                <h2 className='text-5xl font-bold'>Trending Apps</h2>
                <p className='text-base text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
           {
            fetchData.slice(8,16).map(appData=> <TrandingApp key={appData.id} appData={appData}></TrandingApp>)
           }
            </div>
            <div className='flex justify-center mt-8 mb-14 items-center'>
                <Link to='/apps'><button className='btn bg-gradient-to-r from-[#6633dd] to-[#9F62F2] text-white px-6'>Show All</button></Link>
            </div>
        </div>
    );
};

export default TrandingSection;