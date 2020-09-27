import React, { FunctionComponent } from 'react';

import { IntroComponent } from './Intro';

export const HomeComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-around">
      <IntroComponent />
    </div>
  );
};
