
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from './AuthContext'; // Import the auth context

const Headers = () => {
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function

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

          {/* Right Section */}
          <div className="flex items-center ">
            {isAuthenticated ? (
              <>
                {/* Links shown when user is logged in */}
                <NavLink
                  to="/profile"
                  className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline mr-4"
                >
                  Profile
                </NavLink>
                <button onClick={logout} className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline mr-4">
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Links shown when user is not logged in */}
                <NavLink
                  to="/signup"
                  className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline mr-4"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline mr-4"
                >
                  Login
                </NavLink>
              </>
            )}
            <NavLink
              to="/appointment"
              className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-5"
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>

      {/* Header Inner */}
      <div className="header-inner bg-white py-8 shadow-sm">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo">
              <NavLink to="/">
                <div className="text-blue-600 font-bold text-xl mb-4 md:mb-0">Medi<span className="text-zinc-950">Plus</span></div>
              </NavLink>
            </div>

            {/* Centered Navigation */}
            <nav className="main-menu flex-1 flex justify-space-between ml-80 space-x-8">
              <NavLink to="/" exact activeClassName="text-blue-500" className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline">
                Home
              </NavLink>
              <NavLink to="/about" className="font-medium text-gray-700 hover:text-blue-500">
                About us
              </NavLink>
              <NavLink to="/doctors" activeClassName="text-blue-500" className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline">
                Doctors
              </NavLink>
              <NavLink to="/services" activeClassName="text-blue-500" className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline">
                Services
              </NavLink>
              <NavLink to="/contact" activeClassName="text-blue-500" className="font-medium text-gray-700 hover:text-blue-500 decoration-blue hover:underline">
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;