import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ad1 from '../assets/ad1.png';
import ad2 from '../assets/ad2.png';
import ad3 from '../assets/ad3.png';
import ad4 from '../assets/ad4.png';
import ad5 from '../assets/ad5.png';

const Adpart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);
  const slides = [ad1, ad2, ad3, ad4, ad5];
  const navigate = useNavigate();

  useEffect(() => {
    startSlideInterval();

    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  const startSlideInterval = () => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  };

  const handleSwipeStart = (e) => {
    slideInterval.current = e.touches[0].clientX;
  };

  const handleSwipeEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    if (slideInterval.current > endX + 50) {
      manualSlide(1);
    } else if (slideInterval.current < endX - 50) {
      manualSlide(-1);
    }
  };

  const manualSlide = (direction) => {
    clearInterval(slideInterval.current);
    setCurrentIndex((prevIndex) => (prevIndex + direction + slides.length) % slides.length);
    startSlideInterval();
  };

  const goToSlide = (index) => {
    clearInterval(slideInterval.current);
    setCurrentIndex(index);
    startSlideInterval();
  };

  const handleAdClick = (index) => {
    navigate(`/card/${index + 1}`);
  };

  return (
    <div
      className="relative w-[98vw] h-[50vh] overflow-hidden rounded-3xl m-auto mt-3"
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-[50vh] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${slide})` }}
            onClick={() => handleAdClick(index)}
          ></div>
        ))}
      </div>

      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Adpart;