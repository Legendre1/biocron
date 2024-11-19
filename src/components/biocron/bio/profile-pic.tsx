import React from 'react';
import laios from './../assets/laiosHeadshot.png'

const ProfilePic: React.FC  = () => {


  return (
    <div className="bg-gray-900 w-fit h-96 rounded-lg mx-4"> 
      <img className='h-80 aspect-[3/4] rounded-lg m-8' src={laios}></img>
    </div>
  );
};

export default ProfilePic;