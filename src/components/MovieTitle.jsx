import React from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video overflow-hidden  pt-[30%] px-12 lg:px-24 absolute bg-gradient-to-r from-black">
      <h1 className=" md:text-3xl  lg:text-5xl lg:font-bold">{title}</h1>
      <p className=" py-3 w-1/2  lg:py-6 lg:text-lg lg:w-1/2">{overview}</p>
      <div className="flex space-x-4">
        {/* Add space between buttons */}
        <button className="flex items-center bg-white px-4 lg:px-10 py-3 text-black border border-gray-300 shadow-md font-bold rounded-lg text-md lg:text-lg hover:bg-opacity-80">
          <FaPlay className="mr-2" /> {/* Margin-right for spacing */}
          Play
        </button>
        <button className="flex items-center bg-dark px-2 border lg:px-6 text-white font-bold rounded-lg lg:text-lg hover:bg-gray-800  ">
          <FaInfoCircle className="mr-2" /> {/* Margin-right for spacing */}
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
