import React from 'react';

type BlurbEntryProps = {
  title: string;
  body1: string;
  body2: string;
};

const BlurbEntry: React.FC<BlurbEntryProps>  = ({title, body1, body2}) => {
  return (
    <div className="bg-gray-800 w-80 h-fit my-4 rounded-lg "> 
        <div className='font-label text-lg ml-1'>{title}</div>
        <div className='font-label text-md ml-1'>{body1}</div>
        <div className='font-label text-md ml-1'>{body2}</div>
    </div>
  );
};

export default BlurbEntry;