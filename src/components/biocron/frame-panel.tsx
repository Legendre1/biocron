import React from 'react';
import { twMerge } from 'tailwind-merge'

type FramePanelProps = {
  classes: string;
  children: any;
};

const FramePanel: React.FC<FramePanelProps>  = ({classes, children}) => {


  return (
    <div className={twMerge('bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg', classes)}>
      {children}
    </div>
  );
};

export default FramePanel;