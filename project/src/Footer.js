import React from 'react';

const Footer = () => {
    return (
        <>
        <div className=" text-blue-900 p-6 rounded-lg mb-5 flex justify-between items-center mx-80">
        <div>
            <h2 className="text-2xl font-bold mb-2">Sign up for newsletter</h2>
            <p>Stay updated with our latest news and offers.</p>
        </div>
        <form className="flex">
            <input 
                type="email" 
                placeholder="Your email address"
                className="p-3 rounded-l-lg w-full md:w-64"
            />
            <button 
                type="submit" 
                className="bg-blue-700 text-white p-2 rounded-r-lg hover:bg-blue-600"
            >
                Subscribe
            </button>
        </form>
    </div>
        <footer className="bg-blue-900 text-white py-10">
            <div className="container mx-auto px-4">
                {/* Sign up for Newsletter */}
          

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit do eiusmod tempor incididunt ut labore dolore magna.</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-google"></i></a>
                            <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-pinterest"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><a href="#" className="hover:text-blue-300">Home</a></li>
                            <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-300">Services</a></li>
                            <li><a href="#" className="hover:text-blue-300">Our Cases</a></li>
                            <li><a href="#" className="hover:text-blue-300">Other Links</a></li>
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
                        <form className="mt-4">
                            <input type="email" placeholder="Email Address" className="p-2 rounded-l-lg w-2/3" />
                            <button type="submit" className="bg-blue-700 p-2 rounded-r-lg w-1/3 hover:bg-blue-600">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="mt-8 text-center text-sm">
                    <p>© 2024 Mediplus. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
