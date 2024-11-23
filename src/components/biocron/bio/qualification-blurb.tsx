import React from 'react';
import BlurbEntry from './blurb-entry';
import FramePanel from '../frame-panel';

const QualificationBlurb: React.FC  = () => {
  return (
    <FramePanel classes="w-6/12 h-fit w-fit px-4 py-1 my-4 mx-4"> 
       <div className='font-title text-2xl'>Qualifications</div>
       <BlurbEntry jobTitle='Unity/C#' dateRange='iOS, Android, WebGL -- games and frontend' companyName='Specialties: Physics, Tooling, Rapid Prototyping' />
       <BlurbEntry jobTitle='Frontend Web' dateRange='React.js, Storybook+Jest, CSS+Tailwind' companyName='' />
       <BlurbEntry jobTitle='Backend' dateRange='Golang, AWS, SQL' companyName='REST APIs, content delivery' />
       <BlurbEntry jobTitle='Internal Tools' dateRange='Unity, Python, Lua' companyName='' />
       <BlurbEntry jobTitle='Mobile Games' dateRange='Xcode, Android Studio' companyName='Specialties: UI/UX, Casual cross-platform games' />
    </FramePanel>
  );
};

export default QualificationBlurb;