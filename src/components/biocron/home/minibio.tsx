import React from 'react';
import laios from './../assets/laiosHeadshot.png'
import FramePanel from '../frame-panel';

const Minibio: React.FC  = () => {


  return (
    <FramePanel classes="flex flex-row w-96 h-64 m-4"> 
      <img className='w-48 h-60 rounded-lg m-2' src={laios}></img>
      <div className='basis-1/2 m-2 flex flex-col '>
        <div className='text-4xl my-2 font-title'>Jon Golden</div>
        <div className='text-md my-1 font-body'>Game and Frontend Developer</div>
        <div className='text-md my-1 font-body'>Founder, Aureus Studios</div>
        <div className='text-md my-1 font-body'>Unity, C#, React</div>
      </div>
    </FramePanel>
  );
};

export default Minibio;