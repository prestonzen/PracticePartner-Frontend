import React from "react";

const ResultCard = ({ imageUrl }) => {
  return (
    <div className="p-4">
      <img src={imageUrl} alt="Result" className="w-full h-auto mb-4" />
      <div className="flex justify-center gap-4">
        <button className="border border-primary hover:bg-blue-700 text-primary font-bold px-2 rounded">
          Upscale
        </button>
        <button className="border border-primary hover:bg-blue-700 text-primary font-bold px-2 rounded">
          Variations
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
