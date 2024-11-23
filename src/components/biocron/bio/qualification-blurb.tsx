import React from 'react';
import BlurbEntry from './blurb-entry';
import FramePanel from '../frame-panel';

const QualificationBlurb: React.FC  = () => {
  return (
    <FramePanel classes="w-6/12 h-fit w-fit px-4 py-1 my-4 mx-4"> 
       <div className='font-title text-2xl'>Qualifications</div>
       <BlurbEntry title='Unity/C#' body1='iOS, Android, WebGL -- games and frontend' body2='Specialties: Physics, Tooling, Rapid Prototyping' />
       <BlurbEntry title='Frontend Web' body1='React.js, Storybook+Jest, CSS+Tailwind' body2='' />
       <BlurbEntry title='Backend' body1='Golang, AWS, SQL' body2='REST APIs, content delivery' />
       <BlurbEntry title='Internal Tools' body1='Unity, Python, Lua' body2='Specialties: Level design, Automation, Preprocessing' />
       <BlurbEntry title='Mobile Games' body1='Xcode, Android Studio' body2='Specialties: UI/UX, Casual cross-platform games' />
    </FramePanel>
  );
};

export default QualificationBlurb;