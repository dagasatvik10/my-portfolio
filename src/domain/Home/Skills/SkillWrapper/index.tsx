import { FunctionComponent } from 'react';

type Props = {
  title: string;
  icon: string;
};

const Skills: FunctionComponent<Props> = ({ icon, title }) => {
  return (
    <div className="box-border flex flex-col mx-2 my-3 w-1/3 bg-secondary2 bg-opacity-25 rounded border-secondary2 border">
      <div className="text-base sm:text-xl lg:text-3xl p-2 font-bold text-secondary1 rounded-skills bg-white">
        {title}
      </div>
      <div className="flex flex-row justify-center p-1">
        <img className="api-icon w-150" src={icon} alt="API" />
      </div>
    </div>
  );
};

export default Skills;
