import React from 'react';
import { NavLink } from 'react-router';
import logo from './../../assets/logo.png';
import { FaGithub } from "react-icons/fa";

const Navber = () => {
    const links=<>
        <NavLink to='/'><li className='mr-4 text-base font-semibold'>Home</li></NavLink>
        <NavLink to='/apps'><li className='mr-4 text-base font-semibold'>Apps</li></NavLink>
        <NavLink to='/installation'><li className='mr-4 text-base font-semibold'>Installation</li></NavLink>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <NavLink to='/' className="btn btn-ghost"><img className='w-10' src={logo} alt="" /><h2 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text text-base md:text-xl">HERO.IO</h2></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/mohammad-meraj/React-Production-App' className="btn text-base md:text-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub />Contribute</a>
  </div>
</div>
    );
};

export default Navber;