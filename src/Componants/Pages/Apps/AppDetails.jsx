import React from 'react';
import { Link, useLoaderData } from 'react-router';
import dIcon from './../../../assets/icon-downloads.png';
import rIcon from './../../../assets/icon-ratings.png';
import lIcon from './../../../assets/icon-review.png';
import { addWantedData } from '../../LocalStorage/LocalStorage';
const AppDetails = () => {

const handleInstallation=(id)=>{
     addWantedData(id);
}


    const Details=useLoaderData();
    const {image,title,companyName,id,description,reviews,ratingAvg,downloads,ratings,size}=Details;
    return (
        <div className='bg-[#e9e7e7]'>
            <div className='flex flex-col md:flex-row px-8 py-10'>

              <div className='flex-1 p-5'><img className='w-full rounded' src={image} alt="" /></div>
              <div className='flex-3 p-5'>

                   <div className='pb-6'>
                    <h2 className='text-4xl font-bold pb-3'>{title}</h2>
                    <h2 className='font-semibold'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold'>{companyName}</span></h2>
                   </div> <hr />
                       {/* card */}
                    <div className='flex justify-start items-start flex-wrap gap-10 py-4'>
                        <div className='space-y-3 p-4'>
                            <img src={dIcon} alt="" />
                            <h3 className='font-semibold'>Downloads</h3>
                            <h1 className='text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div className='space-y-3 p-4'>
                            <img src={rIcon} alt="" />
                            <h3 className='font-semibold'>Average Ratings</h3>
                            <h1 className='text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className='space-y-3 p-4'>
                            <img src={lIcon} alt="" />
                            <h3 className='font-semibold'>Total Reviews</h3>
                            <h1 className='text-4xl font-bold'>
                                {
                                    new Intl.NumberFormat("en-US",{
                                        notation:"compact",
                                    }).format(reviews)
                                }</h1>
                        </div>
                        
                    </div>
                             <div>
                                  <Link><button onClick={()=> handleInstallation(id)} className='btn bg-[#0cca8e] text-white'>Install Now ({size} MB)</button></Link>
                             </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;