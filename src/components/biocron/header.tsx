import React from 'react';
import logo from './assets/omicronIcon.png'
import { Link } from 'react-router-dom';

const Header: React.FC  = () => {
  return (
    <div className="w-screen flex flex-row items-center bg-gradient-to-r from-blue-900 absolute top-0 mt-4"> 
      <div className='basis-24'></div>
      <img className='mx-2 size-24 ' src={logo}></img>
      <div className='basis-1/2'></div>
      <Link className="mx-2 text-slate-900 dark:text-white text-2xl shrink font-label" to="/">Home</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl shrink font-label' to="/bio">Bio</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl font-label' to="/portfolio">Portfolio</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl font-label' to="/contact">Contact</Link>
    </div>
  );
};

export default Header;