import React, { useState } from 'react';
import './modal.css'

type ModalProps = {
  isOpen: boolean;
  onOverlayPressed: () => void;
  children: any;
};

const Modal: React.FC<ModalProps>  = ({ isOpen, onOverlayPressed, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay"> 
      <button className="modal-content" onClick={() => {onOverlayPressed()}}>
        {children}
      </button>
    </div>
  );
};

export default Modal;
