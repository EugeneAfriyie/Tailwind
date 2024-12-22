import React from 'react';

// Correctly import the SVG file
import headerlogo from '../assets/images/headerlogo.svg';

const Nav = () => {
  return (
    <header>
      <nav>
        <a href="/">
          <img src={headerlogo} alt="Header Logo" />
        </a>
      </nav>
    </header>
  );
};

export default Nav;
