import React from 'react';
import GooglePlay from './../../assets/fi_16076057.png';
import AppStore from './../../assets/fi_5977575.png';
import Banner from './Banner';
import TrandingSection from '../Pages/TrandingSection/TrandingSection';
import { useLoaderData } from 'react-router';

const Home = () => {
    const fetchData=useLoaderData();
    return (
        <div>
            <div className='py-13 px-5 sm:px-36'>
                <div className='text-left sm:text-center space-y-5'>
                    <h1 className='text-5xl font-bold'>We Build</h1>
                <h1 className='text-5xl font-bold'><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text'>Productive</span> Apps</h1>
                <p className='text-lg text-gray-500'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact</p>
                </div>
                <div className='flex justify-center items-center gap-5 mt-8'>
                    <a href='https://play.google.com/store/games?hl=en' className='btn text-sm sm:text-lg'><img src={GooglePlay} alt="" />Google Play</a>
                    <a href='https://www.apple.com/app-store/' className='btn text-sm sm:text-lg'><img src={AppStore} alt="" /> App Store</a>
                </div>
                
            </div>
            <Banner></Banner>
            <TrandingSection fetchData={fetchData}></TrandingSection>
        </div>
    );
};

export default Home;