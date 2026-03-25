import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getWantedData } from '../../LocalStorage/LocalStorage';
import DashBoard from './DashBoard';

const Installation = () => {
    const installApp = useLoaderData();
    const wantedApp= getWantedData();
    const InstallList= installApp.filter(App=> wantedApp.includes(App.id))
     const [installationList, setInstallationList] = useState(InstallList);
    const handleUninstall = (id) => {
        setInstallationList(prev => prev.filter(app => app.id !== id));
                };


                const convertDownloads = (str) =>
    parseFloat(str) * (str.includes('B') ? 1_000_000_000 : str.includes('M') ? 1_000_000 : 1);

    const [sort,setSort]=useState("");
    const handleSort=(type)=>{
            setSort(type)
            if(type === "low"){
                const lowToHigh=[...installationList].sort((a,b)=> convertDownloads(a.downloads)-convertDownloads(b.downloads));
                setInstallationList(lowToHigh)
            }
            if(type === "high"){
                const HighToLow=[...installationList].sort((a,b)=> convertDownloads(b.downloads)-convertDownloads(a.downloads));
                setInstallationList(HighToLow)
            }
    }

    return (
        <div className='bg-[#e9e7e7] pb-20'>
            <div className='text-center space-y-5 pt-15 pb-6'>
                <h2 className='text-4xl md:text-5xl font-bold'>Your Installed Apps</h2>
                <p className='text-gray-400 text-sm md:text-base'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between items-center max-w-11/12 mx-auto py-4'>
                <span className='font-bold'>({InstallList.length}) Apps Found</span>
                 <span>
<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Sort by Downlode  ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
   <li><a onClick={()=> handleSort("low")}>Low-High</a></li>
    <li><a onClick={()=> handleSort("high")}>High-Low</a></li>
  </ul>
</div>
</span>
            </div>
            <div className='flex flex-col gap-4 max-w-11/12 mx-auto'>
                {
                installationList.map(data=> <DashBoard key={data.id} handleUninstall={handleUninstall} data={data}></DashBoard>)
            }
            </div>
        </div>
    );
};

export default Installation;