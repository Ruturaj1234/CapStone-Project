import React, { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
  "https://via.placeholder.com/300x200?text=Image+4",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    // Set up interval for auto slide
    const intervalId = setInterval(nextSlide, 4000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-0 shadow-lg rounded-lg overflow-hidden">
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="slider"
          className="w-full h-[50vh] object-cover transition-transform duration-500 ease-in-out"
        />
      </div>
      {/* Dots for navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-orange-700" : "bg-gray-400"
            } transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

