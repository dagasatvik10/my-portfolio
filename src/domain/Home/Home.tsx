import React, { FunctionComponent } from 'react';
import { AboutMeComponent } from './AboutMe';

import { IntroComponent } from './Intro';

export const HomeComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-around">
      <IntroComponent />
      <AboutMeComponent />
    </div>
  );
};
