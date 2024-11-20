import React from 'react';

type BlurbEntryProps = {
  dateRange: string;
  jobTitle: string;
  companyName: string;
};

const BlurbEntry: React.FC<BlurbEntryProps>  = ({dateRange, jobTitle, companyName}) => {


  return (
    <div className="bg-gray-800 w-80 h-fit my-4 rounded-lg "> 
        <div>{dateRange}</div>
        <div>{jobTitle}</div>
        <div>{companyName}</div>
    </div>
  );
};

export default BlurbEntry;