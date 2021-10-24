import { FunctionComponent } from 'react';

import BGComponent from './BG';
import awsIcon from './icons/aws.png';
import kubernetesIcon from './icons/kubernetes.png';
import mlIcon from './icons/ml.png';
import nodejsIcon from './icons/nodejs.png';
import reactjsIcon from './icons/reactjs.png';
import SkillWrapper from './SkillWrapper';

const StrengthsComponent: FunctionComponent = () => {
  return (
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-between h-full w-full">
        <div className="font-bold text-2xl sm:text-4xl lg:text-6xl z-10 flex-grow-0 py-2">SKILLS</div>
        <div className="flex flex-col flex-grow w-full z-10 py-5">
          <div className="flex flex-row w-full justify-evenly">
            <SkillWrapper icon={nodejsIcon} title="API's" />
            <SkillWrapper icon={reactjsIcon} title="UI" />
          </div>
          <div className="flex flex-row w-full justify-evenly">
            <SkillWrapper icon={mlIcon} title="ML(python)" />
            <SkillWrapper icon={kubernetesIcon} title="Devops" />
            <SkillWrapper icon={awsIcon} title="Cloud" />
          </div>
        </div>
      </div>
      <BGComponent />
    </div>
  );
};

export default StrengthsComponent;
