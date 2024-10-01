import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu
import logo from '../Header/logo.jpg';


const Header = () => {
    // State to toggle mobile menu visibility
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when a link is clicked (useful for mobile)
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-grey shadow-md border-b-4 border-[#e67e22]">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo and Brand */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 rounded-md shadow-md object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <span className="ml-3 text-xl font-bold text-[#e67e22] tracking-wide">
                        Saisamarth Polytech Pvt. Ltd.
                    </span>
                </Link>

                {/* Hamburger Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-2xl focus:outline-none text-gray-700">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Links for large screens */}
                
    <div className={`lg:flex lg:items-center lg:space-x-6 ${isOpen ? "block" : "hidden"}`}>
                    <Link 
                        to="/" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/About" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200"
                        onClick={closeMenu}
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/contactus" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200"
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                    <Link 
                        to="/applications" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200"
                        onClick={closeMenu}
                    >
                        Applications
                    </Link>
                    <Link 
                        to="/client" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200"
                        onClick={closeMenu}
                    >
                        Clients
                    </Link>
                    <Link 
                        to="/Contact" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200"
                        onClick={closeMenu}
                    >
                       Contact
                    </Link>
                    <Link 
                        to="/admin" 
                        className="flex items-center mt-4 lg:mt-0"
                        onClick={closeMenu}
                    >
                        <button className="bg-[#e67e22] text-white py-2 px-4 rounded-lg hover:bg-[#d35400] hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                            <BsFillPersonFill className="mr-2" /> Admin
                        </button>
                    </Link>
                </div>
            </div>

            {/* Mobile Menu (Optional: For smoother transitions, you can keep this separate if needed) */}
            {/* 
            <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="flex flex-col items-center space-y-4 pb-4">
                    <Link to="/" className="text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200" onClick={closeMenu}>Home</Link>
                    <Link to="/aboutus" className="text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200" onClick={closeMenu}>About Us</Link>
                    <Link to="/contactus" className="text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200" onClick={closeMenu}>Contact Us</Link>
                    <Link to="/applications" className="text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200" onClick={closeMenu}>Applications</Link>
                    <Link to="/client" className="text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200" onClick={closeMenu}>Clients</Link>
                    <Link to="/feedback" className="text-gray-800 text-base uppercase hover:text-[#e67e22] transition-all duration-200" onClick={closeMenu}>Feedback</Link>
                    <Link to="/admin" className="flex items-center" onClick={closeMenu}>
                        <button className="bg-[#e67e22] text-white py-2 px-4 rounded-lg hover:bg-[#d35400] hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                            <BsFillPersonFill className="mr-2" /> Admin
                        </button>
                    </Link>
                </div>
            </div>
            */}

        </nav>


);

};
        

           


export default Header;

        
