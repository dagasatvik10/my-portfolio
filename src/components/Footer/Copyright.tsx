import React, { FunctionComponent } from 'react';

export const CopyrightComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center">Copyright &#169; 2020</div>
      <div className="flex flex-row justify-center items-center">Satvik Daga</div>
    </div>
  );
};
