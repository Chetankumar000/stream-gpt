import React from "react";
import { FaInfoCircle, FaPlay } from "react-icons/fa";

const MovieTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video  pt-[25%] px-24 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex space-x-4">
        {/* Add space between buttons */}
        <button className="flex items-center bg-white px-10 py-3 text-black border border-gray-300 shadow-md font-bold rounded-lg text-lg hover:bg-opacity-80">
          <FaPlay className="mr-2" /> {/* Margin-right for spacing */}
          Play
        </button>
        <button className="flex items-center bg-dark border px-6 text-white font-bold rounded-lg text-lg hover:bg-gray-800  ">
          <FaInfoCircle className="mr-2" /> {/* Margin-right for spacing */}
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitle;
