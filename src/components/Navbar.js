import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary-container text-white py-4 px-6 flex justify-between items-center">
      {/* Left side with app name/logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" /> {/* place logo in public folder */}
        <h1 className="text-2xl text-black">Practice Partner</h1>
      </div>
      
      {/* Right side with menu options and buttons */}
      <div className="flex items-center space-x-4">
        <ul className={`md:flex text-black font-semibold md:space-x-4 ${isMenuOpen ? '' : 'hidden'}`}>
          <li>
            <a href="#" className="hover:text-gray-400">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Features</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">About Us</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Pricing</a>
          </li>
        </ul>
        
        {/* Signup and Login buttons */}
        <button className="bg-primary text-white font-bold text-sm rounded-3xl px-6 py-2">Signup</button>
        <button className="bg-primary-container border font-bold border-primary text-primary text-sm rounded-3xl px-6 py-2">Login</button>
        
        {/* Menu toggle button for small screens */}
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
