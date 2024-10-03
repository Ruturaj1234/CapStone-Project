import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for menu
import logo from '../Header/logo.jpg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-white shadow-md border-b-4 border-r-4 border-l-4 border-[#e67e22] rounded-[40px] mt-2 ml-4 mr-4">

            <div className="container mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo and Brand */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-12 h-12 rounded-md shadow-md object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="ml-3 text-xl font-bold text-orange-600 tracking-wide">Saisamarth Polytech Pvt. Ltd.</span>
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
                        className="block mt-4 lg:inline-block lg:mt-0 text-black text-base uppercase font-bold  hover:bg-orange-600 transition-all duration-200 text-0xl"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        to="/About" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-black text-base uppercase font-bold   hover:bg-orange-600 transition-all duration-200 text-0xl"
                        onClick={closeMenu}
                    >
                        About Us
                    </Link>
                    <Link 
                        to="/Contact" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-black text-base uppercase font-bold  hover:bg-orange-600 transition-all duration-200 text-0xl"
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                    <Link 
                        to="/client" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-black  text-base uppercase font-bold hover:bg-orange-600 transition-all duration-200 text-0xl"
                        onClick={closeMenu}
                    >
                        Product
                    </Link>
                    <Link 
                        to="/applications" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-black text-base uppercase font-bold hover:bg-orange-600 transition-all duration-200 text-0xl"
                        onClick={closeMenu}
                    >
                        Applications
                    </Link>
                    <Link 
                        to="/client" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-black    hover:bg-orange-600 transition-all duration-200 text-0xl text-base uppercase font-bold"
                        onClick={closeMenu}
                    >
                        Clients
                    </Link>
                    <Link 
                        to="/login" 
                        className="flex items-center mt-4 lg:mt-0"
                        onClick={closeMenu}
                    >
                        <button 
                            className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-lg flex items-center">
                            <BsFillPersonFill className="mr-2" /> Admin
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;



