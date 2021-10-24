import PillButton from 'components/Buttons';
import { FunctionComponent } from 'react';

import { JOB_START_DATE } from './constants';
import { SquareBoxesComponent } from './SquareBoxes';
import { differenceInYearsAndMonths } from './utilities';

const Intro: FunctionComponent = () => {
  const { years: yearsOfExp, months: monthsOfExp } = differenceInYearsAndMonths(JOB_START_DATE, new Date());
  return (
    <div className="relative w-full h-350 sm:h-500 flex flex-col items-start justify-between px-2">
      <div className="flex flex-col z-10 justify-between">
        <div className="font-heading text-4xl sm:text-6xl lg:text-8xl animate-bounce pt-5">Hello! I'm Satvik Daga</div>
        <div className="text-xl sm:text-2xl lg:text-4xl pb-5 pt-2">
          I am a <span className="font-semibold">FULLSTACK</span> developer <br /> with an emphasis on <br />{' '}
          <span className="font-semibold">BACKEND</span> development
        </div>
        <div className="flex flex-row justify-between pt-5">
          <div className="flex flex-col justify-between pr-4">
            <div className="font-semibold text-xl sm:text-2xl lg:text-4xl">100%</div>
            <div>Job Completion</div>
          </div>
          <div className="flex flex-col justify-between pr-4">
            <div className="font-semibold text-xl sm:text-2xl lg:text-4xl">
              {yearsOfExp}y {monthsOfExp > 0 ? `${monthsOfExp}m` : ''}
            </div>
            <div>Experience</div>
          </div>
          <div className="flex flex-col justify-between pr-4">
            <div className="font-semibold text-xl sm:text-2xl lg:text-4xl">2+</div>
            <div>Organizations</div>
          </div>
        </div>
        <div className="pt-5">
          <PillButton>Contact Me</PillButton>
        </div>
      </div>
      <SquareBoxesComponent />
    </div>
  );
};

export default Intro;
