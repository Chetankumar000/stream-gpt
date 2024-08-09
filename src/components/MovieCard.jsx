import React from "react";
import { MOVIE_URL } from "../utils/constant";

const MovieCard = ({ poster_url }) => {
  if (!poster_url) return null;
  return (
    <div className="w-72 m-2">
      <img
        className="rounded-md"
        src={MOVIE_URL + poster_url}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
