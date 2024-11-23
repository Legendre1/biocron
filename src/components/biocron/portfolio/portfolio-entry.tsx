import React from 'react';
import blackjack from './../assets/vgw-blackjack.png'
import ptBoss from './../assets/pt-boss.png'
import rooftops from './../assets/rooftops.jpg'
import pics from './../assets/pics.png'
import FramePanel from '../frame-panel';

import picsPuzzle from './../assets/hashpics/puzzle.png';
import picsLava from './../assets/hashpics/lava.png';

type PortfolioProps = {
  game: string;
};

const PortfolioEntry: React.FC<PortfolioProps>  = ({game}) => {

  let gameImage = '';
  let gameName = '';
  let gameOwner = '';
  let children:any = '';

  switch(game){
    case "blackjack":{
      gameImage = blackjack;
      gameName = 'Big Hit Blackjack';
      gameOwner = "Virtual Gaming Worlds"
      children = 
        <div>
          <div>Blackjack Content</div>
        </div>
      
      break;
    }
    case "papertoss":{
      gameImage = ptBoss;
      gameName = 'Paper Toss Boss';
      gameOwner = "Backflip Studios"
      children = 
        <div>
          <div>Paper Toss Content</div>
        </div>
      break;
    }
    case "darkflow":{
      gameImage = '';
      gameName = 'Dark Flow';
      gameOwner = "Aureus Studios"
      children = 
        <div>
          <div>Dark Flow Content</div>
        </div>
      break;
    }
    case "njr":{
      gameImage = rooftops;
      gameName = 'Ninjump Rooftops';
      gameOwner = "Backflip Studios"
      children = 
        <div>
          <div>Ninjump Rooftops Content</div>
        </div>
      break;
    }
    case "pics":{
      gameImage = pics;
      gameName = 'hashPICS';
      gameOwner = "Aureus Studios"
      children = 
        <div className='flex flex-row-reverse flex-end w-full'>
          <img className='w-24 m-1 rounded-md aspect-[1/2]' src={picsPuzzle} />
          <img className='w-24 m-1 rounded-md aspect-[1/2]' src={picsLava} />
          <div className='flex flex-col flex-1 mx-2 '>
            <div className='font-body text-sm overflow-hidden'>hashPICS is a crossword-style puzzle game that uses stock images to serve as word hints. The mobile versions includes features such as rotating Daily Puzzles (served from S3 servers, via a custom REST API running on EC2,) a metagame with digital currency and unlockables, ad support, and IAP.</div>
          </div>
          <div className='flex flex-col mx-4'>
            <div className='flex flex-col justify-center items-center mx-2 mb-2'>
              <div className='text-lg font-title text-center w-36'>{gameName}</div>
              <div className='text-md font-title text-center w-36'>© {gameOwner}</div>
            </div>
            <div className='flex flex-col justify-center'>
              <div className='font-title text-md'>Role: Designer, Artist, Engineer</div>
              <div className='font-title text-md'>Engine/Backend: Unity, AWS S3, EC2</div>
              <div className='font-title text-md'>Platforms: 
                <a href="https://apps.apple.com/us/app/hashpics/id1619576843">iOS</a>,
                <a href="https://play.google.com/store/apps/details?id=com.aureusstudios.hashpics&hl=en">Android</a> and 
                <a href="https://hashpics.netlify.app">Web</a></div>
            </div>
            
          </div>
          
        </div>
      break;
    }
  }

  return (
      <FramePanel classes="flex flex-row w-5/6 h-48 m-4 p-2 even:flex-row-reverse"> 
        <img className='w-80 m-1 rounded-md aspect-[4/3]' src={gameImage} />
        {children}
      </FramePanel>
  );
};

export default PortfolioEntry;