import React, { FunctionComponent, useState } from 'react';

import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { MobileMenuComponent } from './MobileMenu';

export const HeaderComponent: FunctionComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between p-5 h-auto items-center border-b-2 border-solid border-gray-200">
        <div className="font-black text-black text-xl md:text-3xl font-title cursor-pointer">SATVIK DAGA</div>
        <div>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      <MobileMenuComponent isOpen={menuOpen} />
    </>
  );
};
