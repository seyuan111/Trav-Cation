import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
        <div className="max-w-[1240px] mx-auto flex flex-col px-4">
            <div className="sm:flex text-center justify-between items-center">
                <h2>Trav-cation</h2>
                <div className="flex justify-between w-full sm:max-w-[1280] my-4">
                    <FaFacebook className="icon"/>
                    <FaTwitter className="icon"/>
                    <FaYoutube className="icon"/>
                    <FaPinterest className="icon"/>
                    <FaInstagram className="icon"/>
                </div>
            </div>
            <div className="flex justify-between cursor-pointer">
                <ul className="lg:flex">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Deals</li>
                    <li>Top Booked</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer