import React from 'react';
import laios from './../assets/laiosHeadshot.png'
import FramePanel from '../frame-panel';

const ProfilePic: React.FC  = () => {
  return (
    <FramePanel classes="w-fit h-96 mx-4 p-8"> 
      <img className='h-80 aspect-[3/4] rounded-lg' src={laios}></img>
    </FramePanel>
  );
};

export default ProfilePic;