import React from 'react';
import MiniportfolioEntry from './miniportfolio-entry';
import FramePanel from '../frame-panel';

const Miniportfolio: React.FC  = () => {
  return (
    <FramePanel classes="grid grid-cols-2 w-96 h-96 mx-4"> 
      <MiniportfolioEntry game='pics'/>
      <MiniportfolioEntry game='njr' />
      <MiniportfolioEntry game='papertoss'/>
      <MiniportfolioEntry game='blackjack'/>
    </FramePanel>
  );
};

export default Miniportfolio;