/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    // Function to send email using EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        // Replace these with your actual service ID, template ID, and user ID
        emailjs.sendForm('service_8frov2h', 'template_p8ipb3r', form.current, 'DPN184T73b63Rscut')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="container mx-auto mt-12 mb-12 px-4">
            {/* Introductory Section */}
            <div className="bg-orange-500 p-6  shadow-lg mb-6 rounded-2xl " >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">We're Here to Help!</h2>
                <p className="text-center text-gray-600">
                    If you have any questions, feedback, or need support, feel free to reach out to us. 
                    We appreciate your interest and are eager to assist you.
                </p>
            </div>

            {/* Title Section */}
            <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-600 uppercase tracking-wide mb-6">
                Contact Us
            </h1>
            <div className="flex justify-center mb-6">
                <div className="h-1 w-12 bg-orange-500 rounded-full"></div>
            </div>

            {/* Address and Form Section */}
            <div className="flex flex-col md:flex-row md:space-x-8">
                {/* Address Section */}
                <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-md mb-8 md:mb-0 hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-2xl font-semibold text-center mb-4">Our Office</h3>
                    <div className="text-gray-700 space-y-4">
                        <p className="flex items-start">
                            <FaLocationDot className="text-orange-500 mr-2 mt-1" />
                            213, 2nd Floor, Sai Arcade,<br />
                            Above Union Bank of India,<br />
                            Netaji Subhash Road, Mulund-West,<br />
                            Mumbai - 400080, India.
                        </p>
                        <p className="flex items-center">
                            <MdEmail className="text-orange-500 mr-2" />
                            <Link to="mailto:truturajdadas256@gmail.com" className="text-orange-500 hover:underline">
                                truturajdadas256@gmail.com
                            </Link>
                        </p>
                        <p className="flex items-center">
                            <FaPhone className="text-orange-500 mr-2" />
                            <Link to="tel:+919324529411" className="text-orange-500 hover:underline">
                                +91 9324529411
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="md:w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
                    <p className="text-center text-gray-600 mb-6">
                        Fill out the form below, and one of our team members will respond to you promptly.
                    </p>
                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                type="text"
                                name="user_name"
                                placeholder="Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                type="text"
                                name="user_phone"
                                placeholder="Phone No"
                                required
                            />
                        </div>
                        <div>
                            <input
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                type="email"
                                name="user_email"
                                placeholder="E-mail"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
                            >
                                Submit Inquiry
                            </button>
                        </div>
                    </form>
                    <p className="text-center text-gray-600 mt-4">
                        Thank you for reaching out. We value your input and look forward to assisting you.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;

