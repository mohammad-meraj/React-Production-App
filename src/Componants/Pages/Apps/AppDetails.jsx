import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import dIcon from './../../../assets/icon-downloads.png';
import rIcon from './../../../assets/icon-ratings.png';
import lIcon from './../../../assets/icon-review.png';
import { addWantedData } from '../../LocalStorage/LocalStorage';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MySwal = withReactContent(Swal)

const AppDetails = () => {
    const [installed,setInstalled] =useState(false)
    const handleInstallation=(id)=>{
     addWantedData(id);
     setInstalled(true);

Swal.fire({
  title: "Installed!",
  text: "Enjoy Our Service!",
  icon: "success"
});
}


    const Details=useLoaderData();
    const {image,title,companyName,id,description,reviews,ratingAvg,downloads,ratings,size}=Details;
    
    return (
        <div className='bg-[#e9e7e7]'>
            <div className='flex flex-col md:flex-row px-8 py-10'>

              <div className='flex-1 h-70 lg:mt-10 p-5 bg-white rounded-4xl flex justify-center items-center'><img className=' w-40 lg:w-50 rounded' src={image} alt="" /></div>
              <div className='flex-3 p-5'>

                   <div className='pb-6'>
                    <h2 className='text-2xl lg:text-4xl font-bold pb-3'>{title}</h2>
                    <h2 className='font-semibold'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-bold'>{companyName}</span></h2>
                   </div> <hr />
                       {/* card */}
                    <div className='flex justify-center lg:justify-start items-start flex-wrap gap-5 lg:gap-10 py-4'>
                        <div className='flex justify-center items-center flex-col lg:justify-start lg:items-start space-y-3 p-2 lg:p-4'>
                            <img src={dIcon} alt="" />
                            <h3 className='font-semibold'>Downloads</h3>
                            <h1 className='text-2xl lg:text-4xl font-bold'>{downloads}</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col lg:justify-start lg:items-start space-y-3 p-2 lg:p-4'>
                            <img src={rIcon} alt="" />
                            <h3 className='font-semibold'>Average Ratings</h3>
                            <h1 className='text-2xl lg:text-4xl font-bold'>{ratingAvg}</h1>
                        </div>
                        <div className='flex justify-center items-center flex-col lg:justify-start lg:items-start space-y-3 p-2 lg:p-4'>
                            <img src={lIcon} alt="" />
                            <h3 className='font-semibold'>Total Reviews</h3>
                            <h1 className='text-2xl lg:text-4xl font-bold'>{reviews}</h1>
                        </div>
                        
                    </div>
                             <div className='flex justify-center items-center flex-col lg:justify-start lg:items-start'>
                                  <Link><button onClick={()=> handleInstallation(id)} disabled={installed} className={`btn text-white ${installed ? 'bg-gray-400': 'bg-[#0cca8e]'}`}>{installed ? `Installed (${size} MB)` : `Install Now (${size} MB)`}</button></Link>
                             </div>
                </div>

            </div>
            <hr className='max-w-11/12 mx-auto border text-gray-600 my-5' />
            <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={ratings}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#f97316" />
                  </BarChart>
                </ResponsiveContainer>
             <hr className='max-w-11/12 mx-auto border text-gray-600 my-5' />
             <div className='max-w-11/12 mx-auto space-y-3 pb-10 py-5'>
                <h2 className='text-2xl font-bold'>Description</h2>
                <p className='text-base text-gray-500'>{description}</p>
             </div>
        </div>
    );
};

export default AppDetails;