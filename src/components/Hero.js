import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Cruises from "../assets/Cruises.jpg";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Background Image */}
      <img className="w-full h-full object-cover" src={Cruises} alt="Cruises" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
          Explore the World
        </h1>
        <h3 className="mt-4 text-lg sm:text-xl">
          Travel by cruises to your favorite destinations.
        </h3>
        <h3 className="mt-4 text-lg sm:text-xl">
        Pick your favorite cruises and your desired destinations. We also offer deals and services
        </h3>

        {/* Search Bar */}
        <button className="mt-6 py-2 px-4 bg-cyan-500 rounded-lg hover:bg-cyan-800 duration-300"><Link to="">book now</Link></button>
      </div>
    </div>
  );
};

export default Hero;
