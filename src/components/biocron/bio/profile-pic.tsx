import React from 'react';
import laios from './../assets/laiosHeadshot.png'
import FramePanel from '../frame-panel';

const ProfilePic: React.FC  = () => {
  return (
    <FramePanel classes="w-fit h-96 mx-4"> 
      <img className='h-80 aspect-[3/4] rounded-lg m-8' src={laios}></img>
    </FramePanel>
  );
};

export default ProfilePic;