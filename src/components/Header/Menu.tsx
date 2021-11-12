import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

export const MenuComponent: FunctionComponent = () => {
  return (
    <div className="hidden lg:flex flex-row font-semibold justify-end w-full font-body">
      <NavLink
        className="hover:font-extrabold cursor-pointer text-center w-1/4 flex-initial"
        to="/"
        exact
        activeClassName="font-extrabold"
      >
        Home
      </NavLink>
      <NavLink
        className="hover:font-extrabold cursor-pointer text-center w-1/4 flex-none"
        to="/portfolio"
        activeClassName="font-extrabold"
      >
        Portfolio
      </NavLink>
      <a
        href="https://dev.to/dagasatvik10"
        target="_blank"
        className="hover:font-extrabold cursor-pointer text-center w-1/4 flex-initial"
        rel="noreferrer"
      >
        Blog
      </a>
      <NavLink
        className="hover:font-extrabold cursor-pointer text-center w-1/4 flex-grow"
        to="/contact"
        activeClassName="font-extrabold"
      >
        Contact Me
      </NavLink>
    </div>
  );
};
