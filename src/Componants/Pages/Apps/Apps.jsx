import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import TrandingApp from '../TrandingSection/TrandingApp';
import notFound from '../../../assets/App-Error.png';

const Apps = () => {
    const fetchData= useLoaderData();
    const [search, setSearch] = useState('');
     const filteredApps = fetchData.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className='max-w-11/12 mx-auto mb-10'>
            <div className='text-center space-y-3 py-8 pt-15'>
                <h2 className='text-5xl font-bold'>Our All Applications</h2>
                <p className='text-base text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center py-5'>
                <span className='font-bold'>({filteredApps.length}) Apps Found</span>
                <span>
                    <input className='border-2 rounded-lg border-gray-400 px-2' type="search" name="search Apps" id="" placeholder='search Apps' value={search} onChange={(e) => setSearch(e.target.value)} /></span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            </div>

             {filteredApps.length === 0 ? (
                <div className='flex flex-col items-center justify-center py-20 text-center gap-3'>
                    <img src={notFound} alt="" srcset="" />
                    <p className='text-4xl font-semibold'>OPPS!! APP NOT FOUND</p>
                    <p className='text-sm text-gray-400'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to='/'><button className='btn bg-gradient-to-r from-[#6633dd] to-[#9F62F2] text-white px-6'>Go Back</button></Link>
                </div>
            ) : (
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                    {filteredApps.map(appData => (
                        <TrandingApp key={appData.id} appData={appData} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Apps;








