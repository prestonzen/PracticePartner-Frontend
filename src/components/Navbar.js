import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Define pathnames where you want to hide the right side of the Navbar
  const hideRightSidePaths = ['/signup', '/login', '/generate-image','/chat','/account', '/history'];

  // Check if the current pathname is in the hideRightSidePaths array
  const shouldHideRightSide = hideRightSidePaths.includes(location.pathname);

  return (
    <nav className="bg-primary-container text-white py-4 px-6 flex justify-between items-center">
      {/* Left side with app name/logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />{' '}
        
        <h1 className="hidden md:block text-2xl text-black">Practice Partner</h1>
      </div>

      {/* Right side with menu options and buttons */}
      {!shouldHideRightSide && (
        <div className="flex items-center space-x-4">
          <ul
            className={`md:flex text-black font-semibold md:space-x-4 ${
              isMenuOpen ? '' : 'hidden'
            }`}
          >
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-gray-400">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-gray-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-gray-400">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Signup and Login buttons */}
          <button className="bg-primary text-white font-bold text-sm rounded-3xl px-6 py-2">
            <Link to="/signup" className="hover:text-gray-400">
              Sign Up
            </Link>
          </button>
          <button className="bg-primary-container border font-bold border-primary text-primary text-sm rounded-3xl px-6 py-2">
            <Link to="/login" className="hover:text-gray-400">
              Log In
            </Link>
          </button>

          {/* Menu toggle button for small screens */}
          <button className="md:hidden" onClick={toggleMenu}>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
