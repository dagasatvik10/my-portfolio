import React, { FunctionComponent } from 'react';

import { BodyComponent } from './Body';
import { CopyrightComponent } from './Copyright';
import { TopNameComponent } from './TopName';

export const FooterComponent: FunctionComponent = () => {
  return (
    <div className="flex flex-col justify-start">
      <TopNameComponent />
      <BodyComponent />
      <CopyrightComponent />
    </div>
  );
};
