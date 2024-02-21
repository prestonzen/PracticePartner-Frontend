import React, { useState } from 'react';
import { Link, useLocation,  useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

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
      <div className="flex items-center cursor-pointer" onClick={handleClick}>
        <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />{' '}
        
        <h1 className="hidden md:block text-2xl text-black">Practice Partner</h1>
      </div>

      {/* Right side with menu options and buttons */}
      {!shouldHideRightSide && (
        <div className="flex items-center space-x-4 max-md:space-x-1">
        
          <ul
            className={`md:flex text-black font-semibold md:space-x-4 max-md:text-sm ${
              isMenuOpen ? '' : 'hidden'
            }`}
          >
          {/* <div className='md:flex md:space-x-4 max-md:flex-col'> */}
            <li>
              <Link to="/" className="hover:text-gray-400 ">
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
            {/* </div> */}
          </ul>

          {/* Signup and Login buttons */}
          <button className="bg-primary text-white font-bold max-md:font-semibold text-sm max-md:text-xs rounded-3xl px-6 max-md:px-3 py-2 max-md:py-1">
            <Link to="/signup" className="hover:text-gray-400">
              SignUp
            </Link>
          </button>
          <button className="bg-primary-container border font-bold max-md:font-semibold border-primary text-primary text-sm max-md:text-xs rounded-3xl px-6 max-md:px-3 py-2 max-md:py-1">
            <Link to="/login" className="hover:text-gray-400">
              LogIn
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
