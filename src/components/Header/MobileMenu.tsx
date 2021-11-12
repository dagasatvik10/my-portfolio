import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink
          className="py-1 hover:font-extrabold cursor-pointer inline-block w-auto"
          to="/"
          exact
          activeClassName="font-extrabold"
        >
          Home
        </NavLink>
        <NavLink
          className="py-1 hover:font-extrabold cursor-pointer inline-block w-auto"
          to="/portfolio"
          activeClassName="font-extrabold"
        >
          Portfolio
        </NavLink>
        <a
          href="https://dev.to/dagasatvik10"
          target="_blank"
          className="py-1 hover:font-extrabold cursor-pointer inline-block w-auto"
          rel="noreferrer"
        >
          Blog
        </a>
        <NavLink
          className="py-1 hover:font-extrabold cursor-pointer inline-block w-auto"
          to="/contact"
          activeClassName="font-extrabold"
        >
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};
