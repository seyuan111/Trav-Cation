import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-6 px-6 py-16">
      {/* Left Content */}
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Book Your Dream Vacation</h2>
          <p className="mt-4 text-gray-600">
            Feeling burned out? It's time to take a break and travel anywhere you desire. Whether you’re looking for
            a relaxing beach getaway or a luxury resort, we’ve got you covered. Start your adventure today!
          </p>
        </div>

        {/* Icons Section */}
        <div className="grid sm:grid-cols-2 gap-8 py-8">
          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <RiCustomerService2Fill size={40} className="text-blue-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">24/7 Customer Service</h3>
              <p className="text-gray-600">Call us at 222-333-4444</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition">
            <MdOutlineTravelExplore size={40} className="text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Explore Your Way</h3>
              <p className="text-gray-600">Flights, Resorts, Cruises & More</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-4">Start Your Booking</h3>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Destination</label>
            <select className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400">
              <option>Puerto Rico</option>
              <option>Colombia</option>
              <option>Dominican Republic</option>
              <option>Mexico</option>
              <option>Costa Rica</option>
              <option>The Caribbean</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Check-In</label>
            <input className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400" type="date" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-gray-700">Check-Out</label>
            <input className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400" type="date" />
          </div>
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
            Check Rates & Availability
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
