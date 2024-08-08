import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieTitle from "./MovieTitle";
import MovieBackground from "./MovieBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const moviesLength = movies.length;

  const mainMovie = movies[Math.floor(Math.random() * moviesLength)];
  const { id, title, overview } = mainMovie;
  //   console.log(id);

  //   console.log(mainMovie);

  return (
    <div>
      <MovieTitle title={title} overview={overview} />
      <MovieBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
