import { FunctionComponent } from 'react';

import { BodyComponent } from './Body';
import { CopyrightComponent } from './Copyright';
import { TopNameComponent } from './TopName';

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-start">
      <TopNameComponent />
      <BodyComponent />
      <CopyrightComponent />
    </div>
  );
};

export default Footer;
