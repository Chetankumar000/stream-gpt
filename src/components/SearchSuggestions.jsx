import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
import MovieList from "./MovieList";

const SearchSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);

  const { movies, movieNames } = gpt;

  if (!movieNames) return null;

  console.log(movies);

  return (
    <div className="p-4 m-4">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movies[index]} />
        ))}
      </div>
    </div>
  );
};

export default SearchSuggestions;
