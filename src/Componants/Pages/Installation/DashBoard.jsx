import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const DashBoard = ({data}) => {
    const {image,title,companyName,id,description,reviews,ratingAvg,downloads,ratings,size}=data;
    return (
        <div className='flex flex-col md:flex-row justify-center gap-7  md:justify-between items-center bg-white rounded-xl p-5 md:p-2'>
           <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-8'>
             <div className='pl-3'>
                <img className='w-30 rounded' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <div className='flex justify-between items-center gap-2 pt-4'>
                    <span className='text-green-400 text-base px-2 flex items-center gap-1'><MdOutlineFileDownload />{downloads}</span> <span className='text-[#FF8811] text-base px-2 flex items-center gap-1'><FaStar />{ratingAvg}</span> <span className='font-semibold'>{size} MB</span>
                </div>
            </div>
           </div>
           <div className='pr-4'>
            <button className='btn bg-[#0cca8e] text-white'>Uninstall</button>
           </div>
        </div>
    );
};

export default DashBoard;