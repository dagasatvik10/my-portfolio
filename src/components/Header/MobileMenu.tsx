import { FunctionComponent } from 'react';

type Props = {
  isOpen: boolean;
};

export const MobileMenuComponent: FunctionComponent<Props> = ({ isOpen }) => {
  return (
    <div className="overflow-hidden lg:hidden">
      <div
        className={`flex-col w-full bg-primary2 font-semibold justify-around items-center animate-slideInY ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <div className="py-1 hover:font-bold cursor-pointer inline-block w-auto">Home</div>
        <div className="py-1 hover:font-bold cursor-pointer inline-block w-auto">Portfolio</div>
        <a
          href="https://dev.to/dagasatvik10"
          target="_blank"
          className="py-1 hover:font-bold cursor-pointer inline-block w-auto"
          rel="noreferrer"
        >
          Blog
        </a>
        <div className="py-1 hover:font-bold cursor-pointer inline-block w-auto">Contact Me</div>
      </div>
    </div>
  );
};
