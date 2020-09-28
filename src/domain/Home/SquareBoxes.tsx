import React, { FunctionComponent } from 'react';

export const SquareBoxesComponent: FunctionComponent = () => {
  return (
    <>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-350 h-350 sm:w-500 sm:h-500 absolute bg-transparent"></div>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-300 h-300 sm:w-450 sm:h-450 absolute bg-transparent"></div>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-250 h-250 sm:w-400 sm:h-400 absolute bg-transparent"></div>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-200 h-200 sm:w-350 sm:h-350 absolute bg-transparent"></div>
    </>
  );
};
