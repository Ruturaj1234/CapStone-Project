import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { FaUserShield } from 'react-icons/fa' // Importing FontAwesome icon

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 bg-white boundary-orange-700">
            <nav className="bg-white border-orange-700 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://www.saisamarthpolytech.com/images/logo.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Navigation Menu */}
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-2 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   <a href ="/Home" > Home </a>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ProductPage"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ApplicationPage"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Application
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/ClientPage"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Clients
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${
                                            isActive ? "text-orange-700" : "text-gray-700"
                                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Admin Icon on the Right */}
                    <div className="lg:order-2">
                        <Link
                            to="/admin"
                            className="flex items-center px-3 py-2 text-orange-700 hover:text-orange-600 transition-colors duration-200"
                        >
                            <FaUserShield className="text-2xl" />
                            <span className="ml-2 hidden lg:block">Admin</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
