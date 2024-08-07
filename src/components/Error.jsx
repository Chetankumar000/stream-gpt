// src/components/SimpleErrorPage.js
import React from "react";

const SimpleErrorPage = ({ errorCode = 404, message = "Page Not Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold text-red-600">{errorCode}</h1>
      <p className="mt-2 text-lg">{message}</p>
    </div>
  );
};

export default SimpleErrorPage;
