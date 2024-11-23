import React from 'react';
import PortfolioEntry from './portfolio-entry';
import FramePanel from '../frame-panel';

const Miniportfolio: React.FC  = () => {
  return (
    <FramePanel classes="flex flex-row w-96 h-min mb-2 mt-4"> 
        <PortfolioEntry game='pics'/>
        <PortfolioEntry game='papertoss'/>
        <PortfolioEntry game='njr' />
        <PortfolioEntry game='blackjack'/>
    </FramePanel>
  );
};

export default Miniportfolio;