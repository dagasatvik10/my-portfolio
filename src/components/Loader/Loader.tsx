import React, { FunctionComponent } from 'react';

import { ReactComponent as Loader } from './loader.svg';

export const LoaderComponent: FunctionComponent = () => {
  return (
    <div className="fixed z-50 flex flex-row h-screen w-screen justify-center items-center">
      <Loader />
    </div>
  );
};
