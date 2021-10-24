import { FunctionComponent } from 'react';

import AboutMeComponent from './AboutMe';
import IntroComponent from './Intro';
import SkillsComponent from './Skills';

const HomeComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-around">
      <IntroComponent />
      <AboutMeComponent />
      <SkillsComponent />
    </div>
  );
};

export default HomeComponent;
