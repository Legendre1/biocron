import React from 'react';
import laios from './../assets/laiosHeadshot.png'
import FramePanel from '../frame-panel';

const Minibio: React.FC  = () => {


  return (
    <FramePanel classes="flex flex-row w-96 h-64 mx-4"> 
      <img className='basis-1/2 rounded-lg m-2' src={laios}></img>
      <div className='basis-1/2 m-2 flex flex-col '>
        <div className='text-2xl my-1'>Jon Golden</div>
        <div className='text-sm my-1'>Game and Frontend Developer</div>
        <div className='text-sm my-1'>Founder, Aureus Studios</div>
        <div className='text-sm my-1'>Unity, C#, React</div>
      </div>
    </FramePanel>
  );
};

export default Minibio;