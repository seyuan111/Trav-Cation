import React from 'react'
import Vacation from '../assets/Vacation.jpg'
import Vacation1 from '../assets/Vacation1.jpg'
import Vacation2 from '../assets/Vacation2.jpg'
import Vacation3 from '../assets/Vacation3.jpg'
import Vacation4 from '../assets/Vacation4.jpg'

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
        <h1>Take a vacation and find resorts</h1>
        <p className="py-4">Best vacations to go</p>
        <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
            <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Vacation} alt="/" />
            <img className="w-full h-full object-cover" src={Vacation1} alt="/" />
            <img className="w-full h-full object-cover" src={Vacation2} alt="/" />
            <img className="w-full h-full object-cover" src={Vacation3} alt="/" />
            <img className="w-full h-full object-cover" src={Vacation4} alt="/" />
        </div>
    </div>
  )
}

export default Destinations