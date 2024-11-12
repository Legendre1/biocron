import React from 'react';
import logo from './assets/logo-placeholder-image.png'
import { Link } from 'react-router-dom';

const Header: React.FC  = () => {


  return (
    <div className="w-screen flex flex-row items-center bg-blue-900"> 
     <div className='basis-24'></div>
      <img className='mx-2 size-16 ' src={logo}></img>
      <div className='basis-1/2'></div>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl shrink' to="/">Home</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl shrink' to="/bio">Bio</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl' to="/portfolio">Portfolio</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl' to="/contact">Contact</Link>
    </div>
  );
};

export default Header;