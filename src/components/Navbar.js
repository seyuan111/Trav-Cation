import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div className="cursor-pointer">
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>Trav-Cation</h1>
      </div>
        <ul className='hidden md:flex cursor-pointer'>
            <li className="hover:bg-gray-50 hover:text-black hover:rounded-md">Home</li>
            <li className="hover:bg-gray-50 hover:text-black hover:rounded-md">Book</li>
            <li className="hover:bg-gray-50 hover:text-black hover:rounded-md">Travel</li>
            <li className="hover:bg-gray-50 hover:text-black hover:rounded-md">Destination</li>
            <li className="hover:bg-gray-50 hover:text-black hover:rounded-md">View</li>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className="mr-2 cursor-pointer" size={20}/>
            <BsPerson className="cursor-pointer" size={20}/>
        </div>
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? <AiOutlineClose className="text-black" size={20} /> : <HiOutlineMenuAlt4 size={20}/>}
        </div>

        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
          <ul>
            <h1 className="cursor-pointer">Trav-Cation</h1>
            <li className="border-b cursor-pointer hover:bg-black hover:text-white hover:rounded-md">Home</li>
            <li className="border-b cursor-pointer hover:bg-black hover:text-white hover:rounded-md">Book</li>
            <li className="border-b cursor-pointer hover:bg-black hover:text-white hover:rounded-md">Travel</li>
            <li className="border-b cursor-pointer hover:bg-black hover:text-white hover:rounded-md">Destination</li>
            <li className="border-b cursor-pointer hover:bg-black hover:text-white hover:rounded-md">View</li>

            <div className="flex flex-col">
              <button className="my-6">Search</button>
              <button>Account</button>
            </div>

            <div className="flex justify-between my-6">
              <FaFacebook className="icon"/>
              <FaTwitter className="icon"/>
              <FaYoutube className="icon"/>
              <FaPinterest className="icon"/>
              <FaInstagram className="icon"/>
            </div>

          </ul>
        </div>
    </div>
  )
}

export default Navbar