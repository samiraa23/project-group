import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="topbar bg-gray-100">
      <div className="container mx-auto py-3">
        <div className="flex justify-between items-center">
          {/* Left Top Links */}
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/about" className="text-gray-700 hover:text-blue-500">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/doctors" className="text-gray-700 hover:text-blue-500">
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className="text-gray-700 hover:text-blue-500">
                FAQ
              </NavLink>
            </li>
          </ul>

          {/* Right Top Links */}
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <i className="fa fa-phone text-blue-500"></i>
              <span className="ml-2 text-gray-700">+880 1234 56789</span>
            </li>
            <li className="flex items-center">
              <i className="fa fa-envelope text-blue-500"></i>
              <a href="mailto:support@yourmail.com" className="ml-2 text-gray-700 hover:text-blue-500">
                support@yourmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Header Inner */}
      <div className="header-inner bg-white py-8 shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo">
              <NavLink to="/">
              <div className="text-blue-600 font-bold text-xl mb-4 md:mb-0">Mediplus</div>
              </NavLink>
            </div>

            {/* Navigation */}
            <nav className="main-menu flex space-x-6">
              <NavLink to="/" exact activeClassName="text-blue-500" className="text-gray-700 hover:text-blue-500 decoration-blue hover:underline">
                Home
              </NavLink>
              <NavLink to="/doctors" activeClassName="text-blue-500" className="text-gray-700 hover:text-blue-500 decoration-blue hover:underline">
                Doctors
              </NavLink>
              <NavLink to="/services" activeClassName="text-blue-500" className="text-gray-700 hover:text-blue-500  decoration-blue hover:underline">
                Services
              </NavLink>
              <div className="relative group">
  <NavLink to="/pages" activeClassName="text-blue-500" className="text-gray-700 hover:text-blue-500  hover:underline decoration-blue">
    Pages
  </NavLink>
  {/* Dropdown */}
  <ul className="hidden absolute group-hover:block bg-white shadow-md py-4 text-left  hover:underline">
    <li>
         <NavLink to="/signup" className="block px-4 py-2 hover:bg-gray-200  hover:underline">
    Sign up
      </NavLink>
    </li>
    <li>
        <NavLink to="/login" className="block px-4 py-2 hover:bg-gray-200  hover:underline">
    login
      </NavLink>
    </li>
  </ul>
</div>
             
              <NavLink to="/contact" activeClassName="text-blue-500" className="text-gray-700 hover:text-blue-500  hover:underline">
                Contact Us
              </NavLink>
            </nav>

            {/* Book Appointment */}
            <div>
              <NavLink to="/appointment" className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book Appointment
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
