import React from 'react'
import { NavLink } from 'react-router-dom';


function Nav() {
  return (
    <div>
            <header className="bg-white shadow">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-blue-600 font-bold text-xl">Mediplus</div>
          <nav className="space-x-4">
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
          <div className="space-x-4">
            <a href="tel:+880123456789" className="text-gray-500">+880 1234 56789</a>
            <a href="mailto:support@yourmail.com" className="text-gray-500">support@yourmail.com</a>
            <NavLink
            to="/appointment">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Book Appointment</button>

            </NavLink>
            <NavLink
            to="/admin">

            </NavLink>
            <NavLink
            to="/adminappoint">

            </NavLink>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav
