import React from 'react';
import MiniportfolioEntry from './miniportfolio-entry';
import FramePanel from '../frame-panel';
import { useNavigate } from 'react-router-dom';

const Miniportfolio: React.FC  = () => {
  const navigate = useNavigate();

  return (
    <FramePanel classes="flex flex-row w-min h-min mb-2 mt-4" isButton={true} onClick={() => {navigate('/portfolio');}}> 
      <div className='flex flex-col justify-start'>
        <MiniportfolioEntry game='pics'/>
        <MiniportfolioEntry game='njr' />
      </div>
      <div className='flex flex-col justify-start'>
        <MiniportfolioEntry game='darkflow'/>
        <MiniportfolioEntry game='blackjack'/>
      </div>
    </FramePanel>
  );
};

export default Miniportfolio;