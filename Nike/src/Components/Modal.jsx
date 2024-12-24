import React from 'react'

const Modal = ({setmenuClicked,menuClicked}) => {
  return (
    <div className={`fixed top-0 xl:hidden bg-white w-[50%]  bottom-0 z-50
         ${menuClicked ? 'right-0': 'right-[-100%]'} transition-all duration-1000 ease-in-out mt-4
        `}>
    
    
          <div className="flex justify-between items-center px-4">
            <img src={headerLogo} alt="logo" className=""/>
            <button className="text-3xl"  onClick={() => setmenuClicked(false)}>x</button>
          </div>
    
    
          <ul className="flex flex-col justify-center items-start gap-0 mt-2  font-bold">
    
          {navLinks.map(({href,label}) => (
    
            <li className=" border-gray-900 w-full p-2 hover:bg-red-400 hover:text-white px-4 rounded-xl  text-slate-gray ">
              <a href={href} className="font-montserrat text-2xl    ">{label}</a>
            </li>
          ))}
      
          </ul>
        </div>
  )
}

export default Modal