import React from 'react';
import blackjack from './../assets/vgw-blackjack.png'
import ptBoss from './../assets/pt-boss.png'
import rooftops from './../assets/rooftops.jpg'
import pics from './../assets/pics.png'
import FramePanel from '../frame-panel';

type PortfolioProps = {
  game: string;
};

const PortfolioEntry: React.FC<PortfolioProps>  = ({game}) => {

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
      <FramePanel classes="flex flex-row w-5/6 h-48 m-4 p-2 even:flex-row-reverse"> 
        <img className='w-80 m-1 rounded-md aspect-[4/3]' src={gameImage} />
        <div className='flex flex-col'>
          <div className='text-md font-title text-center'>{gameName}</div>
          <div className='text-sm font-title text-center'>© {gameOwner}</div>
        </div>
        
      </FramePanel>
  );
};

export default PortfolioEntry;