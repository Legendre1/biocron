import React from 'react';
import monkey from './../assets/monkeySuit.jpg'
import FramePanel from '../frame-panel';
import { useNavigate } from 'react-router-dom';

const Minibio: React.FC  = () => {

  const navigate = useNavigate();

  return (
    <FramePanel classes="flex flex-row w-max h-min m-12" isButton={true} onClick={() => {navigate('/bio');}}> 
      <img className='w-48 h-60 rounded-lg m-2' src={monkey}></img>
      <div className='basis-1/2 m-2 flex flex-col '>
        <div className='text-4xl my-2 font-title'>Jon Golden</div>
        <div className='h-4'></div>
        <div className='text-md my-1 font-body'>Founder, Aureus Studios</div>
        <div className='h-2'></div>
        <div className='text-md my-1 font-body'>Game and Frontend Developer</div>
        <div className='h-2'></div>
        <div className='text-md my-1 font-body -mb-2'>Audiophile, Cinephile</div>
        <div className='text-md my-1 font-body'>Retro-gamer, Dad</div>
      </div>
    </FramePanel>
  );
};

export default Minibio;