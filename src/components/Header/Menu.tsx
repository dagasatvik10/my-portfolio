import { FunctionComponent } from 'react';

export const MenuComponent: FunctionComponent = () => {
  return (
    <div className="hidden lg:flex flex-row font-semibold justify-end w-full font-body">
      <div className="hover:font-bold cursor-pointer text-center w-1/4 flex-initial">Home</div>
      <div className="hover:font-bold cursor-pointer text-center w-1/4 flex-none">Portfolio</div>
      <a
        href="https://dev.to/dagasatvik10"
        target="_blank"
        className="hover:font-bold cursor-pointer text-center w-1/4 flex-initial"
        rel="noreferrer"
      >
        Blog
      </a>
      <div className="hover:font-bold cursor-pointer text-center w-1/4 flex-grow">Contact Me</div>
    </div>
  );
};
