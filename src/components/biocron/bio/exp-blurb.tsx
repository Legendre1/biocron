import React from 'react';
import BlurbEntry from './blurb-entry';

const ExpBlurb: React.FC  = () => {


  return (
    <div className="bg-gray-900 w-6/12 h-fit w-fit px-4 py-1 rounded-lg mx-4"> 
       <div>Work Experience</div>
       <BlurbEntry dateRange='Jan 2011 - October 2018' jobTitle='Gameplay Engineer, Core Brands division' companyName='Backflip Studios' />
       <BlurbEntry dateRange='May 2019 - September 2024' jobTitle='Senior Engineer, Games/Frontend' companyName='Virtual Gaming Worlds' />
    </div>
  );
};

export default ExpBlurb;