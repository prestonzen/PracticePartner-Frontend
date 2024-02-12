import React from 'react';

const SectionWithText = ({ title, text, buttonText, buttonLink }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl w-full px-4 py-6 rounded-lg">
        <h2 className="text-4xl font-medium mb-4">{title}</h2>
        <p className="mb-4">{text}</p>
        <a href={buttonLink} className="bg-primary text-white font-bold text-sm rounded-full px-4 py-2 hover:bg-primary-light transition-colors duration-300">{buttonText}</a>
      </div>
    </div>
  );
};

export default SectionWithText;
