import React from 'react';
import FramePanel from '../frame-panel';

const BioBlurb: React.FC  = () => {
  return (
    <div className='w-full px-4'>
      <FramePanel classes=" h-min mt-4 mx-4 -mb-2 p-4"> 
      <div className='flex flex-col items-center justify-center h-fit'>
        <div className='text-center text-4xl my-2 font-title'>Bio</div>
        <div className='text-center text-xl my-2 font-body'>
          Hello friends! I am a veteran of mobile and web game development, with a recent emphasis on frontend web development. I have been making games in Unity for the past decade,
          including titles that reached 100M+ downloads on the mobile app stores.
        </div>
        <div className='text-center text-xl my-2 font-body'>
          I founded Aureus Studios to make mobile and console games under my own label. Our inaugural title, hashPICS, is available on
          the <a href="https://apps.apple.com/us/app/hashpics/id1619576843">iOS App Store</a>, the <a href="https://play.google.com/store/apps/details?id=com.aureusstudios.hashpics&hl=en">Google Play Store</a>
          , or as a <a href="https://hashpics.netlify.app">prototype React web app</a>
        </div>
        <div className='text-center text-xl my-2 font-body'>
          My personal interests include 3rd and 4th generation video games and consoles, vinyl movie soundtracks, and cinema generally.
        </div>
      </div>  
    </FramePanel>
    </div>
    
  );
};

export default BioBlurb;