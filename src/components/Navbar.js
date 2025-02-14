import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    // Disable scrolling when menu is open
    document.body.style.overflow = nav ? "auto" : "hidden";
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center h-16 px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800 cursor-pointer">
          <Link to='/'>Trav-Cation</Link>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500 transition duration-300">
            Explore
          </Link>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Cruise Deal
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            Manage
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300">
            FAQ
          </a>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <BiSearch className="text-gray-700 cursor-pointer" size={22} />
          <BsPerson className="text-gray-700 cursor-pointer" size={22} />
        </div>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="md:hidden cursor-pointer z-50">
          {nav ? (
            <AiOutlineClose className="text-gray-800" size={26} />
          ) : (
            <HiOutlineMenuAlt4 size={26} />
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          nav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleNav} // Close menu when clicking outside
      >
        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 w-3/4 sm:w-2/5 md:w-1/3 h-full bg-white p-6 shadow-lg transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Trav-Cation
          </h1>
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
              Explore
            </li>
            <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
              Cruise Deals
            </li>
            <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
              Manage
            </li>
            <li className="hover:text-blue-500 transition duration-300 cursor-pointer">
              FAQ
            </li>
          </ul>

          <div className="mt-6 flex gap-4 items-center justify-center">
            <BiSearch className="text-gray-700 cursor-pointer" size={22} />
            <BsPerson className="text-gray-700 cursor-pointer" size={22} />
          </div>

          <div className="flex justify-between mt-6 text-gray-700">
            <FaFacebook className="cursor-pointer hover:text-blue-500" size={24} />
            <FaTwitter className="cursor-pointer hover:text-blue-500" size={24} />
            <FaYoutube className="cursor-pointer hover:text-red-500" size={24} />
            <FaPinterest className="cursor-pointer hover:text-red-500" size={24} />
            <FaInstagram className="cursor-pointer hover:text-pink-500" size={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
