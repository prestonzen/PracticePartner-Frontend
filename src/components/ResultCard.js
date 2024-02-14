import React from "react";
import { FaDownload } from "react-icons/fa"; // Import the download icon from Font Awesome

const ResultCard = ({ imageUrl }) => {
  // Function to handle image download
  const handleDownload = () => {
    // Your logic to download the image
    // For example, using the browser's download functionality
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "result_image.jpg";
    link.click();
  };

  return (
    <div className="p-4">
      <img src={imageUrl} alt="Result" className="w-full h-auto mb-4" />
      <div className="flex justify-center gap-4">
        <button className="border border-primary hover:bg-blue-100 text-primary font-bold px-2 rounded">
          Upscale
        </button>
        <button className="border border-primary hover:bg-blue-100 text-primary font-bold px-2 rounded">
          Variations
        </button>
        <button
          className=" hover:bg-blue-100 text-white font-bold px-2 rounded flex items-center"
          onClick={handleDownload}
        >
          <FaDownload className="mr-1" /> {/* Download icon */}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
