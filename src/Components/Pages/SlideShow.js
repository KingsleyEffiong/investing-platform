import React, { useState, useEffect } from 'react';

const Slideshow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Adjust the duration in milliseconds for automatic sliding

    return () => {
      clearInterval(interval);
    };
  }, [slides]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slideshow">
      <div className="slide">
        <h1 className='slide-h1'>What Our Clients have to say</h1>
        <img src={slides[currentSlide].image} alt="Slide" /><br/>
        <div className="arrows">
        <button onClick={goToPreviousSlide}>&lt;</button>
        <button onClick={goToNextSlide}>&gt;</button>
        </div>
        <div className='p-contain'>
        <p>{slides[currentSlide].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;