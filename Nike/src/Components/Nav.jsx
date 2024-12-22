import React from 'react';

// Correctly import the SVG file
import headerlogo from '../assets/images/headerlogo.svg';
// import {hamburger} from '../assets/icons/hamburger.svg';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full border border-gray-700 '>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerlogo} alt="Logo" width={130} height={20}/>
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
