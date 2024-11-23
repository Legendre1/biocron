import React from 'react';
import PortfolioEntry from './portfolio-entry';

const Miniportfolio: React.FC  = () => {
  return (
    <div className="flex flex-col items-center w-screen h-min mt-32"> 
      <div className='text-3xl font-title'>Published Products</div>
      <PortfolioEntry game='pics'/>
      <PortfolioEntry game='papertoss'/>
      <PortfolioEntry game='njr' />
      <PortfolioEntry game='blackjack'/>
    </div>
  );
};

export default Miniportfolio;