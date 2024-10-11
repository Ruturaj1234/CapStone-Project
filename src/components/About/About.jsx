import React from 'react';
import { FaFlask, FaTools, FaShieldAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-gray-100 py-12">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Saisamarth Polytech Pvt. Ltd.
          </h1>
          <p className="text-gray-600 mb-6">
            At Saisamarth Polytech Pvt. Ltd., we specialize in providing exceptional polymer treatments, tailor-made finishing solutions for pharmaceutical clean rooms, and creating hygienic, antibacterial, antifungal, and dust-free atmospheres. Our technology focuses on the right material selection, right application, cost-effective solutions, and timely delivery.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/services">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-700 transition duration-300">
                Application
              </button>
            </Link>
            <Link to="/contactus">
              <button className="bg-transparent border-2 border-orange-600 text-orange-600 px-6 py-3 rounded-full hover:bg-orange-600 hover:text-white transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=1200&q=80"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="container mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Vision */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaFlask className="text-blue-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To be a global leader in polymer treatment and clean room solutions.</li>
              <li>To develop sustainable, hygienic, and cost-effective solutions for industries worldwide.</li>
              <li>To create partnerships based on trust, innovation, and continuous improvement.</li>
            </ul>
          </div>

          {/* Our Mission */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <FaTools className="text-blue-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To offer the right material selection for each unique project.</li>
              <li>To provide cost-effective and timely solutions tailored to client needs.</li>
              <li>To innovate and adapt to the evolving needs of our clients through research and development.</li>
              <li>To maintain transparency, integrity, and customer satisfaction at every level.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 md:px-12 mt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center justify-center mb-4">
            <FaShieldAlt className="text-blue-600 text-5xl mr-3" />
            <h1 className="text-2xl font-semibold text-gray-800">What We Provide</h1>
          </div>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Right material selection for every project.</li>
            <li>Tailor-made applications that meet the specific needs of our clients.</li>
            <li>Cost-effective solutions that do not compromise on quality.</li>
            <li>Delivering projects within a set time frame to ensure client satisfaction.</li>
          </ul>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="container mx-auto px-6 md:px-12 mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-600 mb-6">
              "Saisamarth Polytech Pvt. Ltd. has been instrumental in enhancing our clean room environments with their tailor-made solutions. Their expertise and commitment are unparalleled."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://www.saisamarthpolytech.com/tt/11.jpg"
                alt="Tech Innovators Inc."
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="text-center">
                <h4 className="text-gray-800 font-semibold">Tech Innovators Inc.</h4>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-600 mb-6">
              "Their polymer treatment solutions have significantly improved our product quality and hygiene standards. We highly recommend their services."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://www.saisamarthpolytech.com/tt/10.jpg"
                alt="PharmaClean Solutions"
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="text-center">
                <h4 className="text-gray-800 font-semibold">PharmaClean Solutions</h4>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="text-gray-600 mb-6">
              "The antibacterial and antifungal solutions provided by Saisamarth Polytech have created a safer and dust-free atmosphere in our facilities. Exceptional quality and service!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://www.saisamarthpolytech.com/tt/13.jpg"
                alt="HygieneFirst Corp."
                className="w-24 h-24 object-contain mb-4"
              />
              <div className="text-center">
                <h4 className="text-gray-800 font-semibold">HygieneFirst Corp.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-700 py-12 mt-16 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 w-full md:w-[600px] mx-auto">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-gray-200 mb-6">
            Contact us today to discover how our solutions can help your business thrive.
          </p>
          <Link to="/Contact">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-full shadow-md hover:bg-orange-200 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
