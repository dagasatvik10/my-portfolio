import { FunctionComponent } from 'react';

export const TopNameComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row justify-start items-center flex-grow">
        <div className="h-1 w-11/12 bg-primary1"></div>
      </div>
      <div className="text-2xl md:text-3xl font-bold font-title">SATVIK DAGA</div>
      <div className="flex flex-row justify-end items-center flex-grow">
        <div className="h-1 w-11/12 bg-primary1"></div>
      </div>
    </div>
  );
};
