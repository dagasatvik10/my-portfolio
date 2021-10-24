import React, { FunctionComponent } from 'react';

const PillButton: FunctionComponent = ({ children }) => {
  return <button className="bg-secondary1 text-white font-bold rounded-full py-2 px-4 sm:text-xl">{children}</button>;
};

export default PillButton;
