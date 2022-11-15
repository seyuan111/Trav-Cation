import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Cruises from '../assets/Cruises.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <img className='w-full h-full object-cover' src={Cruises} />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30">
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
                <h1>Travel anywhere anytime</h1>
                <h3 className="py-4">Travel with cruises or planes to anywhere</h3>
                <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/70">
                    <div>
                        <input className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none" type="text" placeholder="search trip" />
                    </div>
                    <div>
                        <button><AiOutlineSearch size={20} className="icon" style={{ color: "white"}}/></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Hero