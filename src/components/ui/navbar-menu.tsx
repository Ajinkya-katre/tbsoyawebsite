import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/images/logo.png'
import navbarmenulist from '../../assets/json/navbar-menu.json'
function Navbarmenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <nav className="bg-white ">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          {/* <!-- Mobile menu button--> */}
          <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
            <span className="absolute -inset-0.5"></span>
            <span className="sr-only">Open main menu</span>
            {/* <!--Icon when menu is closed.Menu open: "hidden", Menu closed: "block" --> */}
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-between  sm:justify-between">
          <div className="flex flex-shrink-0 ">
            <Link to={"/"}>
              <img id="logoImg" src={LogoImg} alt="Your Company" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navbarmenulist.map((menu,index)=>(
                <Link to={menu.menuLink} className="bg-black-100 text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300" aria-current="page">{menu.menuName}</Link>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  
    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    {isOpen && (
    <div className="sm:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col">
            {navbarmenulist.map((menu,index)=>(
                <Link to={menu.menuLink} className="bg-black-100 text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-yellow-500 active:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300" aria-current="page">{menu.menuName}</Link>
              ))}     
      </div>
    </div>
    )}
  </nav>
  </>
  )
}

export default Navbarmenu