import React, {useState} from 'react'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { BsArrowRightSquareFill } from 'react-icons/bs'

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhlJTIwY2FycmliZWFuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1617170788899-ef9587d6e63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRoZSUyMGNhcnJpYmVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1617339860293-8c1b58e7c4ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRoZSUyMGNhcnJpYmVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
    },
    {
        url: 'https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2glMjBmbGlwJTIwZmxvcHN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
    },
]

const Carousel = () => {
    const [slide, setSlide] = useState(0)
    const length = sliderData.length

    const prevSlide = () => {
        setSlide(slide === length -1 ? 0 : slide +1)
    }

    const nextSlide = () => {
        setSlide(slide === 0 ? length -1 : slide - 1)
    }

  return (
    <div className="max-w-[700px] mx-auto px-4 py-16 relative flex justify-center items-center">
        <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"/>
        <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"/>
        {sliderData.map((item, index) => {
            return(
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && (<img className="w-full rounded-md" src={item.url} alt="/" />)}
            </div>
            )
        })}
    </div>
  )
}

export default Carousel