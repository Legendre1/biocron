import React from 'react';
import laios from './../assets/laiosHeadshot.png'

const ProfilePic: React.FC  = () => {


  return (
    <div className="flex flex-row bg-gray-900 w-80 h-96 rounded-lg mx-4"> 
      <img className='w-80  rounded-lg m-8' src={laios}></img>
    </div>
  );
};

export default ProfilePic;