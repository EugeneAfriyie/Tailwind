import React from 'react';
import { headerLogo } from '../assets/images';
import {navLinks} from '../Constants/index'
import { hamburger } from '../assets/icons';

const Nav = ({menuClicked,setmenuClicked}) => {


    const handleClick = () => {
      setmenuClicked(!menuClicked)
    }
  
  return (
    <header className=" padding-x py-8 fixed z-10 w-full  border-gray-700 bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={20} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {link.label}
              </a>
            </li>
          ))}

          
        </ul>

        <div className="max-lg:block hidden" onClick={handleClick} >
          <img src={hamburger} alt="" width={25} height={25}  />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
