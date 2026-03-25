import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { removeWantedData } from '../../LocalStorage/LocalStorage';

const DashBoard = ({data,handleUninstall}) => {
      
      const handleUninstallation = () => {
         toast("App Uninstalled...!!!");
        removeWantedData(id);   
        handleUninstall(id);        
    };

    const {image,title,companyName,id,description,reviews,ratingAvg,downloads,ratings,size}=data;
    return (
        <div className='flex flex-col sm:flex-row items-center sm:items-center justify-between bg-white rounded-2xl p-4 gap-4 shadow-sm w-full'>
           <div className='flex flex-col sm:flex-row items-center sm:items-center gap-4 w-full sm:w-auto'>
             <div className='shrink-0'>
                <img className='w-30 rounded' src={image} alt="" />
            </div>
            <div className='text-center sm:text-left'>
                <h2 className='text-2xl font-bold text-center md:text-left'>{title}</h2>
                <div className='flex flex-wrap justify-center sm:justify-start items-center gap-2'>
                    <span className='text-green-400 text-base px-2 flex items-center gap-1'><MdOutlineFileDownload />{downloads}</span> <span className='text-[#FF8811] text-base px-2 flex items-center gap-1'><FaStar />{ratingAvg}</span> <span className='font-semibold'>{size} MB</span>
                </div>
            </div>
           </div>
           <div className='w-full sm:w-auto flex justify-center sm:justify-end shrink-0 sm:pr-4'>
            <button onClick={handleUninstallation} className='btn bg-[#0cca8e] text-white w-full sm:w-auto px-6'>Uninstall</button>

           </div>
        </div>
    );
};

export default DashBoard;
