import React from "react";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import { BACKGROUND } from "../utils/constant";

const Search = () => {
  console.log(process.env.REACT_APP_TMDB_KEY);

  return (
    <div className="pt-[35%] md:pt-[20%] lg:p-0">
      <SearchBar />
      <SearchSuggestions />
    </div>
  );
};

export default Search;
