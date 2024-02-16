import React from 'react';
import { useRef, useEffect } from "react";

const Chat = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className='flex flex-col mt-10 h-svh md:w-[90%] max-md:w-full'>
    <div className="flex flex-col md:mx-12 h-11/12 max-md:mx-1 rounded-lg overflow-hidden">
      <div className="h-full">
        <div className="h-[470px] overflow-y-auto " ref={containerRef}>
        
          <div className="flex items-center px-4 py-2 bg-on-primary-container">
            <img
              src="/person_2.png" // Path to user logo image
              alt="User Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">User Message</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-secondary">
            <img
              src="/logo.png" // Path to AI logo image
              alt="AI Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">AI Message</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-on-primary-container">
            <img
              src="/person_2.png" // Path to user logo image
              alt="User Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">User Message</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-secondary">
            <img
              src="/logo.png" // Path to AI logo image
              alt="AI Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">Pellentesque vitae convallis magna. Nullam nec leo id nisl rhoncus egestas. Integer sodales erat nec ante elementum, sit amet fermentum nunc hendrerit. Nulla facilisi. Sed bibendum metus a malesuada euismod. Nulla facilisi. Nam pellentesque, odio in interdum consequat, magna metus semper velit, in fringilla arcu nulla ac nulla. Nulla facilisi. Nam eu libero neque. Sed sit amet turpis sed dolor lacinia luctus ac ac libero. Integer maximus odio ac leo maximus fermentum. Vivamus vestibulum quam eu massa tristique, ac interdum urna aliquam. Nunc et aliquet felis. Cras ac accumsan quam. Integer sagittis ligula sit amet pharetra convallis. Sed sit amet purus id eros commodo placerat. Suspendisse potenti.</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-on-primary-container">
            <img
              src="/person_2.png" // Path to user logo image
              alt="User Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">User Message</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-secondary">
            <img
              src="/logo.png" // Path to AI logo image
              alt="AI Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">Pellentesque vitae convallis magna. Nullam nec leo id nisl rhoncus egestas. Integer sodales erat nec ante elementum, sit amet fermentum nunc hendrerit. Nulla facilisi. Sed bibendum metus a malesuada euismod. Nulla facilisi. Nam pellentesque, odio in interdum consequat, magna metus semper velit, in fringilla arcu nulla ac nulla. Nulla facilisi. Nam eu libero neque. Sed sit amet turpis sed dolor lacinia luctus ac ac libero. Integer maximus odio ac leo maximus fermentum. Vivamus vestibulum quam eu massa tristique, ac interdum urna aliquam. Nunc et aliquet felis. Cras ac accumsan quam. Integer sagittis ligula sit amet pharetra convallis. Sed sit amet purus id eros commodo placerat. Suspendisse potenti.</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-on-primary-container">
            <img
              src="/person_2.png" // Path to user logo image
              alt="User Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">User Message</div>
          </div>
          <div className="flex items-center px-4 py-2 bg-secondary">
            <img
              src="/logo.png" // Path to AI logo image
              alt="AI Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div className="bg-transparent text-white p-2">Pellentesque vitae convallis magna. Nullam nec leo id nisl rhoncus egestas. Integer sodales erat nec ante elementum, sit amet fermentum nunc hendrerit. Nulla facilisi. Sed bibendum metus a malesuada euismod. Nulla facilisi. Nam pellentesque, odio in interdum consequat, magna metus semper velit, in fringilla arcu nulla ac nulla. Nulla facilisi. Nam eu libero neque. Sed sit amet turpis sed dolor lacinia luctus ac ac libero. Integer maximus odio ac leo maximus fermentum. Vivamus vestibulum quam eu massa tristique, ac interdum urna aliquam. Nunc et aliquet felis. Cras ac accumsan quam. Integer sagittis ligula sit amet pharetra convallis. Sed sit amet purus id eros commodo placerat. Suspendisse potenti.</div>
          </div>
          {/* Add more messages as needed */}
          
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between px-1 mt-4 md:mx-12 sm:mx-8 bg-white border border-primary rounded-lg ">
        <input
          type="text"
          placeholder="Ask Something"
          className="flex-grow px-4 py-3 bg-transparent border-none focus:outline-none text-gray-700 w-[80%] placeholder-black"
          
        />
        <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-800 transition-colors duration-300">
          Generate
        </button>
      </div>
    </div>
  );
};

export default Chat;
