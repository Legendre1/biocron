import React from 'react';
import MiniportfolioEntry from './miniportfolio-entry';
import FramePanel from '../frame-panel';

const Miniportfolio: React.FC  = () => {
  return (
    <FramePanel classes="flex flex-row w-96 h-min mb-2 mt-4"> 
      <div className='flex flex-col justify-start'>
        <MiniportfolioEntry game='pics'/>
        <MiniportfolioEntry game='papertoss'/>
      </div>
      <div className='flex flex-col justify-start'>
        <MiniportfolioEntry game='njr' />
        <MiniportfolioEntry game='blackjack'/>
      </div>
      

      

    </FramePanel>
  );
};

export default Miniportfolio;