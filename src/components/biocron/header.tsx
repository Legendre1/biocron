import React, { useState } from 'react';
import logo from './assets/logo-placeholder-image.png'
import { Link } from 'react-router-dom';

const Header: React.FC  = () => {


  return (
    <div className="w-screen flex place-content-center"> 
      <img className='mx-2 size-16' src={logo}></img>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl' to="/">Home</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl' to="/bio">Bio</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl' to="/portfolio">Portfolio</Link>
      <Link className='mx-2 text-slate-900 dark:text-white text-2xl' to="/contact">Contact</Link>
    </div>
  );
};

export default Header;