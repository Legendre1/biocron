import React from 'react';
import laios from './assets/laiosHeadshot.png'

const Minibio: React.FC  = () => {


  return (
    <div className="flex flex-row bg-gray-900 w-96 h-64 rounded-lg"> 
      <img className='basis-1/2 rounded-lg m-2' src={laios}></img>
      <div className='basis-1/2 m-2 flex flex-col '>
        <div className='text-2xl my-1'>Jon Golden</div>
        <div className='text-sm my-1'>Game and Frontend Developer</div>
        <div className='text-sm my-1'>Founder, Aureus Studios</div>
        <div className='text-sm my-1'>Unity, C#, React</div>
      </div>
    </div>
  );
};

export default Minibio;