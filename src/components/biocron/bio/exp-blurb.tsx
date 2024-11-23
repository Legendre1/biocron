import React from 'react';
import BlurbEntry from './blurb-entry';
import FramePanel from '../frame-panel';

const ExpBlurb: React.FC  = () => {
  return (
    <FramePanel classes="w-6/12 h-fit w-fit px-4 py-1 my-4 mx-4"> 
       <div className='font-title text-2xl'>Work Experience</div>
       <BlurbEntry body1='May 2019 - September 2024' title='Senior Software Engineer' body2='Virtual Gaming Worlds' />
       <BlurbEntry body1='Jan 2019 - March 2019' title='Contract Unity Developer' body2='Bolder Games' />
       <BlurbEntry body1='Jan 2011 - October 2018' title='Gameplay Engineer' body2='Backflip Studios' />
       <BlurbEntry body1='Jan 2014 - Present' title='Founder, Lead Engineer' body2='Aureus Studios' />
    </FramePanel>
  );
};

export default ExpBlurb;