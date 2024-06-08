import React, { ReactNode } from 'react';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className='fixed inset-0 bg-green-500 bg-opacity-80 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded-md shadow-md relative'>
        <button
          onClick={onClose}
          className=' text-green-700 px-2 rounded-md hover:text-orange-500 absolute right-5'
        >
          &#10005;
        </button>
        {children}
      </div>
    </div>
  );
};
