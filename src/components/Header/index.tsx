import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import { ReactComponent as XIcon } from 'assets/icons/x.svg';
import React, { FunctionComponent, useState } from 'react';

import { MenuComponent } from './Menu';
import { MobileMenuComponent } from './MobileMenu';

const Header: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between p-5 h-auto items-center border-b-2 border-solid border-white bg-primary2">
        <div role="heading" aria-level={1} className="font-black text-xl lg:text-3xl font-title cursor-pointer">
          SATVIK DAGA
        </div>
        <div className="w-1/3">
          <MenuComponent />
          <div
            role="button"
            aria-pressed="false"
            aria-label="menu"
            className="lg:hidden cursor-pointer float-right"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? <XIcon title="x" /> : <MenuIcon title="menu" />}
          </div>
        </div>
      </div>
      <MobileMenuComponent isOpen={menuOpen} />
    </>
  );
};

export default Header;
