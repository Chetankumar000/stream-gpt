import React from "react";
import SearchBar from "./SearchBar";
import SearchSuggestions from "./SearchSuggestions";
import { BACKGROUND } from "../utils/constant";

const Search = () => {
  return (
    <div>
      <SearchBar />
      <SearchSuggestions />
    </div>
  );
};

export default Search;
