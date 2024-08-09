import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

const SearchBar = () => {
  const language = useSelector((store) => store.config?.lang);
  console.log(language);

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md text-black"
          placeholder={lang?.[language]?.placeholder}
        />
        <button className="col-span-3 m-4 py-4 px-3 bg-red-700 text-lg text-white rounded-lg">
          {lang?.[language]?.search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
