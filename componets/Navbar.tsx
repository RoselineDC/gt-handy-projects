"use client"; // if you’re using Next.js App Router
import Image from "next/image";
import Link from "next/link";
import logo from "../images/gt_handy_projects_logo-removebg-preview.png";



import React, { useState } from "react";

const newLocal = "/images/gt_handy_projects_logo-removebg-preview.png";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={logo}
            alt="G.T Handy Projects Logo"
            width={100}
            height={150}
           
           
            priority 
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            G.T Handy Projects
          </span>
        </a>

        {/* Right buttons */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-gray-200 bg-blue-700 hover:bg-blue-400 focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
              text-sm px-4 py-2 text-center dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
              text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
              focus:outline-none focus:ring-2 focus:ring-gray-200 
              dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Collapsible menu */}
        <div
          className={`${isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-cta"
        >
          <ul
            className="flex flex-col font-medium p-4 md:p-0 mt-4 border 
              border-gray-100 rounded-lg bg-gray-50 md:space-x-8 
              rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
              md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 
              dark:border-gray-700"
          >
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 
                  rounded-sm md:bg-transparent md:text-blue-700 
                  md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm 
                  hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:dark:hover:text-blue-500 
                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm 
                  hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:dark:hover:text-blue-500 
                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm 
                  hover:bg-gray-100 md:hover:bg-transparent 
                  md:hover:text-blue-700 md:dark:hover:text-blue-500 
                  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                  md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
