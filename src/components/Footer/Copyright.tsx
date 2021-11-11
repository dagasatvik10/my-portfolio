import { FunctionComponent } from 'react';

export const CopyrightComponent: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center items-center">Copyright &#169; {currentYear}</div>
      <div className="flex flex-row justify-center items-center">Satvik Daga</div>
    </div>
  );
};
