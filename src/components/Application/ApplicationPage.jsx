// src/pages/ApplicationPage.jsx
import React from 'react';
import CustomSlider from '../Application/CustomSlider';



const ApplicationPage = () => {
  // Define images for each application
  const applicationImages = {
    1: [
      'https://via.placeholder.com/800x400?text=Line+Flooring+Slide+1',
      'https://via.placeholder.com/800x400?text=Line+Flooring+Slide+2',
    ],
    2: [
      'https://via.placeholder.com/800x400?text=Epoxy+Flooring+Slide+1',
      'https://via.placeholder.com/800x400?text=Epoxy+Flooring+Slide+2',
    ],
    3: [
      'https://via.placeholder.com/800x400?text=Polyurethane+Flooring+Slide+1',
      'https://via.placeholder.com/800x400?text=Polyurethane+Flooring+Slide+2',
    ],
    4: [
      'https://via.placeholder.com/800x400?text=Normal+Flooring+Slide+1',
      'https://via.placeholder.com/800x400?text=Normal+Flooring+Slide+2',
    ],
  };

  const applicationTitles = [
    'Line Flooring',
    'Epoxy Flooring',
    'Polyurethane Flooring',
    'Normal Flooring',
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-gray-600">
        {applicationTitles.map((title, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
              {title}
            </h2>
            <CustomSlider images={applicationImages[index + 1]} />
            <div className="mt-4 text-center">
              <button className="bg-orange-700 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-700 transition duration-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationPage;

