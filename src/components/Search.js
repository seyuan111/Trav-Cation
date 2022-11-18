import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
          <div>
            <h2>Book your vacation and enjoy your relaxation</h2>
            <p>Have you felt burned out and need a vacation. Well travel anywhere anytime. Choose your destination and travel anywhere. There are beaches and resorts available. Travel to anywhere and enjoy your stay.</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            
            <div>
              <h3 className="py-2">Contact Customer Service</h3>
              <p className="py-1">222-333-4444</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center text-center">          
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
          
          <div>
            <h3 className="py-2">Explore your way</h3>
            <p className="py-1">Airplane</p>
          </div>
        </div>
        </div>
        
        <div>

          <div className="border text-center">
            <p className="pt-2">Book now</p>
            <p className="py-4">Click the button to book your trip</p>
            <p className="bg-gray-800 text-gray-200 py-2">START YOUR BOOKING</p>
          </div>

          <form className="w-full">
            <div className="flex flex-col my-2">
              <label>Destination</label>
              <select className="border-rounded-md p-2">
                <option>Puerto Rico</option>
                <option>Colombia</option>
                <option>Dominican Republic</option>
                <option>Mexico</option>
                <option>Costa Rica</option>
                <option>The Carribeans</option>
              </select>
            </div>
            <div className="flex flex-col my-2">
              <label>Check-In</label>
              <input className="border-rounded-md p-2" type="date"></input>
            </div>
            <div className="flex flex-col my-2">
              <label>Check-Out</label>
              <input className="border-rounded-md p-2" type="date"></input>
            </div>
            <button className="w-full my-4">Rates and Availabilities</button>
          </form>
        </div>
    </div>
  )
}

export default Search