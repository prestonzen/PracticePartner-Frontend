import React from 'react';
import { Link } from 'react-router-dom';

const SectionWithTextAndPicture = ({ title, subtitle, text, buttonText, buttonLink, imageSource, imageAlt, textOnLeft }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between mx-8 items-center sm:flex-col-reverse mb-32">
      {textOnLeft ? (
        <>
          <div className="md:w-1/2 md:pr-4 flex flex-col space-y-4 sm:space-y-5">
            <h2 className="font-semibold md:text-6xl sm:text-5xl mb-2 md:text-start sm:text-center">{title}</h2>
            <h3 className="md:text-3xl sm:text-2xl w-[90%] font-medium mb-2">{subtitle}</h3>
            <p className="mb-2 md:text-lg sm:text-sm w-[95%]">{text}</p>
            <Link to={buttonLink} className="sm:self-center md:self-start bg-primary text-center text-white font-bold text-sm rounded-full w-1/3  py-2 hover:bg-primary-light transition-colors duration-300">{buttonText}</Link>
          </div>
          <div className="md:w-1/2 md:pl-4 sm:mb-4">
            <img src={imageSource} alt={imageAlt} className="w-full h-auto" />
          </div>
        </>
      ) : (
        <>
          <div className="md:w-1/2 md:pr-4 sm:mb-4">
            <img src={imageSource} alt={imageAlt} className="w-full h-auto" />
          </div>
          <div className="md:w-1/2 md:pl-4 flex flex-col space-y-4 sm:space-y-5">
            <h2 className="font-semibold md:text-6xl sm:text-5xl mb-2 md:text-start sm:text-center">{title}</h2>
            <h3 className="md:text-3xl sm:text-2xl w-[90%] font-medium mb-2">{subtitle}</h3>
            <p className="mb-2 md:text-lg sm:text-sm w-[95%]">{text}</p>
            <Link to={buttonLink} className="sm:self-center md:self-start bg-primary text-center text-white font-bold text-sm rounded-full w-1/3  py-2 hover:bg-primary-light transition-colors duration-300">{buttonText}</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default SectionWithTextAndPicture;
