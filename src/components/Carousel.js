import React, { useState, useEffect } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    { url: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60' },
    { url: 'https://images.unsplash.com/photo-1617170788899-ef9587d6e63f?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60' },
    { url: 'https://images.unsplash.com/photo-1617339860293-8c1b58e7c4ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60' },
    { url: 'https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=60' },
];

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const nextSlide = () => setSlide((prev) => (prev + 1) % length);
    const prevSlide = () => setSlide((prev) => (prev - 1 + length) % length);

    // Swipe functionality
    useEffect(() => {
        let startX = 0;
        const handleTouchStart = (e) => (startX = e.touches[0].clientX);
        const handleTouchEnd = (e) => {
            let endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) nextSlide();
            if (endX - startX > 50) prevSlide();
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className="relative max-w-[700px] mx-auto px-4 py-10 overflow-hidden">
            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-4xl cursor-pointer z-10 transition hover:scale-110"
                aria-label="Previous Slide"
            >
                <BsArrowLeftSquareFill />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl md:text-4xl cursor-pointer z-10 transition hover:scale-110"
                aria-label="Next Slide"
            >
                <BsArrowRightSquareFill />
            </button>

            {/* Slide Container */}
            <div className="relative w-full flex items-center">
                <div
                    className="w-full flex transition-transform duration-500"
                    style={{ transform: `translateX(-${slide * 100}%)` }}
                >
                    {sliderData.map((item, index) => (
                        <img
                            key={index}
                            src={item.url}
                            alt="carousel"
                            className="w-full h-[250px] md:h-[400px] object-cover rounded-md flex-shrink-0"
                        />
                    ))}
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {sliderData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${slide === index ? 'bg-white' : 'bg-gray-500'} transition-all duration-300 cursor-pointer`}
                        onClick={() => setSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
