import React, { FunctionComponent } from 'react';

type Props = {
  isOpen: boolean;
};

export const MobileMenuComponent: FunctionComponent<Props> = ({ isOpen }) => {
  return (
    <div
      className={`flex flex-col w-full bg-black text-white justify-around items-center transition-all duration-1000 ease-in-out ${
        isOpen ? 'h-40 text-opacity-100' : 'h-0 text-opacity-0'
      }`}
    >
      <div className="py-1 hover:text-green-600 inline-block w-auto">Home</div>
      <div className="py-1 hover:text-green-600 inline-block w-auto">Portfolio</div>
      <div className="py-1 hover:text-green-600 inline-block w-auto">Blog</div>
      <div className="py-1 hover:text-green-600 inline-block w-auto">Contact Me</div>
    </div>
  );
};
