import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t-4 border-orange-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Company Information Section */}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold text-orange-500 uppercase border-b-2 border-orange-500 pb-2 mb-3">
              Saisamarth Polytech Pvt. Ltd.
            </h5>
            <p className="text-sm leading-relaxed">
              We specialize in delivering cutting-edge solutions in polymer technology. With a commitment to quality, innovation, and client satisfaction, we aim to be leaders in our field, providing unmatched expertise and service.
            </p>
          </div>

          {/* Explore Links Section */}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold text-orange-500 uppercase border-b-2 border-orange-500 pb-2 mb-3">
              Explore
            </h5>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white hover:text-orange-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white hover:text-orange-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-white hover:text-orange-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/client" className="text-white hover:text-orange-400 transition-colors duration-300">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/application" className="text-white hover:text-orange-400 transition-colors duration-300">
                  Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold text-orange-500 uppercase border-b-2 border-orange-500 pb-2 mb-3">
              Get in Touch
            </h5>
            <p className="text-sm mb-2">We're here to assist you with any questions or inquiries:</p>
            <address className="text-sm">
              <strong>Email:</strong>{' '}
              <Link
                to="mailto:saisamarthpolytech@gmail.com"
                className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
              >
                saisamarthpolytech@gmail.com
              </Link>
              <br />
              <strong>Phone:</strong>{' '}
              <Link to="tel:+919324529411" className="text-orange-500 hover:text-orange-400 transition-colors duration-300">
                +91 9324529411
              </Link>
            </address>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-4 text-center border-t-2 border-orange-500 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Saisamarth Polytech Pvt. Ltd. All Rights Reserved. |{' '}
            <Link to="/privacy" className="hover:text-orange-400 transition-colors duration-300">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/terms" className="hover:text-orange-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



