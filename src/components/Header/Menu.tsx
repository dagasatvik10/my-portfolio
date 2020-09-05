import React, { FunctionComponent } from 'react';

export const MenuComponent: FunctionComponent = () => {
  return (
    <div className="hidden md:flex flex-row justify-around text-black w-full font-body">
      <div className="hover:text-green-600 inline-block w-auto cursor-pointer">Home</div>
      <div className="hover:text-green-600 inline-block w-auto cursor-pointer">Portfolio</div>
      <div className="hover:text-green-600 inline-block w-auto cursor-pointer">Blog</div>
      <div className="hover:text-green-600 inline-block w-auto cursor-pointer">Contact Me</div>
    </div>
  );
};
