import React from 'react';
import { twMerge } from 'tailwind-merge'

type FramePanelProps = {
  classes: string;
  children: any;
  isButton: boolean;
  onClick: () => void;
};

const FramePanel: React.FC<FramePanelProps>  = ({classes, children, isButton = false, onClick = null}) => {


  return (
    isButton && onClick != null ?
    <button onClick={() => {onClick()}} className={twMerge('bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg ', classes)}>
      {children}
    </button> :
    <div className={twMerge('bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg ', classes)}>
      {children}
    </div>
  );
};

export default FramePanel;