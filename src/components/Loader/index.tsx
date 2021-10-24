import React, { FunctionComponent } from 'react';

import { ReactComponent as Loader } from './loader.svg';

const LoaderComponent: FunctionComponent = () => {
  return (
    <div className="fixed z-50 flex flex-row h-screen w-screen justify-center items-center">
      <Loader />
    </div>
  );
};

export default LoaderComponent;
