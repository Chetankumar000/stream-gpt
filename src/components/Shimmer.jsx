import React from "react";

const Shimmer = () => {
  // Generate an array with 12 elements for the shimmer placeholders
  const placeholders = Array.from({ length: 12 }, (_, index) => index);

  return (
    <div className="flex flex-wrap gap-4 p-4 dark w-full">
      {placeholders.map((_, index) => (
        <div
          key={index}
          className="w-64 h-80 m-4 p-4 bg-gray-800 rounded-md animate-shimmer"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
