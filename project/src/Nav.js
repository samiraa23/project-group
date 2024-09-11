import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <header className="bg-white shadow">
        <div className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-blue-600 font-bold text-xl mb-4 md:mb-0">Mediplus</div>

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <NavLink
              to="/"
              className="text-gray-700 hover:text-blue-600"
              activeClassName="font-bold text-blue-600"
            >
              Home
            </NavLink>
            <NavLink
              to="/doctors"
              className="text-gray-700 hover:text-blue-600"
              activeClassName="font-bold text-blue-600"
            >
              Doctors
            </NavLink>
            <NavLink
              to="/services"
              className="text-gray-700 hover:text-blue-600"
              activeClassName="font-bold text-blue-600"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-blue-600"
              activeClassName="font-bold text-blue-600"
            >
              Contact
            </NavLink>
            <NavLink
              to="/faq"
              className="text-gray-700 hover:text-blue-600"
              activeClassName="font-bold text-blue-600"
            >
              FAQ
            </NavLink>
          </nav>

          {/* Contact and Appointment Button */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
            <a href="tel:+880123456789" className="text-gray-500">+880 1234 56789</a>
            <a href="mailto:support@yourmail.com" className="text-gray-500">support@yourmail.com</a>
            <NavLink to="/appointment">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
                Book Appointment
              </button>
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Nav;
