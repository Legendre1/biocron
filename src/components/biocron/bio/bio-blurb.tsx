import React from 'react';

const BioBlurb: React.FC  = () => {


  return (
    <div className="bg-gray-900 w-6/12 h-fit rounded-lg mx-4"> 
      <div className='flex flex-col items-center justify-center h-fit'>
        <div className='text-center text-4xl my-2'>Bio - Jon L Golden</div>
        <div className='text-center text-xl my-2'>
          Hello friends! I am a veteran of mobile and web game development, with a recent emphasis on frontend web development. I have been making games in Unity for the past decade,
          including titles that reached 100M+ downloads on the mobile app stores.
        </div>
        <div className='text-center text-xl my-2'>
          I founded Aureus Studios to make mobile and console games under my own label. Our inaugural title, hashPICS, is available on
          the <a href="https://apps.apple.com/us/app/hashpics/id1619576843">iOS App Store</a>, the <a href="https://play.google.com/store/apps/details?id=com.aureusstudios.hashpics&hl=en">Google Play Store</a>
          , or as a <a href="https://hashpics.netlify.app">prototype React web app</a>
        </div>
        <div className='text-center text-lg my-2'>
          My personal interests include 3rd and 4th generation video games and consoles, vinyl movie soundtracks, and cinema generally.
        </div>
      </div>  
    </div>
  );
};

export default BioBlurb;