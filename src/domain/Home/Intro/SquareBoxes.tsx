import { FunctionComponent } from 'react';

export const SquareBoxesComponent: FunctionComponent = () => {
  return (
    <>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-350 h-350 md:w-400 md:h-400 lg:w-500 lg:h-500 absolute bg-transparent"></div>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-300 h-300 md:w-350 md:h-350 lg:w-450 lg:h-450 absolute bg-transparent"></div>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-250 h-250 md:w-300 md:h-300 lg:w-400 lg:h-400 absolute bg-transparent"></div>
      <div className="top-0 right-0 z-0 border-opacity-25 border-tertiary border-60 border-solid w-200 h-200 md:w-250 md:h-250 lg:w-350 lg:h-350 absolute bg-transparent"></div>
    </>
  );
};
