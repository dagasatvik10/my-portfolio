import React, { FunctionComponent } from 'react';

import { HeaderComponent } from './components/Header';

const App: FunctionComponent = () => {
  return (
    <div className="container mx-auto bg-white flex flex-col font-body h-screen overflow-scroll">
      <HeaderComponent />
    </div>
  );
};

export default App;
