import React from 'react';
import BlurbEntry from './blurb-entry';
import FramePanel from '../frame-panel';

const ExpBlurb: React.FC  = () => {
  return (
    <FramePanel classes="w-6/12 h-fit w-fit px-4 py-1 mx-4"> 
       <div className='font-title text-2xl'>Work Experience</div>
       <BlurbEntry dateRange='May 2019 - September 2024' jobTitle='Senior Software Engineer' companyName='Virtual Gaming Worlds' />
       <BlurbEntry dateRange='Jan 2019 - March 2019' jobTitle='Contract Unity Developer' companyName='Bolder Games' />
       <BlurbEntry dateRange='Jan 2011 - October 2018' jobTitle='Gameplay Engineer' companyName='Backflip Studios' />
       <BlurbEntry dateRange='Jan 2014 - Present' jobTitle='Founder, Lead Engineer' companyName='Aureus Studios' />
    </FramePanel>
  );
};

export default ExpBlurb;