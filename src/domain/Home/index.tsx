import FormComponent from 'components/Form';
import { FunctionComponent } from 'react';

import AboutMeComponent from './AboutMe';
import IntroComponent from './Intro';
import SkillsComponent from './Skills';

const HomeComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-around items-center">
      <IntroComponent />
      <AboutMeComponent />
      <SkillsComponent />
      <FormComponent />
    </div>
  );
};

export default HomeComponent;
