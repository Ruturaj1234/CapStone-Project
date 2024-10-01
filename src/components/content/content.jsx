import React from 'react';
import '../content/animations.css'; // Import the animations CSS
import { FaShieldAlt, FaCogs, FaDollarSign, FaClock } from 'react-icons/fa'; // Import icons

function Content() {
  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12 xl:px-6">
        {/* Welcome Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-4xl text-gray-900 font-bold">Welcome to Sai Samarth Polytech</h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            We specialize in excellent polymer treatments, tailored finishing solutions for Pharma clean rooms, and creating a hygienic, antibacterial, antifungal, and dust-free atmosphere.
          </p>
          <a
            href="/About"
            className="mt-6 inline-block px-6 py-2 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition ease-in-out duration-300"
          >
            Learn More About Us
          </a>
        </div>

        {/* Our Technology Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl text-gray-900 font-semibold">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="flex items-center space-x-3">
              <FaShieldAlt className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Right Material Selection</h3>
                <p className="text-gray-600">Choosing the best materials for optimal results.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaCogs className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Right Application</h3>
                <p className="text-gray-600">Expert application techniques for durability.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaDollarSign className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Cost-Effective Solution</h3>
                <p className="text-gray-600">Maximizing value while minimizing costs.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaClock className="text-blue-600 text-3xl" />
              <div>
                <h3 className="font-bold text-xl">Time Frame</h3>
                <p className="text-gray-600">Timely delivery without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
{/* Client Section */}
<div className="bg-white shadow-lg rounded-lg p-6 mb-6">
<div className="mt-0 text-center">
  <h2 className="text-4xl italic font-semibold text-gray-900 mt-0">Our Clients</h2>
  <div className="mt-0 overflow-hidden relative">
    {/* Automatic Sliding Clients Slider */}
    <div className="slider animate-scroll flex space-x-4">
      {[...Array(30)].map((_, i) => (
        <a
          href={`https://www.saisamarthpolytech.com/tt/${i + 1}.jpg`}
          key={i}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-52 w-80 bg-gray-200">
            <img
              src={`https://www.saisamarthpolytech.com/tt/${i + 1}.jpg`}
              alt={`Client ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        </a>
      ))}
    </div>
  </div>
  <a
    href="/ClientPage"
    className="inline-block mt-0 px-8 py-3 bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition ease-in-out duration-300"
  >
    See All Clients
  </a>
</div>
</div>

        {/* Gallery Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-3xl text-gray-900 font-semibold">Gallery</h2>
          <p className="mt-2 text-lg text-gray-600">Check out some of our recent projects!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://via.placeholder.com/300x200?text=Gallery+${i + 1}`}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-auto transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
          <a
            href="/ApplicationPage"
            className="mt-6 inline-block px-6 py-2 bg-orange-600 text-white text-lg font-semibold rounded-lg hover:bg-orange-700 transition ease-in-out duration-300"
          >
            View More in Our Gallery
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;

