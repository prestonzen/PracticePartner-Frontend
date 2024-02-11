
import React from 'react';

const FooterNavbar = () => {
  return (
    <footer className=" bg-secondary text-white fixed bottom-0 left-0 w-full mt-4">
      <div className="container mx-auto py-4 flex justify-center">
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">Option 1</a>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Option 2</a>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Option 3</a>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Option 4</a>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Option 5</a>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Option 6</a>
          </li>
          <li className='hidden lg:block'>
            <span className="text-gray-400">|</span>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Option 7</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterNavbar;
