import React from 'react';
import laios from './../assets/laiosHeadshot.png'
import FramePanel from '../frame-panel';

const ProfilePic: React.FC  = () => {
  return (
    <FramePanel isButton={false} onClick={() => {}} classes="w-fit h-96 m-4 p-8 flex-none"> 
      <img className='h-80 aspect-[3/4] rounded-lg' src={laios}></img>
    </FramePanel>
  );
};

export default ProfilePic;