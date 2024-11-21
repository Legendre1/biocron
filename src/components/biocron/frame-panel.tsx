import React from 'react';
import { twMerge } from 'tailwind-merge'

type FramePanelProps = {
  classes: string;
  children: any;
};

const FramePanel: React.FC<FramePanelProps>  = ({classes, children}) => {


  return (
    <div className={twMerge('h-48 w-48 bg-gradient-to-r from-gray-800 to-black rounded-lg', classes)}>
      {children}
    </div>
  );
};

export default FramePanel;