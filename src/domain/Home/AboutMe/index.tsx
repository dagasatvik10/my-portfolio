import PillButton from 'components/Buttons';
import { FunctionComponent } from 'react';

import aboutMeBg from './about-bg.png';

const AboutMe: FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-around items-center py-3 px-2">
      <div className="flex flex-row items-center">
        <img src={aboutMeBg} alt="About Me" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-2xl sm:text-4xl lg:text-6xl font-bold">About Me</div>
        <div className="font-bold pt-2 text-base sm:text-xl lg:text-3xl">
          I believe consistency is the key to success.
        </div>
        <div className="text-xs sm:text-base lg:text-xl pt-2">
          I am a fullstack developer with an emphasis on backend development. Writing consistent and good quality code
          is really important to me. I work with my clients to deliver their requirements quickly, using the latest
          available technologies. Please feel free to contact me to discuss any projects you may have in mind.
        </div>
        <div className="pt-5">
          <PillButton>See Portfolio</PillButton>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
