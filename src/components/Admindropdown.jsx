// Dropdown.js
import React, { useState } from 'react';
import { RiAdminFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import Logout from './Logout';
const Admindropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleDropdown}
          
        >
        <div className='text-lg text-slate-700 pr-4'><RiAdminFill /> </div> <p>Admin</p><p className='text-lg text-slate-700 mt-1 pr-4' ><FaAngleDown /></p>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a
              href="/write"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Add Post
            </a>
            <a
              href="/message"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Messages
            </a>
            
              <Logout/>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Admindropdown;
