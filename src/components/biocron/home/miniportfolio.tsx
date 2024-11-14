import React from 'react';
import MiniportfolioEntry from './miniportfolio-entry';

const Miniportfolio: React.FC  = () => {


  return (
    <div className="grid grid-cols-2 bg-gray-900 w-96 h-96 rounded-lg mx-4"> 
      <MiniportfolioEntry game='njr' />
      <MiniportfolioEntry game='papertoss'/>
      <MiniportfolioEntry game='blackjack'/>
      <MiniportfolioEntry game='df'/>
    </div>
  );
};

export default Miniportfolio;