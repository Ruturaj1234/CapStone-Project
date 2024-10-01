import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#2c3e50] text-[#ecf0f1] pt-16 pb-10 border-t-4 border-[#e67e22] shadow-lg transition-colors duration-300 hover:bg-[#34495e]">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Company Info */}
                    <div>
                        <h5 className="text-xl font-bold uppercase border-b-2 border-[#e67e22] pb-2 mb-6 text-[#e67e22] transition-transform duration-200 hover:text-[#d35400] hover:translate-y-[-4px]">
                            Saisamarth Polytech Pvt. Ltd.
                        </h5>
                        <p className="text-sm leading-relaxed">
                            We specialize in delivering cutting-edge solutions in polymer technology. With a commitment to quality, innovation, and client satisfaction, we aim to be leaders in our field, providing unmatched expertise and service.
                        </p>
                    </div>

                    {/* Explore Links */}
                    <div>
                        <h5 className="text-xl font-bold uppercase border-b-2 border-[#e67e22] pb-2 mb-6 text-[#e67e22] transition-transform duration-200 hover:text-[#d35400] hover:translate-y-[-4px]">
                            Explore
                        </h5>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-[#e67e22] hover:text-[#f39c12] transition-transform duration-300 hover:translate-y-[-3px]">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus" className="text-[#e67e22] hover:text-[#f39c12] transition-transform duration-300 hover:translate-y-[-3px]">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contactus" className="text-[#e67e22] hover:text-[#f39c12] transition-transform duration-300 hover:translate-y-[-3px]">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="/client" className="text-[#e67e22] hover:text-[#f39c12] transition-transform duration-300 hover:translate-y-[-3px]">Clients</Link>
                            </li>
                            <li>
                                <Link to="/application" className="text-[#e67e22] hover:text-[#f39c12] transition-transform duration-300 hover:translate-y-[-3px]">Application</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="text-xl font-bold uppercase border-b-2 border-[#e67e22] pb-2 mb-6 text-[#e67e22] transition-transform duration-200 hover:text-[#d35400] hover:translate-y-[-4px]">
                            Get in Touch
                        </h5>
                        <p className="text-sm leading-relaxed">We're here to assist you with any questions or inquiries:</p>
                        <address className="not-italic text-sm">
                            <strong>Email:</strong> <Link to="mailto:saisamarthpolytech@gmail.com" className="text-[#e67e22] hover:text-[#f39c12]">saisamarthpolytech@gmail.com</Link><br />
                            <strong>Phone:</strong> <Link to="tel:+919324529411" className="text-[#e67e22] hover:text-[#f39c12]">+91 9324529411</Link>
                        </address>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-8">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Saisamarth Polytech Pvt. Ltd. All Rights Reserved. | <Link to="/privacy" className="text-[#e67e22] hover:text-[#f39c12]">Privacy Policy</Link> | <Link to="/terms" className="text-[#e67e22] hover:text-[#f39c12]">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
