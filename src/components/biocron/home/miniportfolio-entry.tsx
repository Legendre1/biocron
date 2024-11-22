import React from 'react';
import blackjack from './../assets/vgw-blackjack.png'
import ptBoss from './../assets/pt-boss.png'
import rooftops from './../assets/rooftops.jpg'
import pics from './../assets/pics.png'

type MiniPortfolioProps = {
  game: string;
};

const MiniportfolioEntry: React.FC<MiniPortfolioProps>  = ({game}) => {

  let gameImage = '';
  let gameName = '';
  let gameOwner = '';

  switch(game){
    case "blackjack":{
      gameImage = blackjack;
      gameName = 'Big Hit Blackjack';
      gameOwner = "Virtual Gaming Worlds"
      break;
    }
    case "papertoss":{
      gameImage = ptBoss;
      gameName = 'Paper Toss Boss';
      gameOwner = "Backflip Studios"
      break;
    }
    case "njr":{
      gameImage = rooftops;
      gameName = 'Ninjump Rooftops';
      gameOwner = "Backflip Studios"
      break;
    }
    case "pics":{
      gameImage = pics;
      gameName = 'hashPICS';
      gameOwner = "Aureus Studios"
      break;
    }
  }

  return (
    <div className="flex flex-col bg-gray-600 h-min w-44 rounded-md m-2"> 
      <img className='h-22 w-42 m-1' src={gameImage} />
      <div className='text-md font-title text-center'>{gameName}</div>
      <div className='text-sm font-title text-center'>© {gameOwner}</div>
    </div>
  );
};

export default MiniportfolioEntry;