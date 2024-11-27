import React from 'react';
import blackjack from './../assets/vgw-blackjack.png'
import ptBoss from './../assets/pt-boss.png'
import rooftops from './../assets/rooftops.jpg'
import pics from './../assets/pics.png'
import FramePanel from '../frame-panel';

import picsPuzzle from './../assets/hashpics/puzzle.png';
import picsLava from './../assets/hashpics/lava.png';
import darkFlowTitle from './../assets/darkFlow/darkFlowTitle.png';
import papertossTitle from './../assets/papertoss/papertossTitle.webp';
import papertossGame from './../assets/papertoss/papertossItems.jpg';
import blackjackTable from './../assets/blackjack/blackjackTable.webp';

import YouTube from 'react-youtube';

type PortfolioProps = {
  game: string;
};

const PortfolioEntry: React.FC<PortfolioProps>  = ({game}) => {

  let gameImage = '';
  let gameName = '';
  let gameOwner = '';
  let children:any = '';

  const videoOptions = {
    height: '180',
    width: '330',
    
    playerVars: {
      autoplay: 1, // Enable autoplay
      mute: 1, // You might need to mute to enable autoplay
      start: 66,
    },
  };

  switch(game){
    case "blackjack":{
      gameImage = blackjack;
      gameName = 'Big Hit Blackjack';
      gameOwner = "Virtual Gaming Worlds"
      children =    
      <>
          <div className='flex flex-col xl:flex-row mx-4 h-full w-1/2'>
            <div className='flex flex-row justify-center'>
              <img className='rounded-md' src={gameImage} />
            </div>
            <div className='flex flex-col h-full w-full xl:mx-2 '>
              <div className='flex flex-col items-center xl:items-start mx-2'>
                <div className='text-lg font-title text-center w-36'>{gameName}</div>
                <div className='text-md font-title text-center w-36'>© {gameOwner}</div>
              </div>
              <div className='flex flex-col justify-center'>
              <div className='font-title text-md'>Role: Game Engineer</div>
              <div className='font-title text-md'>Engine: Unity</div>
              <div className='font-title text-md'>Platforms: Web, Android</div>
            </div>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row w-3/5'>
            <div className='flex flex-col mx-2 h-min' >
              <div className='font-body text-sm overflow-hidden'>Big Hit Blackjack is first table game from Luckyland Slots. Unlike previous offerings, it allows for player agency and meaningful gameplay choices. Features include 3-hand simultaneous play, full featured Blackjack actions, and a roulette-style minigame.</div>
            </div>
            <div className='flex flex-row flex-grow xl:flex-none justify-center'>
              
              <div className='flex flex-col justify-center'>
                <img className='w-72 md:w-96 xl:w-72 m-1 rounded-md' src={blackjackTable} />
              </div>
            </div>
          </div>
        </>
      break;
    }
    case "papertoss":{
      gameImage = ptBoss;
      gameName = 'Paper Toss Boss';
      gameOwner = "Backflip Studios"
      children = 
      <>
          <div className='flex flex-col xl:flex-row-reverse mx-4 h-full w-2/5 '>
            <div className='flex flex-row justify-center'>
              <img className=' rounded-md ' src={gameImage} />
            </div>
            <div className='flex flex-col h-full  xl:mx-2 justify-start'>
              <div className='flex flex-col justify-center items-center mx-2 mb-2'>
                <div className='text-lg font-title text-center w-36'>{gameName}</div>
                <div className='text-md font-title text-center w-36'>© {gameOwner}</div>
              </div>
              <div className='font-title text-md'>Role: Engineer, Designer</div>
              <div className='font-title text-md'>Engine: Lua/C++, Unity</div>
              <div className='font-title text-md'>Platforms: iOS, Android</div>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row-reverse w-1/2'>
            <div className='flex flex-col mx-2 h-min' >
              <div className='font-body text-sm overflow-hidden'>Paper Toss was the original mega-hit paper tossing game from the early App Store. Paper Toss 2.0 (later renamed "Boss") was the follow up which added new characters, items, physics, locations, and interactivity to the original formula.</div>
            </div>
            <div className='flex flex-row flex-grow xl:flex-none justify-center'>
              
              <div className='flex flex-col justify-center '>
                <img className='w-40 xl:w-24 m-1 rounded-md' src={papertossTitle} />
              </div>
              <div className='flex flex-col justify-center'>
                <img className='w-40 xl:w-24 m-1 rounded-md' src={papertossGame} />
              </div>
            </div>
          </div>
        </>
      break;
    }
    case "darkflow":{
      gameImage = darkFlowTitle;
      gameName = 'Dark Flow';
      gameOwner = "Aureus Studios"
      children = 
      <>
        <div className='flex flex-col justify-center'>
          <img className='w-80 rounded-md' src={gameImage} />
        </div>
        <div className='flex flex-row-reverse w-full'>
        <YouTube videoId="zjnxY1IfpaQ" opts={videoOptions} />
        <div className='flex flex-col flex-1 mx-2 '>
          <div className='font-body text-sm overflow-hidden'>Dark Flow is an innovative sci-fi arcade-style game, in the tradition of classic console 2D shooters. It uses a proprietary 2.5D game engine to create a flat game-space within a fully realized 3-D space battlefield. Currently under development.</div>
        </div>
        <div className='flex flex-col mx-4'>
          <div className='flex flex-col justify-center items-center mx-2 mb-2'>
            <div className='text-lg font-title text-center w-36'>{gameName}</div>
            <div className='text-md font-title text-center w-36'>© {gameOwner}</div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='font-title text-md'>Roles: Engineer, Designer</div>
            <div className='font-title text-md'>Engine: Unity</div>
            <div className='font-title text-md'>Platforms: Consoles, Mac/PC</div>
          </div>
        </div>
      </div>
      </>
        
      break;
    }
    case "njr":{
      gameImage = rooftops;
      gameName = 'Ninjump Rooftops';
      gameOwner = "Backflip Studios"
      children = 
        <>
          <div className='flex flex-col justify-center'>
            <img className='w-80 rounded-md' src={gameImage} />
          </div>
          <div className='flex flex-row w-full'>
            <YouTube videoId="PGPgOkHfKH8" opts={videoOptions} />
            <div className='flex flex-col flex-1 mx-2 '>
              <div className='font-body text-sm overflow-hidden'>Ninjump Rooftops is the first sequel in the highly successful Ninjump series of mobile games. It is a rich and colorful 3D platformer, with an expansive metagame, a pachinko-style minigame, leaderboards, costumes, IAP, and much more.</div>
            </div>
            <div className='flex flex-col mx-4'>
              <div className='flex flex-col justify-center items-center mx-2 mb-2'>
                <div className='text-lg font-title text-center w-36'>{gameName}</div>
                <div className='text-md font-title text-center w-36'>© {gameOwner}</div>
              </div>
              <div className='flex flex-col justify-center'>
                <div className='font-title text-md'>Role: Lead Engineer</div>
                <div className='font-title text-md'>Engine: Lua/C++, Unity tools</div>
                <div className='font-title text-md'>Platforms: iOS, Android</div>
              </div>
            </div>
          </div>
        </>
      break;
    }
    case "pics":{
      gameImage = pics;
      gameName = 'hashPICS';
      gameOwner = "Aureus Studios"
      children = 
        <>
          <div className='flex flex-col xl:flex-row mx-4 h-full w-2/5'>
            <div className='flex flex-row justify-center'>
              <img className=' rounded-md ' src={gameImage} />
            </div>
            <div className='flex flex-col h-full w-full xl:mx-2 '>
              <div className='flex flex-col items-center xl:items-start mx-2'>
                <div className='text-lg font-title text-center w-36'>{gameName}</div>
                <div className='text-md font-title text-center w-36'>© {gameOwner}</div>
              </div>
              <div className='flex flex-col justify-end h-max'>
                <div className='font-label text-md lg:text-nowrap'>Role: Designer, Artist, Engineer</div>
                <div className='font-label text-md lg:text-nowrap'>Engine/Backend: Unity, AWS</div>
                <div className='font-label text-md lg:text-nowrap'>Platforms:
                  <a href="https://apps.apple.com/us/app/hashpics/id1619576843"> iOS</a>,
                  <a href="https://play.google.com/store/apps/details?id=com.aureusstudios.hashpics&hl=en"> Android</a> and 
                  <a href="https://hashpics.netlify.app"> Web</a></div>
              </div>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row w-1/2'>
            <div className='flex flex-col mx-2 h-min' >
              <div className='font-body text-sm overflow-hidden'>hashPICS is a crossword-style puzzle game that uses images as the word hints. The mobile versions includes features such as rotating Daily Puzzles (served from AWS S3, via a REST API on EC2,) a metagame with digital currency and unlockables, ad support, and IAP.</div>
            </div>
            <div className='flex flex-row flex-grow xl:flex-none justify-center'>
              
              <div className='flex flex-col justify-center'>
                <img className='w-40 xl:w-24 m-1 rounded-md' src={picsPuzzle} />
              </div>
              <div className='flex flex-col justify-center'>
                <img className='w-40 xl:w-24 m-1 rounded-md' src={picsLava} />
              </div>
            </div>
          </div>
        </>
      break;
    }
  }

  return (
      <FramePanel classes="flex flex-row even:flex-row-reverse lg:w-5/6 h-min xl:h-48 m-4 p-2 justify-between md:odd:mr-24 md:even:ml-24"> 
        {children}
      </FramePanel>
  );
};

export default PortfolioEntry;