import React, { FunctionComponent } from 'react';

type Props = {
  isOpen: boolean;
};

export const MobileMenuComponent: FunctionComponent<Props> = ({ isOpen }) => {
  return (
    <div className="overflow-hidden">
      <div
        className={`flex-col w-full bg-black text-white justify-around items-center animate-slideInY ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <div className="py-1 hover:text-green-600 inline-block w-auto">Home</div>
        <div className="py-1 hover:text-green-600 inline-block w-auto">Portfolio</div>
        <div className="py-1 hover:text-green-600 inline-block w-auto">Blog</div>
        <div className="py-1 hover:text-green-600 inline-block w-auto">Contact Me</div>
      </div>
    </div>
  );
};
