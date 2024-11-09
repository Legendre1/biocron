import React, { useState } from 'react';
import logo from './assets/logo-placeholder-image.png'

const Header: React.FC  = () => {


  return (
    <div className="w-screen flex place-content-center"> 
      <img className='mx-2 size-16' src={logo}></img>
      <h1 className='mx-2 text-slate-900 dark:text-white'>Home</h1>
      <h1 className='mx-2 text-slate-900 dark:text-white'>Bio</h1>
      <h1 className='mx-2 text-slate-900 dark:text-white'>Portfolio</h1>
      <h1 className='mx-2 text-slate-900 dark:text-white'>Contact</h1>
    </div>
  );
};

export default Header;