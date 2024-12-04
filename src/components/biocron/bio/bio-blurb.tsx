import React from 'react';
import FramePanel from '../frame-panel';

const BioBlurb: React.FC  = () => {
  return (
    <div className='w-full px-2'>
      <FramePanel isButton={false} onClick={() => {}} classes=" h-min mt-4 mx-4 -mb-2 p-4"> 
      <div className='flex flex-col items-center justify-center h-fit'>
        <div className='text-center text-4xl my-2 font-title'>Bio</div>
        <div className='h-6'></div>
        <div className='text-center text-xl my-2 font-body'>
          Hi, friends! I am a veteran of mobile and web game development with a recent focus on frontend web technologies. Over the past decade, I have been developing games in Unity, including several titles that have achieved over 100 million downloads on the mobile app stores.
          </div>
          <div className='text-center text-xl my-2 font-body'>
          I am also the founder of Aureus Studios, where I bring my creative visions to life by crafting mobile and console games, both as a solo developer and as leader of a small indie team.
          </div>
          <div className='text-center text-xl my-2 font-body'>
          Outside of work, I am passionate about 3rd and 4th generation video games and consoles, collecting vinyl movie soundtracks, and exploring the world of cinema.
        </div>
      </div>  
    </FramePanel>
    </div>
    
  );
};

export default BioBlurb;