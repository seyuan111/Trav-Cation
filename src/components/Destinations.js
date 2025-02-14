import React from "react";
import Vacation from "../assets/Vacation.jpg";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Find Your Perfect Getaway</h1>
      <p className="py-4 text-lg text-gray-600">Top vacation destinations curated for you</p>

      {/* Responsive Flex Layout */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <img className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300" src={Vacation} alt="Main Vacation" />
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Cruise & Vacation</h2>
          <p className="text-lg text-gray-600 mt-4">
            Experience the ultimate getaway with our curated cruise and vacation packages. Whether you're looking for a relaxing beach vacation or an adventurous cruise, we have the perfect destinations for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;

