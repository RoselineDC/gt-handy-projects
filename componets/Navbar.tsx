'use client';

import { FaBars, FaEnvelope, FaBell, FaFlag, FaCog } from 'react-icons/fa';
import React, { useState } from 'react';
import Image from 'next/image';
import { SidebarItem } from './Sidebar';
import logo from "../images/gt_handy_projects_logo-removebg-preview.png";

export default function UpNavBar({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white px-4 py-0 items-center justify-center block md:hidden">

        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={logo}
            alt="G.T Handy Projects Logo"
            width={80}
            height={80}
            priority
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white sm:block">
            G.T Handy Projects
          </span>
        </a>

      </div>

      <header className="bg-white px-4 py-2 flex justify-between items-center">
        {/* Left menu icon */}
        <div className="text text-xl" onClick={toggleSidebar}>
          <FaBars />
        </div>

        {/* Logo */}
        <a href="/" className="hidden md:flex items-center  rtl:space-x-reverse">
          <Image
            src={logo}
            alt="G.T Handy Projects Logo"
            max-width={10}
            max-height={20}
            priority
          />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">
            G.T Handy Projects
          </span> */}
        </a>



        {/* Desktop menu (hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 text-grey-700">

          <div>Home</div>
          <div>About</div>
          <div>Services</div>
        </div>
        <button
          type="button"
          className="text-black bg-blue-300 hover:bg-blue-100 focus:ring-4 
        focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
        text-sm px-4 py-2 text-center  
        dark:hover:bg-blue-500"
        >
          Quote Request
        </button>
      </header>

    </>
  );
}
