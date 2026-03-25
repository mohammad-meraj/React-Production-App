import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const TrandingApp = ({appData}) => {
    return (
       <Link to={`/appDetails/${appData.id}`}>
        <div className='bg-gray-200 p-4 rounded-lg space-y-2'>
            <div>
                <img className='size-full object-cover rounded' src={appData.image} alt="" />
            </div>
            <h2 className='text-base font-semibold'>{appData.title}</h2>
            <div className='flex justify-between'>
                <span className='bg-gray-100 p-1 rounded-lg text-green-400 text-sm px-2 flex items-center gap-1'><MdOutlineFileDownload />{appData.downloads}</span>
                <span className='bg-[#FFF0E1] p-1 rounded-lg text-[#FF8811] text-sm px-2 flex items-center gap-1'><FaStar />{appData.ratingAvg}</span>
            </div>

        </div>
       </Link>
    );
};

export default TrandingApp;