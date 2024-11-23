import React from 'react';
import PortfolioEntry from './portfolio-entry';

const Miniportfolio: React.FC  = () => {
  return (
    <div className="flex flex-col items-center w-screen h-min mt-32"> 
      <PortfolioEntry game='pics'/>
      <PortfolioEntry game='njr' />
      <PortfolioEntry game='darkflow' />
      <PortfolioEntry game='papertoss'/>
      <PortfolioEntry game='blackjack'/>
    </div>
  );
};

export default Miniportfolio;