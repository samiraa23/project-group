import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="bg-blue-700 text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About Us */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">About Us</h3>
                            <p>
                            At Mediplus, we are more than just a healthcare provider; we are a trusted partner in your journey towards better health. We strive to build lasting relationships with our patients and their families, guided by our core values of compassion, integrity, and excellence.”                                </p>
                            <div className="flex space-x-4 mt-4">
                                <NavLink to="/facebook" className="text-white hover:text-blue-300">
                                    <FaFacebookF />
                                </NavLink>
                                <NavLink to="/google" className="text-white hover:text-blue-300">
                                    <FaGoogle />
                                </NavLink>
                                <NavLink to="/twitter" className="text-white hover:text-blue-300">
                                    <FaTwitter />
                                </NavLink>
                                <NavLink to="/pinterest" className="text-white hover:text-blue-300">
                                    <FaPinterest />
                                </NavLink>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                            <ul>
                                <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>
                                <li><NavLink to="/about" className="hover:text-blue-300">About Us</NavLink></li>
                                <li><NavLink to="/services" className="hover:text-blue-300">Services</NavLink></li>
                                <li><NavLink to="/" className="hover:text-blue-300">Our Cases</NavLink></li>
                                <li><NavLink to="/" className="hover:text-blue-300">Other Links</NavLink></li>
                            </ul>
                        </div>

                        {/* Open Hours */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Open Hours</h3>
                            <ul>
                                <li>Monday - Friday: 8:00 - 20:00</li>
                                <li>Saturday: 9:00 - 18:30</li>
                                <li>Monday - Thursday: 9:00 - 15:00</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                            <p>Subscribe to our newsletter to get the latest news in your inbox.</p>
                            <form className="mt-4 flex">
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="p-2 rounded-l-lg w-2/3"
                                />
                                <button 
                                    type="submit" 
                                    className="bg-blue-700 p-2 rounded-r-lg w-1/3 hover:bg-blue-600"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-8 text-center text-sm">
                        <p>copyright © 2024 Mediplus. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
