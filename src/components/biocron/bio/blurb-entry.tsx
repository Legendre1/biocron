import React from 'react';

type BlurbEntryProps = {
  dateRange: string;
  jobTitle: string;
  companyName: string;
};

const BlurbEntry: React.FC<BlurbEntryProps>  = ({dateRange, jobTitle, companyName}) => {


  return (
    <div className="bg-gray-800 w-80 h-fit my-4 rounded-lg "> 
        <div className='font-label text-lg ml-1'>{jobTitle}</div>
        <div className='font-label text-md ml-1'>{dateRange}</div>
        <div className='font-label text-md ml-1'>{companyName}</div>
    </div>
  );
};

export default BlurbEntry;